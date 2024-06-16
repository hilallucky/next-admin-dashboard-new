import React from 'react';
import Link from 'next/link';
import SelectRowsPerPagesOption from '@/components/SelectGroup/SelectRowsPerPagesOption';
import { rowsSizePerPage } from '@/constants/common';

interface PaginationOneProps {
  totalRecords: number;
  totalPages: number;
  page: number;
  setPage: any;
  setRowsPerPage: any;
  rowsPerPage: number;
  //   onChange: () => void;
}
const PaginationOne: React.FC<PaginationOneProps> = ({
  totalRecords,
  totalPages,
  page,
  setPage,
  setRowsPerPage,
  rowsPerPage = 10,
  //   onChange,
  ...props
}) => {
  const scrollToTop = () => {
    scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleChange = (e: any) => {
    setRowsPerPage(e.target.value);
    setPage(1);
  };

  const handleNextPage = () => {
    setPage((prevState) => prevState + 1);
    scrollToTop();
  };

  const handlePrevPage = () => {
    setPage((prevState) => prevState - 1);
    scrollToTop();
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    scrollToTop();
  };

  const generatePaginationLinks = () => {
    const links: JSX.Element[] = [];
    const maxPageLinks = 5;
    const halfMaxPageLinks = Math.floor(maxPageLinks / 2);

    `Total pages : ${totalPages}`;

    const addPageLink = (pageNumber: number) => {
      links.push(
        <li key={pageNumber}>
          <Link
            href="#"
            onClick={() => handlePageChange(pageNumber)}
            className={`flex items-center justify-center border border-stroke px-3 py-[5px] leading-none ${pageNumber === page ? 'bg-primary text-white' : 'hover:border-primary hover:bg-gray hover:text-primary dark:border-strokedark dark:hover:border-primary dark:hover:bg-graydark'}`}
          >
            {pageNumber}
          </Link>
        </li>,
      );
    };

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        addPageLink(i);
      }
    } else {
      const startPage = Math.max(2, page - halfMaxPageLinks);
      const endPage = Math.min(totalPages - 1, page + halfMaxPageLinks);

      addPageLink(1);

      if (startPage > 2) {
        links.push(<li key="start-ellipsis">...</li>);
      }

      for (let i = startPage; i <= endPage; i++) {
        addPageLink(i);
      }

      if (endPage < totalPages - 1) {
        links.push(<li key="end-ellipsis">...</li>);
      }

      addPageLink(totalPages);
    }

    return links;
  };

  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="border-b border-stroke px-4 py-4 dark:border-strokedark sm:px-6 xl:px-7.5">
        <div className="flex flex-wrap items-center lg:justify-between md:justify-between sm:justify-start ">
          <div>
            <p className="text-sm text-gray-700">
              Showing
              <span className="font-medium px-1">
                {totalRecords === 0
                  ? 0
                  : totalPages === page
                    ? totalRecords - rowsPerPage + 1
                    : page === 1
                      ? 1
                      : (page - 1) * rowsPerPage + 1}
              </span>
              to
              <span className="font-medium px-1">
                {totalPages === page ? totalRecords : page * rowsPerPage}
              </span>
              of
              <span className="font-medium px-1">{totalRecords}</span>
              results
            </p>
          </div>

          <div className="inline-block flex h-[30px] justify-center items-center ">
            <SelectRowsPerPagesOption
              name="size"
              value={rowsPerPage}
              onChange={handleChange}
              required={true}
            />
            <p className="pr-3 pl-1">Rows</p>
            <nav>
              <ul className="flex flex-wrap items-center sm:justify-start">
                <li
                  onClick={handlePrevPage}
                  className={`${page === 1 ? `hidden` : ''}`}
                >
                  <Link
                    href="#"
                    className="flex h-[30px] w-9 items-center justify-center rounded-l-md border border-stroke hover:border-primary hover:bg-gray hover:text-primary dark:border-strokedark dark:hover:border-primary dark:hover:bg-graydark"
                  >
                    <svg
                      className="fill-current"
                      width="8"
                      height="16"
                      viewBox="0 0 8 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.17578 15.1156C7.00703 15.1156 6.83828 15.0593 6.72578 14.9187L0.369531 8.44995C0.116406 8.19683 0.116406 7.80308 0.369531 7.54995L6.72578 1.0812C6.97891 0.828076 7.37266 0.828076 7.62578 1.0812C7.87891 1.33433 7.87891 1.72808 7.62578 1.9812L1.71953 7.99995L7.65391 14.0187C7.90703 14.2718 7.90703 14.6656 7.65391 14.9187C7.48516 15.0312 7.34453 15.1156 7.17578 15.1156Z"
                        fill=""
                      />
                    </svg>
                  </Link>
                </li>
                {generatePaginationLinks()}
                <li
                  onClick={handleNextPage}
                  className={`${page === totalPages || totalRecords < 1 ? `hidden` : ''}`}
                >
                  <Link
                    href="#"
                    className="flex h-[30px] w-9 items-center justify-center rounded-r-md border border-stroke border-l-transparent hover:border-primary hover:bg-gray hover:text-primary dark:border-strokedark dark:hover:border-primary dark:hover:bg-graydark"
                  >
                    <svg
                      className="fill-current"
                      width="8"
                      height="16"
                      viewBox="0 0 8 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.819531 15.1156C0.650781 15.1156 0.510156 15.0593 0.369531 14.9468C0.116406 14.6937 0.116406 14.3 0.369531 14.0468L6.27578 7.99995L0.369531 1.9812C0.116406 1.72808 0.116406 1.33433 0.369531 1.0812C0.622656 0.828076 1.01641 0.828076 1.26953 1.0812L7.62578 7.54995C7.87891 7.80308 7.87891 8.19683 7.62578 8.44995L1.26953 14.9187C1.15703 15.0312 0.988281 15.1156 0.819531 15.1156Z"
                        fill=""
                      />
                    </svg>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaginationOne;
