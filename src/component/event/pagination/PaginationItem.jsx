const PaginationItem = ({ item, onCurrent, isActive }) => {
  return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        onCurrent(item);
      }}
      style={{
        fontWeight: isActive ? "bold" : "normal",
        color: isActive ? "black" : "gray",
      }}
    >
      {item}
    </a>
  );
};

export default PaginationItem;
