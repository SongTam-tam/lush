import { Shopheaderstyled } from "./style";

const Shopheader = ({ selected, onSelect }) => {
  const menuData = ["bath", "shower", "face", "body", "hair", "fragrance"];

  return (
    <Shopheaderstyled className="subheader">
      <ul>
        {menuData.map((key) => (
          <li
            key={key}
            onClick={() => onSelect(key)}
            className={selected === key ? "on" : ""}
          >
            {key.toUpperCase()}
          </li>
        ))}
      </ul>
    </Shopheaderstyled>
  );
};

export default Shopheader;
