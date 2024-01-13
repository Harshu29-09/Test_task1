import React from 'react';

const PaginationButtons = ({ currentPage, totalPages, onPreviousPage, onNextPage }) => {
  return (
    <div>
      <button onClick={onPreviousPage} disabled={currentPage === 1}>
        Previous
      </button>
      <button onClick={onNextPage} disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
  );
};
export default PaginationButtons;
