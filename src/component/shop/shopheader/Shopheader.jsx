// Shopheader.tsx
import { Shopheaderstyled } from "./style";

const Shopheader = ({ selected, onSelect, className }) => {
  const menuData = ["bath", "shower", "face", "body", "hair", "fragrance"];

  return (
    <Shopheaderstyled className={`subheader ${className ?? ""}`}>
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
