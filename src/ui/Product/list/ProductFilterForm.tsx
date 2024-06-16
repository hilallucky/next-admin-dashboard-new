import MyButton from '@/components/Common/Button/MyButton';
import CustomTextArea from '@/components/Common/Input/CustomTextArea';
import TextField from '@/components/Input/TextField/TextField';
import Select from '@/components/SelectGroup/Select';
import { statuses } from '@/constants/common';
import React, { useRef, useState } from 'react';
import {
  AiFillIdcard,
  AiOutlineClear,
  AiOutlineFilter,
  AiOutlineHome,
  AiOutlineMail,
  AiOutlineMobile,
  AiOutlinePhone,
} from 'react-icons/ai';

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
            label="Product Name"
            required={false}
            icon={<AiFillIdcard size={20} />}
            placeholder="Product name"
          />
        </div>
        <div>
          <TextField
            type="text"
            name="email"
            label="Email"
            required={false}
            icon={<AiOutlineMail size={20} />}
            placeholder="email@domain.com"
          />
        </div>
        <div>
          <CustomTextArea
            name="address"
            label="Product address"
            placeholder="Product address"
            disabled={false}
            required={false}
            icon={<AiOutlineHome size={20} />}
            status="default"
          />
        </div>

        <div>
          <TextField
            type="text"
            name="officePhone"
            label="Office Phone"
            required={false}
            icon={<AiOutlinePhone size={20} />}
            placeholder="Product office phone"
          />
        </div>

        <div>
          <TextField
            type="text"
            name="contactPerson"
            label="Contact Person"
            required={false}
            icon={<AiFillIdcard size={20} />}
            placeholder="Product contact person"
          />
        </div>

        <div>
          <TextField
            type="text"
            name="mobilePhone"
            required={false}
            label="Mobile Phone"
            icon={<AiOutlineMobile size={20} />}
            placeholder="Product mobile phone"
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
