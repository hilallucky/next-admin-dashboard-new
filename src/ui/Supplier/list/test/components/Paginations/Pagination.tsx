// // import React from 'react';

// // interface PaginationProps {
// //     className?: string;
// //     currentPage: number;
// //     totalPages: number;
// //     onPageChange: (page: number) => void;
// // }

// // const Pagination: React.FC<PaginationProps> = ({ className, currentPage, totalPages, onPageChange }) => {
// //     const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

// //     const handlePreviousClick = () => {
// //         if (currentPage > 1) {
// //             onPageChange(currentPage - 1);
// //         }
// //     };

// //     const handleNextClick = () => {
// //         if (currentPage < totalPages) {
// //             onPageChange(currentPage + 1);
// //         }
// //     };

// //     return (
// //         <div className={className}>
// //             <button
// //                 onClick={handlePreviousClick}
// //                 disabled={currentPage === 1}
// //                 className="pagination-button"
// //             >
// //                 Previous
// //             </button>
// //             <span className="pagination-info">
// //                 Page {currentPage} of {totalPages}
// //             </span>
// //             <button
// //                 onClick={handleNextClick}
// //                 disabled={currentPage === totalPages}
// //                 className="pagination-button"
// //             >
// //                 Next
// //             </button>
// //         </div>

// //         // <div className={className}>
// //         //     {pages.map((page) => (
// //         //         <button
// //         //             key={page}
// //         //             disabled={page === currentPage}
// //         //             onClick={() => onPageChange(page)}
// //         //         >
// //         //             {page} of {totalPages}
// //         //         </button>
// //         //     ))}
// //         // </div>

// //     );
// // };

// // export default Pagination;

// import React from 'react';

// interface PaginationProps {
//     className?: string;
//     currentPage: number;
//     totalPages: number;
//     onPageChange: (page: number) => void;
//     totalRecords: number;
//     totalRecord: number;
//     pageSize: number;
// }

// const Pagination: React.FC<PaginationProps> = ({ className, currentPage, totalPages, onPageChange, totalRecords, totalRecord,pageSize }) => {
//     const createPageNumbers = () => {
//         const pages: number[] = [];
//         let startPage = 1;
//         let endPage = totalPages;

//         if (totalPages > 7) {
//             if (currentPage <= 4) {
//                 startPage = 1;
//                 endPage = 7;
//             } else if (currentPage + 3 >= totalPages) {
//                 startPage = totalPages - 6;
//                 endPage = totalPages;
//             } else {
//                 startPage = currentPage - 3;
//                 endPage = currentPage + 3;
//             }
//         }

//         for (let i = startPage; i <= endPage; i++) {
//             pages.push(i);
//         }

//         return pages;
//     };

//     const pages = createPageNumbers();

//     const startRecord = (currentPage - 1) * pageSize + 1;
//     const endRecord = Math.min(currentPage * pageSize, totalRecords);

//     return (
//         <div className={className}>
//             <div className="pagination-info">
//                 Showing {totalRecords} of {totalRecord} records from {startRecord} to {startRecord + endRecord -1}
//             </div>
//             <button
//                 onClick={() => onPageChange(currentPage - 1)}
//                 disabled={currentPage === 1}
//                 className="pagination-button"
//             >
//                 Previous
//             </button>
//             {currentPage > 4 && (
//                 <>
//                     <button onClick={() => onPageChange(1)} className="pagination-button">
//                         1
//                     </button>
//                     <span>...</span>
//                 </>
//             )}
//             {pages.map((page) => (
//                 <button
//                     key={page}
//                     onClick={() => onPageChange(page)}
//                     className={`pagination-button ${currentPage === page ? 'active' : ''}`}
//                 >
//                     {page}
//                 </button>
//             ))}
//             {currentPage + 3 < totalPages && (
//                 <>
//                     <span>...</span>
//                     <button onClick={() => onPageChange(totalPages)} className="pagination-button">
//                         {totalPages}
//                     </button>
//                 </>
//             )}
//             <button
//                 onClick={() => onPageChange(currentPage + 1)}
//                 disabled={currentPage === totalPages}
//                 className="pagination-button"
//             >
//                 Next
//             </button>
//         </div>
//     );
// };

// export default Pagination;

import React from 'react';

interface PaginationProps {
  className?: string;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  totalRecords: number;
  pageSize: number;
}

const Pagination: React.FC<PaginationProps> = ({
  className,
  currentPage,
  totalPages,
  onPageChange,
  totalRecords,
  pageSize,
}) => {
  const createPageNumbers = () => {
    const pages: number[] = [];
    let startPage = 1;
    let endPage = totalPages;

    if (totalPages > 7) {
      if (currentPage <= 4) {
        startPage = 1;
        endPage = 7;
      } else if (currentPage + 3 >= totalPages) {
        startPage = totalPages - 6;
        endPage = totalPages;
      } else {
        startPage = currentPage - 3;
        endPage = currentPage + 3;
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  };

  const pages = createPageNumbers();

  const startRecord = (currentPage - 1) * pageSize + 1;
  const endRecord = Math.min(currentPage * pageSize, totalRecords);

  return (
    <div className={className}>
      <div className="pagination-info">
        Page {currentPage} of {totalPages}
        Showing {startRecord} to {startRecord + endRecord - 1} of {totalRecords}{' '}
        records
      </div>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="pagination-button"
      >
        Previous
      </button>
      {currentPage > 4 && (
        <>
          <button onClick={() => onPageChange(1)} className="pagination-button">
            1
          </button>
          <span>...</span>
        </>
      )}
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`pagination-button ${currentPage === page ? 'active' : ''}`}
        >
          {page}
        </button>
      ))}
      {currentPage + 3 < totalPages && (
        <>
          <span>...</span>
          <button
            onClick={() => onPageChange(totalPages)}
            className="pagination-button"
          >
            {totalPages}
          </button>
        </>
      )}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="pagination-button"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
