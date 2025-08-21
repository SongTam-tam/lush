import { ProductTypeStyle } from "./style";

const ProductType = ({ selected, onSelect }) => {
  const menuData = [
    { key: "bath", img: "./images/shop/Bath.png", label: "BATH" },
    { key: "shower", img: "./images/shop/Shower.png", label: "SHOWER" },
    { key: "face", img: "./images/shop/Face.png", label: "FACE" },
    { key: "body", img: "./images/shop/Body.png", label: "BODY" },
    { key: "hair", img: "./images/shop/Hair.png", label: "HAIR" },
    {
      key: "fragrance",
      img: "./images/shop/Fragrance.png",
      label: "FRAGRANCE",
    },
  ];

  return (
    <ProductTypeStyle>
      <ul className="product-type">
        {menuData.map(({ key, img, label }) => (
          <li key={key} onClick={() => onSelect(key)}>
            <div className="img_wrap">
              {selected !== key && <div className="overlay"></div>}
              <img src={img} alt={label} />
              <h3>{label}</h3>
            </div>
          </li>
        ))}
      </ul>
    </ProductTypeStyle>
  );
};

export default ProductType;
