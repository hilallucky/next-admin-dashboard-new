import { Request, Response } from "express";
import User from "../../db/models/User";
import Helper from "../../helpers/BaseResponseHelper";
import PasswordHelper from "../../helpers/PasswordHelper";
import JWTHelper from "../../helpers/JWTHelper";
import dotenv from "dotenv";
import { Op, where } from "sequelize";
import Role from "../../db/models/Role";
import RoleMenuAccess from "../../db/models/RoleMenuAccess";
import SubMenu from "../../db/models/SubMenu";
import MasterMenu from "../../db/models/MasterMenu";

dotenv.config();

const GetUser = async (req: Request, res: Response): Promise<Response> => {
    try {
        const users = await User.findAll({
            where: {
                active: true,
            },
        });

        if (!users) {
            return res.status(404).send(Helper.ResponseData(res.statusCode, "User not found", null, null));
        }

        return res.status(200).send(Helper.ResponseData(res.statusCode, "OK", null, users));
    } catch (error) {
        return res.status(500).send(Helper.ResponseData(res.statusCode, "Internal Server Error", error, null));
    }
};

const RegisterUser = async (req: Request, res: Response): Promise<Response> => {
    try {
        const {
            firstName,
            lastName,
            email,
            password,
            roleId,
            accessToken,
            verified,
            active,
        } = req.body;

        const hashedPassword = await PasswordHelper.PasswordHashing(password)

        const create = await User.create({
            firstName,
            lastName,
            email,
            password: hashedPassword,
            roleId,
            accessToken,
            verified,
            active,
        });

        return res.status(201).send(Helper.ResponseData(res.statusCode, "Created", null, create));

    } catch (error) {
        return res.status(500).send(Helper.ResponseData(res.statusCode, "Internal Server Error", error, null));
    }
};

const LoginUser = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({
            where: {
                email
            }
        })
        if (!user) {
            return res.status(401).send(Helper.ResponseData(401, `Unauthorized User`, `Invalid User with email = ${email}`, null));
        }

        if (!user.active) {
            return res.status(401).send(Helper.ResponseData(401, "", "User not verified", null));
        }

        const isMatch = await PasswordHelper.PasswordCompare(password, user.password);
        if (!isMatch) {
            return res.status(401).send(Helper.ResponseData(401, "Unauthorized User", "Incorrect password", null));
        }

        let dataUser = {}

        dataUser = {
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            roleId: user.roleId,
            verified: user.verified,
            active: user.active,
        }

        const token = JWTHelper.GenerateToken(dataUser);
        const refreshToken = JWTHelper.GenerateRefreshToken(dataUser); // send it to user cookie

        user.accessToken = refreshToken
        await user.save();

        res.cookie(process.env.TOKEN_COOKIE_NAME as string, refreshToken, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000 // 1 day, because its milisecond
        })

        // accessToken: user.accessToken,
        dataUser = { ...dataUser, token }

        const roleAccess = await RoleMenuAccess.findAll({
            where: {
                roleId: user.roleId,
                active: true
            }
        });

        const listSubmenuId = roleAccess.map((item) => {
            return item.submenuId
        });

        const menuAccess = await MasterMenu.findAll({
            where: {
                active: true
            },
            order: [
                ['order', 'ASC'],
                [SubMenu, 'order', 'ASC']
            ],
            include: {
                model: SubMenu,
                where: {
                    id: { [Op.in]: listSubmenuId }
                },
            }
        });

        dataUser = { ...dataUser, menuAccess: menuAccess }

        return res.status(200).send(Helper.ResponseData(res.statusCode, "OK", null, dataUser));
    } catch (error) {
        return res.status(500).send(Helper.ResponseData(res.statusCode, "Internal Server Error", error, null));
    }
}

