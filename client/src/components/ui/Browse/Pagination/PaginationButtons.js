const PaginationButtons = (props) => {
  let totalPagesInArray = [];
  for (let i = 1; i <= props.totalPages; i++) {
    totalPagesInArray.push(i);
  }
  return (
    <div className="pagination-buttons">
      {totalPagesInArray.map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => props.setActualPage(pageNumber)}
        >
          {pageNumber}
        </button>
      ))}
    </div>
  );
};

export default PaginationButtons;
