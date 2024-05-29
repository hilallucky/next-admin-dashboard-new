import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

interface UserData {
    firstName: string | null
    lastName: string | null
    email: string | null
    roleId: number | null
    accessToken: string | null
    verified: boolean | null
    active: boolean | null
}

const GenerateToken = (data: any): string => {
    const token = jwt.sign(data, process.env.JWT_SECRET_KEY as string, { expiresIn: "40s" }) //120s

    return token
}

const GenerateRefreshToken = (data: any): string => {
    const token = jwt.sign(data, process.env.JWT_REFRESH_TOKEN as string, { expiresIn: "1d" })

    return token
}

const ExtractToken = (token: string): UserData | null => {
    let resData: unknown

    const extracted = jwt.verify(token, process.env.JWT_SECRET_KEY as string,
        (err, decoded) => {
            if (err) resData = null
            else resData = decoded
        })

    if (resData) {
        const result: UserData = <UserData>(resData)
        return result
    }

    return null
}

const ExtractRefreshToken = (token: string): UserData | null => {
    let resData: unknown

    const extracted = jwt.verify(token, process.env.JWT_REFRESH_TOKEN as string,
        (err, decoded) => {
            if (err) resData = err
            else resData = decoded
        })

    if (resData) {
        const result: UserData = <UserData>(resData)
        return result
    }

    return null
}

export default { GenerateToken, GenerateRefreshToken, ExtractToken, ExtractRefreshToken };