const RefreshToken = async (req: Request, res: Response): Promise<Response> => {
    try {

        const refreshToken: string = req.cookies?.[process.env.TOKEN_COOKIE_NAME as string] as string;

        if (!refreshToken) {
            return res.status(401).send(Helper.ResponseData(401, "Unauthorized User", "Invalid Refresh Token", null));
        }

        const extracted = JWTHelper.ExtractRefreshToken(refreshToken);

        if (!extracted) {
            return res.status(401).send(Helper.ResponseData(401, "Unauthorized User", "Invalid Refresh Token", null));
        }


        // const user = await User.findOne({
        //     where: {
        //         email: extracted.email as string
        //     }
        // })

        // if (!user || user.accessToken !== refreshToken) {
        //     return res.status(401).send(Helper.ResponseData(401, "Unauthorized User", "Invalid Refresh Token", null));
        // }
        const token = JWTHelper.GenerateToken({
            firstName: extracted.firstName,
            lastName: extracted.lastName,
            email: extracted.email,
            roleId: extracted.roleId,
            verified: extracted.verified,
            active: extracted.active
        });

        // let dataUser = {}

        const dataUser = {
            firstName: extracted.firstName,
            lastName: extracted.lastName,
            email: extracted.email,
            roleId: extracted.roleId,
            verified: extracted.verified,
            active: extracted.active,
            token: token,
        }

        return res.status(200).send(Helper.ResponseData(res.statusCode, "OK", null, dataUser));

        // const newRefreshToken = JWTHelper.GenerateRefreshToken(extracted);
        // user.accessToken = newRefreshToken
        // await user.save();
        // return res.json({
        //     status: 200,
        //     message: "OK",
        //     data: {
        //         extracted,
        //         refreshToken: token
        //     }
        // })
    } catch (error) {
        return res
            .status(500)
            .send(Helper.ResponseData(res.statusCode, "Internal Server Error", error, null));
    }
}

const UserDetail = async (req: Request, res: Response): Promise<Response> => {
    try {

        const email = res.locals.userData?.email;

        const user = await User.findOne({
            where: {
                email: email
            },
            attributes: {
                exclude: ["id", "roleId", "password", "accessToken"]
            },
            include: [
                {
                    model: Role,
                    attributes: ["id", "roleName", "active", "create_access", "read_access", "update_access", "delete_access"],
                    as: "role"
                }
            ]
        })

        if (!user) {
            return res.status(404).send(Helper.ResponseData(res.statusCode, "User not found", null, null));
        }

        // delete user["dataValues"].id;
        // delete user["dataValues"].password;
        // delete user["dataValues"].accessToken;

        return res.status(200).send(Helper.ResponseData(res.statusCode, "OK", null, user));

    } catch (error) {
        return res.status(500).send(Helper.ResponseData(res.statusCode, "Internal Server Error", error, null));
    }
}

const UserLogout = async (req: Request, res: Response): Promise<Response> => {
    try {
        const refreshToken = req.cookies?.[process.env.TOKEN_COOKIE_NAME as string];

        const email = res.locals.userData?.email;
        console.log(res.locals);
        

        const user = await User.findOne({
            where: {
                email: email
            }
        })

        user?.update({ accessToken: null }, { where: { email: email } });

        res.clearCookie(process.env.TOKEN_COOKIE_NAME as string);
        return res.status(200).send(Helper.ResponseData(res.statusCode, "User logout", null, null));
    } catch (error) {
        return res.status(500).send(Helper.ResponseData(res.statusCode, "Internal Server Error", error, null));
    }
}

const UpdateUser = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;
        const {
            firstName,
            lastName,
            email,
            password,
            roleId,
            accessToken,
            verified,
            active,
        } = req.body;

        const user = await User.findByPk(id);

        if (!user) {
            return res.status(400).send(Helper.ResponseData(res.statusCode, `Invalid User with id = ${id}`, null, null));
        }

        const hashedPassword = await PasswordHelper.PasswordHashing(password)

        user.firstName = firstName;
        user.lastName = lastName;
        user.email = email;
        user.password = hashedPassword;
        user.roleId = roleId;
        user.accessToken = accessToken;
        user.verified = verified;
        user.active = active;

        await user.save();

        return res.status(200).send(Helper.ResponseData(res.statusCode, "Updated", null, user));
    } catch (error) {
        return res.status(500).send(Helper.ResponseData(res.statusCode, "Internal Server Error", error, null));
    }
};

const DeleteUser = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;

        const user = await User.findByPk(id);

        if (!user) {
            return res.status(400).send(Helper.ResponseData(res.statusCode, `Invalid User with id = ${id}`, null, null));
        }

        await user.destroy();

        return res.status(200).send(Helper.ResponseData(res.statusCode, "Deleted", null, user));
    } catch (error) {
        return res.status(500).send(Helper.ResponseData(res.statusCode, "Internal Server Error", error, null));
    }
};

const GetUserById = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;

        const user = await User.findByPk(id);

        if (!user) {
            return res.status(400).send(Helper.ResponseData(res.statusCode, `Invalid User with id = ${id}`, null, null));
        }

        return res.status(200).send(Helper.ResponseData(res.statusCode, "OK", null, user));
    } catch (error) {
        return res.status(500).send(Helper.ResponseData(res.statusCode, "Internal Server Error", error, null));
    }
};

export default { GetUser, RegisterUser, LoginUser, UserDetail, UserLogout, UpdateUser, DeleteUser, GetUserById, RefreshToken };
