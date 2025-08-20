import PaginationItem from "./PaginationItem";
import { PagingStyle } from "./style";
import { useState } from "react";

const Pagination = ({ pageNumber, onCurrent }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handleClick = (num) => {
    setCurrentPage(num);
    onCurrent(num);
  };

  return (
    <PagingStyle>
      <button
        onClick={() => handleClick(1)}
        disabled={currentPage === 1}
        className="arrow"
      >
        &lt;
      </button>

      {Array.from({ length: pageNumber }, (_, i) => (
        <PaginationItem
          key={i + 1}
          item={i + 1}
          onCurrent={handleClick}
          isActive={i + 1 === currentPage}
        />
      ))}

      <button
        onClick={() => handleClick(pageNumber)}
        disabled={currentPage === pageNumber}
        className="arrow"
      >
        &gt;
      </button>
    </PagingStyle>
  );
};

export default Pagination;
