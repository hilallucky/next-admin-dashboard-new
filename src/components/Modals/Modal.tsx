import React, { useState, useEffect, useRef } from 'react';
import TextField from '@/components/Input/TextField/TextField';
import { AiFillIdcard, AiOutlineClose, AiOutlineCloseCircle, AiOutlineHome, AiOutlineMail, AiOutlineMobile, AiOutlinePhone, AiOutlineQrcode } from 'react-icons/ai';
import CustomTextArea from '../Common/Input/CustomTextArea';
import Select from '../SelectGroup/Select';
import MyButton from '../Common/Button/MyButton';
import { statuses } from '@/constants/common';
import { Supplier } from '@/interfaces';

type Props = {
    id?: string | number | null;
    modalOpen: boolean;
    setModalOpen: (open: boolean) => void;
};

const SupplierDefaultValue: Supplier = {
    id: 0,
    uid: '',
    code: '',
    name: '',
    email: '',
    address: '',
    officePhone: '',
    contactPerson: '',
    mobilePhone: '',
    status: 0,
    createdBy: '',
    createdAt: '',
    updatedBy: '',
    updatedAt: '',
    deletedBy: '',
    deletedAt: '',
}

const ModalOne: React.FC<Props> = ({ id, modalOpen, setModalOpen }: Props) => {
    const [isError, setIsErrorPage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [supplier, setSupplier] = useState<Supplier>(SupplierDefaultValue);
    const trigger = useRef<any>(null);
    const modal = useRef<any>(null);

    // close on click outside
    useEffect(() => {
        const clickHandler = ({ target }: MouseEvent) => {
            if (!modal.current || !trigger.current) return;
            if (
                !modalOpen ||
                modal.current.contains(target as Node) ||
                trigger.current.contains(target as Node)
            )
                return;
            setModalOpen(false);
        };
        document.addEventListener('click', clickHandler);
        return () => document.removeEventListener('click', clickHandler);
    }, [modalOpen, setModalOpen]);

    // close if the esc key is pressed
    useEffect(() => {
        const keyHandler = ({ keyCode }: KeyboardEvent) => {
            if (!modalOpen || keyCode !== 27) return;
            setModalOpen(false);
        };
        document.addEventListener('keydown', keyHandler);
        return () => document.removeEventListener('keydown', keyHandler);
    }, [modalOpen, setModalOpen]);

    // Ensure screen starts from top when modal is shown
    useEffect(() => {
        getSupplier(id)

        if (modalOpen) {
            document.body.style.overflow = 'hidden';
            window.scrollTo(0, 0);
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [modalOpen, id]);


    // Ensure screen starts from top when modal is shown
    // useEffect(() => {
    //     getSupplier(id)
    //     console.log({ useEffect: id });
    // }, []);

    const getSupplier = async (id) => {
        setIsLoading(true);
        try {
            const response = await fetch(
                `/api/v1/suppliers/${id}`,
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                },
            );
            const data = await response.json();
            setSupplier(data?.data);

        } catch (error: any) {
            console.error('Error fetching data:', error);
            setIsErrorPage(error);
        } finally {
            setIsLoading(false);
        }
    };


    return (

        isLoading ? (
            <p>Loading...</p>
        ) : (
        <div>
            <div
                className={`fixed left-0 top-0 z-999999 flex h-full w-full items-center justify-center bg-black/90 px-4 py-5 ${modalOpen ? 'block' : 'hidden'
                    }`}
            >
                <div
                    ref={modal}
                    className="relative w-full max-w-3xl h-full max-h-screen overflow-y-auto rounded-lg bg-white px-8 py-12 dark:bg-boxdark md:px-17.5 md:py-15"
                >
                    <div className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-red hover:outline-slate-300 hover:outline hover:outline-1 text-white transition hover:bg-white ">
                        <MyButton onClick={() => setModalOpen(false)} className="bg-transparent hover:bg-transparent hover:text-primary">
                            <AiOutlineClose size={20} />
                        </MyButton>
                    </div>

                    <h3 className="pb-2 text-xl font-bold text-black dark:text-white sm:text-2xl">
                        Supplier Detail
                    </h3>
                    <form
                        className="mb-4 p-4 border border-stroke outline-none  border-form-strokedark dark:border-form-strokedark dark:bg-form-input dark:text-white rounded"
                    >
                    <div>
                        <TextField
                            type="text"
                            name="code"
                            value={supplier?.code}
                            label="Supplier Code"
                            required={false}
                            disabled
                            icon={<AiOutlineQrcode size={20} />}
                            placeholder="Supplier name"
                        />
                    </div>
                        <div>
                            <TextField
                                type="text"
                                name="name"
                                value={supplier?.name}
                                label="Supplier Name"
                                required={false}
                                disabled
                                icon={<AiFillIdcard size={20} />}
                                placeholder="Supplier name"
                            />
                        </div>
                        <div>
                            <TextField
                                type="text"
                                name="email"
                                value={supplier?.email}
                                label="Email"
                                required={false}
                                disabled
                                icon={<AiOutlineMail size={20} />}
                                placeholder="email@domain.com"
                            />
                        </div>
                        <div>
                            <CustomTextArea
                                name="address"
                                value={supplier?.address}
                                label="Supplier address"
                                placeholder="Supplier address"
                                disabled
                                required={false}
                                icon={<AiOutlineHome size={20} />}
                                status="default"
                            />
                        </div>

                        <div>
                            <TextField
                                type="text"
                                name="officePhone"
                                value={supplier?.officePhone}
                                label="Office Phone"
                                disabled
                                required={false}
                                icon={<AiOutlinePhone size={20} />}
                                placeholder="Supplier office phone"
                            />
                        </div>

                        <div>
                            <TextField
                                type="text"
                                name="contactPerson"
                                value={supplier?.contactPerson}
                                label="Contact Person"
                                required={false}
                                disabled
                                icon={<AiFillIdcard size={20} />}
                                placeholder="Supplier contact person"
                            />
                        </div>

                        <div>
                            <TextField
                                type="text"
                                name="mobilePhone"
                                value={supplier?.mobilePhone}
                                required={false}
                                disabled
                                label="Mobile Phone"
                                icon={<AiOutlineMobile size={20} />}
                                placeholder="Supplier mobile phone"
                            />
                        </div>
                        <div>
                            <Select
                                name="status"
                                label="Status"
                                options={statuses}
                                disabled
                                selectValue={supplier?.status}
                                // defaultValue={Number(supplier?.status)}
                            />
                        </div>

                        <div className="-mx-3 flex flex-wrap gap-y-4 py-4 justify-center">
                            <div className="w-full px-3 2xsm:w-1/2">
                                <MyButton
                                    onClick={() => setModalOpen(false)}
                                    className="block w-full rounded border border-stroke bg-slate-600 p-3 text-center font-medium text-black transition hover:border-meta-1 hover:bg-meta-1 hover:text-white dark:border-strokedark dark:bg-meta-4 dark:text-white dark:hover:border-meta-1 dark:hover:bg-meta-1"
                                >
                                    <div className='flex items-center justify-center'>
                                        <span><AiOutlineCloseCircle /> </span>
                                        <span className='px-4'>Close</span>
                                    </div>
                                </MyButton>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        )
    );
};

export default ModalOne;
