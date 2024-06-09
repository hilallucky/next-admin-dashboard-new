import Image from 'next/image';
import nextConfig from '@/../next.config';

const TableData = ({ label, headers, datas, columns }) => {
  const colLen = headers.length;

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        {label} -- {colLen}
      </h4>

      <div className="flex flex-col">
        <div
          className={`grid grid-cols-${colLen} rounded-sm bg-gray-2 bg-meta-4 sm:grid-cols-${colLen}`}
        >
          {headers.map((item, index) => (
            <div className={`p-2.5 xl:p-5 key=${index}`}>
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                {item}
              </h5>
            </div>
          ))}
        </div>

        {datas.map((data, key) => (
          <div
            className={`grid grid-cols-${colLen} sm:grid-cols-${colLen} hover:bg-gray-3 dark:hover:bg-meta-4 ${
              key === datas.length - 1
                ? ''
                : 'border-b border-stroke dark:border-strokedark'
            }`}
            key={key}
          >
            {columns.map((column, colKey) => (
              <div className={`p-2.5 xl:p-5 key=${colKey}`}>
                <p className="text-black dark:text-white">{data[column]}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableData;
