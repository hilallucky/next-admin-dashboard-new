import React, { useState, useEffect, useRef } from 'react';
import TextField from '@/components/Input/TextField/TextField';
import {
  AiFillIdcard,
  AiOutlineCalendar,
  AiOutlineClockCircle,
  AiOutlineClose,
  AiOutlineCloseCircle,
  AiOutlineHome,
  AiOutlineMail,
  AiOutlineMobile,
  AiOutlinePhone,
  AiOutlineQrcode,
  AiOutlineUser,
} from 'react-icons/ai';
import CustomTextArea from '../../Common/Input/CustomTextArea';
import Select from '../../SelectGroup/Select';
import MyButton from '../../Common/Button/MyButton';
import { statuses } from '@/constants/common';
import { Product } from '@/interfaces';
import DateToLocal from '@/utils/FormatDate';
import { useProductById } from '@/fetchers/Products';

type Props = {
  id?: string | number | null;
  modalOpen: boolean;
  setModalOpen: (open: boolean) => void;
};

const ProductDefaultValue: Product = {
  id: 0,
  uid: '',
  code: '',
  name: '',
  supplierId: 0,
  quantity: 0,
  status: 0,
  createdBy: 0,
  createdAt: '',
  updatedBy: 0,
  updatedAt: '',
  deletedBy: 0,
  deletedAt: '',
};

const ProductModalView: React.FC<Props> = ({
  id,
  modalOpen,
  setModalOpen,
}: Props) => {
  const trigger = useRef<any>(null);

  const { data, isDataLoading, isDataError, mutate } = useProductById(
    id as number,
  );
  const product: Product = data || ProductDefaultValue;
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
  }, [modalOpen, product, setModalOpen]);

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!modalOpen || keyCode !== 27) return;
      setModalOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  }, [modalOpen, product, setModalOpen]);

  // Ensure screen starts from top when modal is shown
  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = 'hidden';
      window.scrollTo(0, 0);
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [modalOpen, product]);

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
            Product Detail
          </h3>
          <form className="mb-4 p-4 border border-stroke outline-none  border-form-strokedark dark:border-form-strokedark dark:bg-form-input dark:text-white rounded">
            <div>
              <TextField
                type="text"
                name="code"
                value={product?.code}
                label="Product Code"
                required={false}
                disabled
                icon={<AiOutlineQrcode size={20} />}
                placeholder="Product name"
              />
            </div>

            <div>
              <TextField
                type="text"
                name="name"
                value={product?.name}
                label="Product Name"
                required={false}
                disabled
                icon={<AiFillIdcard size={20} />}
                placeholder="Product name"
              />
            </div>

            <div>
              <TextField
                type="text"
                name="supplierId"
                value={product?.supplierId}
                label="Supplier ID"
                required={false}
                disabled
                icon={<AiOutlineMail size={20} />}
                placeholder="email@domain.com"
              />
            </div>

            <div>
              <TextField
                type="text"
                name="quantity"
                value={product?.quantity}
                label="Product Quantity"
                required={false}
                disabled
                icon={<AiOutlineMail size={20} />}
                placeholder="123"
              />
            </div>

            <div>
              <Select
                name="status"
                label="Status"
                options={statuses}
                disabled
                selectValue={product?.status}
                defaultValue={product?.status}
              />
            </div>
          </form>

          <div className="grid grid-cols-3 gap-3 text-sm">
            <div>
              <div>
                <span>
                  Created By :{' '}
                  {product?.createdProductByUser?.username
                    ? product?.createdProductByUser.username
                    : '-'}
                </span>
              </div>
              <div>
                <span className="flex items-center gap-2">
                  <AiOutlineClockCircle /> :{' '}
                  {product?.createdAt ? DateToLocal(product?.createdAt) : '-'}
                </span>
              </div>
            </div>
            <div>
              <span>
                Updated By :{' '}
                {product?.updatedProductByUser?.username
                  ? product?.updatedProductByUser.username
                  : '-'}
              </span>
              <span className="flex items-center gap-2">
                <AiOutlineClockCircle /> :{' '}
                {product?.updatedAt ? DateToLocal(product?.updatedAt) : '-'}
              </span>
            </div>
            <div>
              <span>
                Deleted By :{' '}
                {product?.deletedProductByUser?.username
                  ? product?.deletedProductByUser.username
                  : '-'}
              </span>
              <span className="flex items-center gap-2">
                <AiOutlineClockCircle /> :{' '}
                {product?.deletedAt ? DateToLocal(product?.deletedAt) : '-'}
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModalView;
