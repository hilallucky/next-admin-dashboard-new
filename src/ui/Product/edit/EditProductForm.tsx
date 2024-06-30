import Breadcrumb from '@/components/Breadcrumbs/Breadcrumb';
import CustomTextArea from '@/components/Common/Input/CustomTextArea';
import TextField from '@/components/Input/Text/Text';
import React, {
  FormEvent,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import ErrorAlerts from '@/components/Alerts/ErrorAlerts';
import { statuses } from '@/constants/common';
import { FormContext } from '@/contexts/FormContext';
import Button from '@/components/Common/Button/Button';
import SelectOption from '@/components/SelectGroup/SelectOption';
import {
  AiFillIdcard,
  AiOutlineCode,
  AiOutlineDollar,
  AiOutlineFontColors,
} from 'react-icons/ai';
import { TbNumber123 } from 'react-icons/tb';
import { useSupplierListForSelect } from '@/fetchers/Suppliers';
import { ProductAlias } from '@/interfaces';
import { uuid } from 'uuidv4';
import { GoPencil, GoTrash } from 'react-icons/go';

interface EditProductFormProps {
  nextStep?: () => void;
}

const EditProductForm: React.FC<EditProductFormProps> = ({ nextStep }) => {
  const defaultProductAliasValues: ProductAlias = {
    id: 0,
    uid: '',
    code: '',
    name: '',
    supplierId: 0,
    productId: 0,
    status: 0,
    createdBy: null,
    createdAt: '',
    updatedBy: null,
    updatedAt: '',
    deletedBy: null,
    deletedAt: '',
    supplier: '',
    isEdited: false,
  };
  const { formValues, setFormValues, resetFormValues, methods } =
    useContext(FormContext);
  const { handleSubmit } = methods;
  const [formProductAlias, setFormProductAlias] = useState<ProductAlias>(
    defaultProductAliasValues,
  );
  const [productAlias, setProductAlias] = useState<ProductAlias[]>([]);
  const nameInputRef = useRef<HTMLInputElement>(null);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [error, setError] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [toast, setToast] = useState({ type: '', title: '', message: '' });
  const [isValid, setIsValid] = useState(true);

  const { data, isDataLoading, isDataError } = useSupplierListForSelect();

  useEffect(() => {
    if (formValues.productAliases && formValues.productAliases.length > 0) {
      const updatedProductAliases = formValues.productAliases.map((item) => ({
        ...item,
        isEdit: false,
      }));
      setProductAlias(updatedProductAliases);
    }
  }, [setProductAlias]);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { attributes, name, value } = event.target;

    setIsValid(event.target.validity.valid);

    if (name.includes('productAliases.')) {
      setFormProductAlias((prevData) => ({
        ...prevData,
        [name.replace('productAliases.', '')]:
          name.replace('productAliases.', '') === 'status'
            ? Number(value)
            : value,
      }));
    } else {
      setFormValues((prevData: any) => ({
        ...prevData,
        [name]: name === 'status' ? Number(value) : value,
        supplierName: prevData.supplierId,
      }));
    }

    if (value === '') {
      setError(`${attributes.getNamedItem('alias')?.value} is required`);
    } else {
      setError('');
    }
  };

  const handleAddProductAliases = (editingIndex?: number) => {
    const { code, name, status } = formProductAlias;

    let isDuplicate: boolean;
    if (editingIndex !== undefined && editingIndex >= 0) {
      isDuplicate = productAlias.some(
        (item, index) =>
          index !== editingIndex &&
          (item.name === formProductAlias.name ||
            item.code === formProductAlias.code),
      );
    } else {
      isDuplicate = productAlias.some(
        (alias) => alias.code === code || alias.name === name,
      );
    }

    if (isDuplicate) {
      setError('Duplicate code or name found');
      return;
    }

    let newProductAlias: ProductAlias;
    if (!isDuplicate && editingIndex !== undefined && editingIndex >= 0) {
      newProductAlias = {
        ...productAlias[editingIndex],
        uid: productAlias[editingIndex].uid,
        name: formProductAlias.name,
        code: formProductAlias.code,
        status: formProductAlias.status,
        isEdited: false,
      };
      productAlias[editingIndex] = newProductAlias;
      setProductAlias(productAlias);

      setFormValues((prevData: any) => ({
        ...prevData,
        productAliases: productAlias,
      }));
    } else {
      newProductAlias = {
        ...formProductAlias,
        uid: uuid(),
        status: Number(status),
        isEdited: false,
      };

      setProductAlias([...productAlias, newProductAlias]);

      setFormValues((prevData: any) => ({
        ...prevData,
        productAliases: !prevData.productAliases[0]?.code
          ? [
              {
                uid: newProductAlias.uid,
                code: newProductAlias.code,
                name: newProductAlias.name,
                status: newProductAlias.status,
              },
            ]
          : [
              ...prevData.productAliases,
              {
                uid: newProductAlias.uid,
                code: newProductAlias.code,
                name: newProductAlias.name,
                status: newProductAlias.status,
              },
            ],
      }));
    }

    setFormProductAlias({ ...defaultProductAliasValues });
    setEditingIndex(null);

    setShowToast(true);
    setToast({
      type: 'success',
      title: 'Product Alias Added',
      message: 'Product Alias has been successfully added.',
    });

    nameInputRef.current?.focus();
  };

  const handleEditProductAlias = (index: number) => {
    productAlias[index].isEdited = true;
    setFormProductAlias(productAlias[index]);
    setEditingIndex(index);
  };

  const handleDeleteProductAlias = (index: number) => {
    const updatedProductAliases = productAlias.filter((_, i) => i !== index);
    setFormValues((prevData: any) => ({
      ...prevData,
      productAliases: updatedProductAliases,
    }));
    setProductAlias(updatedProductAliases);
  };

  const hideToast = () => {
    setShowToast(false);
  };

  const handleReset = () => {
    resetFormValues();
    setFormProductAlias(defaultProductAliasValues);
    setProductAlias([]);
  };

  const onSubmit = () => {
    if (nextStep) {
      nextStep();
    }
  };

  return (
    <div>
      <Breadcrumb pageName="Edit Product" pageLink="EditProductForm" />

      <div className="grid-cols-2 gap-9 sm:grid-cols-2">
        <div className="flex flex-col gap-9">
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Input Data Product
              </h3>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col gap-5.5 p-6.5">
                <div>
                  <TextField
                    type="text"
                    name="name"
                    alias="Name"
                    label="Name"
                    required
                    value={formValues.name}
                    onChange={handleChange}
                    icon={<AiFillIdcard size={20} />}
                    placeholder="Product name"
                  />
                </div>
                <div>
                  <SelectOption
                    key={0}
                    name="supplierId"
                    defaultValue=""
                    value={formValues.supplierId | ''}
                    label="Supplier"
                    onChange={handleChange}
                    options={data}
                    required
                  />
                </div>
                <div>
                  <SelectOption
                    key={1}
                    name="status"
                    defaultValue=""
                    value={formValues.status | ''}
                    label="Status"
                    onChange={handleChange}
                    options={statuses}
                    required
                  />
                </div>
                <div>
                  <TextField
                    type="text"
                    name="price"
                    alias="Price"
                    label="Price"
                    required
                    value={formValues.price | 0}
                    onChange={handleChange}
                    icon={<AiOutlineDollar size={20} />}
                    placeholder="Product price"
                  />
                </div>
                <div>
                  <TextField
                    type="text"
                    name="quantity"
                    alias="Quantity"
                    label="Quantity"
                    required
                    value={formValues.quantity | 0}
                    onChange={handleChange}
                    icon={<TbNumber123 size={20} />}
                    placeholder="Product quantity"
                  />
                </div>
                <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                  <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
                    <h3 className="font-medium underline text-black dark:text-white">
                      Product Aliases
                    </h3>
                  </div>

                  <div className="px-6.5 py-4 flex grid grid-cols-4">
                    <TextField
                      type="text"
                      name="productAliases.code"
                      alias="productAliases.code"
                      label="Code"
                      // required
                      value={formProductAlias.code}
                      onChange={handleChange}
                      icon={<AiOutlineCode size={20} />}
                      placeholder="Product Alias Code"
                      ref={nameInputRef}
                    />
                    <TextField
                      type="text"
                      name="productAliases.name"
                      alias="productAliases.name"
                      label="Name"
                      // required
                      value={formProductAlias.name}
                      onChange={handleChange}
                      icon={<AiOutlineFontColors size={20} />}
                      placeholder="Product Alias Name"
                    />
                    <SelectOption
                      key={1}
                      name="productAliases.status"
                      defaultValue=""
                      value={formProductAlias.status | ''}
                      label="Status"
                      onChange={handleChange}
                      options={statuses}
                      // required
                    />
                    <div className="pt-9 pl-9 flex">
                      <Button
                        label={editingIndex !== null ? 'Update' : 'Add'}
                        type="button"
                        onClick={() => {
                          handleAddProductAliases(
                            editingIndex !== null ? editingIndex : undefined,
                          );
                        }}
                        className="w-[40%] h-12 cursor-pointer rounded-lg border border-green-700 bg-green-700 text-white transition hover:bg-green-800"
                      />
                    </div>
                  </div>
                  {error && <p style={{ color: 'red' }}>{error}</p>}

                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50 dark:bg-gray-800">
                        <tr>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Code
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Name
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Status
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200 dark:bg-boxdark dark:divide-gray-700">
                        {productAlias.map((alias, index) => (
                          <tr key={index} className="hover:bg-slate-200">
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">
                                {alias.code}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">
                                {alias.name}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                {
                                  statuses.find(
                                    (status) =>
                                      Number(status.value) === alias.status,
                                  )?.label
                                }
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <div className="flex">
                                <div className="px-3">
                                  <button
                                    type="button"
                                    className="text-indigo-600 hover:text-indigo-900"
                                  >
                                    <GoPencil
                                      size={18}
                                      onClick={() =>
                                        handleEditProductAlias(index)
                                      }
                                    />
                                  </button>
                                </div>
                                <div className="px-3">
                                  <button
                                    type="button"
                                    className="text-indigo-600 hover:text-indigo-900"
                                  >
                                    <GoTrash
                                      size={18}
                                      onClick={() =>
                                        handleDeleteProductAlias(index)
                                      }
                                    />
                                  </button>
                                </div>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div>
                  {error && (
                    <div className="flex w-full text-red justify-center items-center">
                      {error}
                    </div>
                  )}
                </div>
                <div className="mb-5 flex gap-20 items-center justify-between">
                  <Button
                    label="Reset"
                    type="button"
                    onClick={handleReset}
                    className="w-[30%] cursor-pointer rounded-lg border border-red bg-red p-4 text-white transition hover:bg-opacity-90"
                  />

                  <Button
                    label="Next"
                    type="submit"
                    onClick={handleSubmit}
                    className="w-[30%] cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90"
                  />
                </div>
                <div>
                  {showToast && (
                    <div
                      className="text-white cursor-pointer"
                      onClick={hideToast}
                    >
                      <ErrorAlerts
                        type={toast.type}
                        title={toast.title}
                        message={toast.message}
                        showToast={showToast}
                      />
                    </div>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProductForm;
