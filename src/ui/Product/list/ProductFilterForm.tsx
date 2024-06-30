import MyButton from '@/components/Common/Button/MyButton';
import CustomTextArea from '@/components/Common/Input/CustomTextArea';
import TextField from '@/components/Input/TextField/TextField';
import Select from '@/components/SelectGroup/Select';
import SelectOption from '@/components/SelectGroup/SelectOption';
import { statuses } from '@/constants/common';
import { useSupplierListForSelect } from '@/fetchers/Suppliers';
import React, { useRef, useState } from 'react';
import {
  AiFillIdcard,
  AiOutlineClear,
  AiOutlineDollar,
  AiOutlineFilter,
  AiOutlineHome,
  AiOutlineMail,
  AiOutlineMobile,
  AiOutlinePhone,
} from 'react-icons/ai';
import { TbNumber123 } from 'react-icons/tb';

interface Props {
  label?: string;
  setNewFilter?;
  setPage?: any;
  onSubmit: (name: string) => void;
}

const ProductFilterForm: React.FC<Props> = ({
  label,
  setNewFilter,
  setPage,
  onSubmit,
}) => {
  const [filter, setFilter] = useState<any>({});
  const formRef = useRef<HTMLFormElement>(null);
  const { data, isDataLoading, isDataError } = useSupplierListForSelect();

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const form = e.target;
    const filterData = new FormData(form);

    const formEntries = {};
    filterData.forEach((value, key) => {
      formEntries[key] = value;
    });

    setNewFilter(formEntries);
    setPage(1);
    onSubmit(filter);
  };

  const handleClearFilter = (e: any) => {
    if (formRef.current) {
      formRef.current.reset();
      if (setNewFilter) setNewFilter({});
      onSubmit(setNewFilter);
    }
  };

  return (
    <div>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="mb-4 p-4 border border-slate-400 border-form-strokedark rounded"
      >
        <div>
          <TextField
            type="text"
            name="name"
            label="Name"
            required={false}
            icon={<AiFillIdcard size={20} />}
            placeholder="Product name"
          />
        </div>
        <div>
          <Select
            name="supplierId"
            label="Supplier"
            options={data}
            disabled={false}
            defaultValue={''}
          />
        </div>
        <div>
          <Select
            name="status"
            label="Status"
            options={statuses}
            disabled={false}
            defaultValue={''}
          />
        </div>

        <div>
          <TextField
            type="text"
            name="price"
            label="Price"
            required={false}
            icon={<AiOutlineDollar size={20} />}
            placeholder="Product price"
          />
        </div>

        <div>
          <TextField
            type="text"
            name="quantity"
            label="Quantity"
            required={false}
            icon={<TbNumber123 size={20} />}
            placeholder="Product quantity"
          />
        </div>

        <div className="flex items-center py-4 gap-5">
          <div>
            <MyButton>
              <div className="flex items-center justify-between">
                <span>
                  <AiOutlineFilter />{' '}
                </span>
                <span className="px-4">Apply Filter</span>
              </div>
            </MyButton>
          </div>
          <div>
            <MyButton
              type="button"
              className="bg-red"
              onClick={handleClearFilter}
            >
              <div className="flex items-center justify-between">
                <span>
                  <AiOutlineClear />{' '}
                </span>
                <span className="px-4">Clear Filter</span>
              </div>
            </MyButton>
          </div>
        </div>
      </form>
    </div>
  );
};

export default React.memo(ProductFilterForm);
