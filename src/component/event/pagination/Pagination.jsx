import PaginationItem from "./PaginationItem";
import { PagingStyle } from "./style";
import { useState } from "react";

const Pagination = ({ pageNumber, onCurrent }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handleClick = (num) => {
    setCurrentPage(num);
    onCurrent(num);
  };

  const handleFirst = () => {
    handleClick(1);
  };

  const handleLast = () => {
    handleClick(pageNumber);
  };

  return (
    <PagingStyle>
      <button
        onClick={handleFirst}
        disabled={currentPage === 1}
        className="arrow"
      >
        &lt;
      </button>

      {Array.from({ length: pageNumber }, (_, i) => i + 1).map((item) => (
        <PaginationItem
          key={item}
          item={item}
          onCurrent={handleClick}
          isActive={item === currentPage}
        />
      ))}

      <button
        onClick={handleLast}
        disabled={currentPage === pageNumber}
        className="arrow"
      >
        &gt;
      </button>
    </PagingStyle>
  );
};

export default Pagination;
