import { statuses } from '@/constants/common';
import { GoPencil, GoEye, GoTrash, GoDownload } from 'react-icons/go';

interface Props {
  label?: string;
  headers: string[];
  columns: string[];
  datas: any[];
  links?: any[];
  page?: number;
  sizePerPages?: number;
}

const TableDataList = ({
  label,
  headers,
  datas,
  columns,
  links,
  page = 1,
  sizePerPages = 10,
}: Props) => {
  const newIndex: number = (page - 1) * sizePerPages + 1;

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="max-w-full overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-2 text-left bg-meta-4">
              <th className="min-w-3 px-4 py-4 font-medium text-center text-white xl:pl-11">
                No
              </th>
              {headers.map((item, index) => (
                <th
                  className={`min-w-max px-4 py-4 font-medium text-white xl:pl-11`}
                  key={index}
                >
                  {item}
                </th>
              ))}
              <th className="min-w-3 px-4 py-4 font-medium text-center text-white xl:pl-11">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {datas.map((data, key) => (
              <tr
                key={key}
                className="border-b border-[#eee] dark:border-strokedark"
              >
                <td key={`${data}--${key}`}>
                  <p className="text-black text-center dark:text-white">
                    {newIndex + key}
                  </p>
                </td>
                {columns.map((column, colKey) =>
                  column !== 'status' ? (
                    <td key={colKey}>
                      <p className="text-black text-left dark:text-white">
                        {data[column]}
                      </p>
                    </td>
                  ) : (
                    <td className="px-4 py-5">
                      <p
                        className={`inline-flex rounded-full bg-opacity-10 px-3 py-1 text-sm font-medium ${
                          data.status === 1
                            ? 'bg-success text-success'
                            : data.status === 3
                              ? 'bg-danger text-danger'
                              : 'bg-warning text-warning'
                        }`}
                      >
                        {statuses[data.status].label}
                      </p>
                    </td>
                  ),
                )}
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <div className="flex items-center space-x-3.5">
                    <button className="hover:text-primary">
                      <GoEye size={18} />
                    </button>
                    <button className="hover:text-primary">
                      <GoDownload size={18} />
                    </button>
                    <button className="hover:text-primary">
                      <GoPencil size={18} />
                    </button>
                    <button className="hover:text-primary">
                      <GoTrash size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableDataList;
