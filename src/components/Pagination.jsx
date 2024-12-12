import React from "react";
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";

const Pagination = ({
  totalItems,
  itemsPerPage,
  onPageChange,
  currentPage,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const displayText = `Showing ${currentPage} out of ${totalPages} results`;
  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      onPageChange(newPage);
    }
  };

  const generatePageNumbers = () => {
    const pageNumbers = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      pageNumbers.push(1);
      if (currentPage > 3) pageNumbers.push("...");
      for (let i = currentPage - 1; i <= currentPage + 1; i++) {
        if (i > 1 && i < totalPages && !pageNumbers.includes(i)) {
          pageNumbers.push(i);
        }
      }
      if (currentPage < totalPages - 2) pageNumbers.push("...");
      if (!pageNumbers.includes(totalPages)) pageNumbers.push(totalPages);
    }

    return pageNumbers;
  };

  return (
    <div className="flex justify-between items-center mt-3 px-3 ">
      <div className="text-sm text-gray-600">
        <p className="text-base">{displayText}</p>
      </div>

      <div className="flex items-center justify-center gap-2">
        <button
          className="flex items-center gap-2 text-orange px-4 py-2 rounded-l-md"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <GoArrowLeft /> Previous
        </button>

        {generatePageNumbers().map((page, index) =>
          page === "..." ? (
            <span key={index} className="px-4 py-2">
              ...
            </span>
          ) : (
            <button
              key={index}
              className={`px-3 py-1.5 text-sm rounded-md ${
                currentPage === page ? "bg-orange text-white" : "bg-gray-200"
              }`}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </button>
          )
        )}

        <button
          className="flex items-center gap-2 text-orange pl-4 py-2 rounded-r-md"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next <GoArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
