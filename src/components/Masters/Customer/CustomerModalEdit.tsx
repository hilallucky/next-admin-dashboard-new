import React, { useState, useEffect, useRef } from 'react';
import TextField from '@/components/Input/TextField/TextField';
import {
  AiFillIdcard,
  AiOutlineClockCircle,
  AiOutlineClose,
  AiOutlineCloseCircle,
  AiOutlineHome,
  AiOutlineMail,
  AiOutlineMobile,
  AiOutlinePhone,
  AiOutlineQrcode,
  AiOutlineRest,
  AiOutlineSave,
  AiOutlineUser,
} from 'react-icons/ai';
import CustomTextArea from '../../Common/Input/CustomTextArea';
import Select from '../../SelectGroup/Select';
import MyButton from '../../Common/Button/MyButton';
import { statuses } from '@/constants/common';
import { Customer } from '@/interfaces';
import DateToLocal from '@/utils/FormatDate';
import { useCustomerById } from '@/fetchers/Customers';
import { useSession } from 'next-auth/react';

type Props = {
  id?: string | number | null;
  modalOpen: boolean;
  setModalOpen: (open: boolean) => void;
};

const CustomerDefaultValue: Customer = {
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
  createdBy: 0,
  createdAt: '',
  updatedBy: 0,
  updatedAt: '',
  deletedBy: 0,
  deletedAt: '',
};

const CustomerModalEdit: React.FC<Props> = ({
  id,
  modalOpen,
  setModalOpen,
}: Props) => {
  const { data: session, status } = useSession();
  const [isLoading, setIsLoading] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [customerData, setCustomerData] =
    useState<Customer>(CustomerDefaultValue);
  const trigger = useRef<any>(null);
  const modal = useRef<any>(null);

  const { data, isDataLoading, isDataError, mutate } = useCustomerById(
    id as number,
  );
  const customer: Customer = data || CustomerDefaultValue;

  // close on click outside
  useEffect(() => {
    setCustomerData(customer);
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
  }, [modalOpen, customer, setModalOpen]);

  // close if the esc key is pressed
  useEffect(() => {
    setCustomerData(customer);
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!modalOpen || keyCode !== 27) return;
      setModalOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  }, [modalOpen, customer, setModalOpen]);

  // Ensure screen starts from top when modal is shown
  useEffect(() => {
    setCustomerData(customer);
    if (modalOpen) {
      document.body.style.overflow = 'hidden';
      window.scrollTo(0, 0);
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [modalOpen, customer]);

  const handleUpdate = async (id: number) => {
    setIsLoading(true);
    setIsUpdating(true);
    try {
      const response = await fetch(`/api/v1/customers/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...customerData,
          updatedBy: Number(session?.user?.id),
        }),
      });
      if (!response.ok) {
        throw new Error(
          `HTTP error! status: ${response.status}, error: ${response?.message}`,
        );
      }

      setTimeout(() => {
        setShowSuccessMessage(true);
      }, 2000);

      setModalOpen(false);
    } catch (error: any) {
      console.error('Error updating customer:', error);
    } finally {
      setIsUpdating(false);
    }
    setIsLoading(false);
  };

  if (isDataLoading) return <p>Loading...</p>;
  if (isDataError) return <p>Error: {isDataError}</p>;

  return (
    <div>
      <div
        className={`fixed left-0 top-0 z-999999 flex h-full w-full items-center justify-center bg-black/90 px-4 py-5 ${
          modalOpen ? 'block' : 'hidden'
        }`}
      >
        <div
          ref={modal}
          className="relative w-full max-w-3xl h-full max-h-screen overflow-y-auto rounded-lg bg-white px-8 py-12 dark:bg-boxdark md:px-17.5 md:py-15"
        >
          <div className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-red hover:outline-slate-300 hover:outline hover:outline-1 text-white transition hover:bg-white ">
            <MyButton
              onClick={() => setModalOpen(false)}
              className="bg-transparent hover:bg-transparent hover:text-primary"
            >
              <AiOutlineClose size={20} />
            </MyButton>
          </div>

          <h3 className="pb-2 text-xl font-bold text-black dark:text-white sm:text-2xl">
            Customer Detail Will Deleted
          </h3>
          <form
            className="mb-4 p-4 border border-stroke outline-none  border-form-strokedark dark:border-form-strokedark dark:bg-form-input dark:text-white rounded"
            onSubmit={(e) => {
              e.preventDefault();
              handleUpdate(Number(id));
            }}
          >
            <div>
              <TextField
                type="text"
                name="code"
                value={customer?.code}
                label="Customer Code"
                required={false}
                icon={<AiOutlineQrcode size={20} />}
                placeholder="Customer name"
                onChange={(e) =>
                  setCustomerData({ ...customerData, code: e.target.value })
                }
              />
            </div>
            <div>
              <TextField
                type="text"
                name="name"
                value={customer?.name}
                label="Customer Name"
                required={false}
                icon={<AiFillIdcard size={20} />}
                placeholder="Customer name"
                onChange={(e) =>
                  setCustomerData({ ...customerData, name: e.target.value })
                }
              />
            </div>
            <div>
              <TextField
                type="text"
                name="email"
                value={customer?.email}
                label="Email"
                required={false}
                icon={<AiOutlineMail size={20} />}
                placeholder="email@domain.com"
                onChange={(e) =>
                  setCustomerData({ ...customerData, email: e.target.value })
                }
              />
            </div>
            <div>
              <CustomTextArea
                name="address"
                // value={customer?.address}
                defaultValue={customer?.address}
                label="Customer address"
                placeholder="Customer address"
                required={false}
                icon={<AiOutlineHome size={20} />}
                status="default"
                onChange={(e) =>
                  setCustomerData({ ...customerData, address: e.target.value })
                }
              />
            </div>

            <div>
              <TextField
                type="text"
                name="officePhone"
                value={customer?.officePhone}
                label="Office Phone"
                required={false}
                icon={<AiOutlinePhone size={20} />}
                placeholder="Customer office phone"
                onChange={(e) =>
                  setCustomerData({
                    ...customerData,
                    officePhone: e.target.value,
                  })
                }
              />
            </div>

            <div>
              <TextField
                type="text"
                name="contactPerson"
                value={customer?.contactPerson}
                label="Contact Person"
                required={false}
                icon={<AiFillIdcard size={20} />}
                placeholder="Customer contact person"
                onChange={(e) =>
                  setCustomerData({
                    ...customerData,
                    contactPerson: e.target.value,
                  })
                }
              />
            </div>

            <div>
              <TextField
                type="text"
                name="mobilePhone"
                value={customer?.mobilePhone}
                required={false}
                label="Mobile Phone"
                icon={<AiOutlineMobile size={20} />}
                placeholder="Customer mobile phone"
                onChange={(e) =>
                  setCustomerData({
                    ...customerData,
                    mobilePhone: e.target.value,
                  })
                }
              />
            </div>
            <div>
              <Select
                name="status"
                label="Status"
                options={statuses}
                selectValue={customer?.status}
                defaultValue={customer?.status}
                onChange={(e) =>
                  setCustomerData({
                    ...customerData,
                    status: Number(e.target.value),
                  })
                }
              />
            </div>
          </form>

          <div className="grid grid-cols-3 gap-3 text-sm">
            <div>
              <div>
                <span>
                  Created By :{' '}
                  {customer?.createdCustomerByUser?.username
                    ? customer?.createdCustomerByUser.username
                    : '-'}
                </span>
              </div>
              <div>
                <span className="flex items-center gap-2">
                  <AiOutlineClockCircle /> :{' '}
                  {customer?.createdAt ? DateToLocal(customer?.createdAt) : '-'}
                </span>
              </div>
            </div>
            <div>
              <span>
                Updated By :{' '}
                {customer?.updatedCustomerByUser?.username
                  ? customer?.updatedCustomerByUser.username
                  : '-'}
              </span>
              <span className="flex items-center gap-2">
                <AiOutlineClockCircle /> :{' '}
                {customer?.updatedAt ? DateToLocal(customer?.updatedAt) : '-'}
              </span>
            </div>
            <div>
              <span>
                Deleted By :{' '}
                {customer?.deletedCustomerByUser?.username
                  ? customer?.deletedCustomerByUser.username
                  : '-'}
              </span>
              <span className="flex items-center gap-2">
                <AiOutlineClockCircle /> :{' '}
                {customer?.deletedAt ? DateToLocal(customer?.deletedAt) : '-'}
              </span>
            </div>
          </div>

          <div className="-mx-3 flex flex-wrap gap-y-4 py-4 justify-center">
            <div className="w-full px-3 2xsm:w-1/2">
              <MyButton
                onClick={() => setModalOpen(false)}
                className="block w-full rounded border border-stroke bg-slate-600 p-3 text-center font-medium text-black transition hover:border-meta-1 hover:bg-meta-1 hover:text-white dark:border-strokedark dark:bg-meta-4 dark:text-white dark:hover:border-meta-1 dark:hover:bg-meta-1"
              >
                <div className="flex items-center justify-center">
                  <span>
                    <AiOutlineCloseCircle />{' '}
                  </span>
                  <span className="px-4">Close</span>
                </div>
              </MyButton>
            </div>
            <div className="w-full px-3 2xsm:w-1/2">
              <MyButton
                onClick={() => handleUpdate(customer?.id)}
                className="block w-full rounded border border-stroke bg-red p-3 text-center font-medium text-black transition hover:border-meta-1 hover:bg-meta-1 hover:text-white dark:border-strokedark dark:bg-red dark:text-white dark:hover:border-meta-1 dark:hover:bg-meta-1"
                disabled={isUpdating}
              >
                <div className="flex items-center justify-center">
                  <span>
                    <AiOutlineSave />
                  </span>
                  <span className="px-4">
                    {isUpdating ? 'Updating...' : 'Update'}
                  </span>
                </div>
              </MyButton>
              {showSuccessMessage && (
                <span className="ml-2 text-green-600">
                  Updated successfully!
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerModalEdit;
