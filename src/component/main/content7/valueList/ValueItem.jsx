import React from "react";

const ValueItem = ({ value, progressCircle, progressContent }) => {
  const { id, img, onClass, desc, subtitle, em } = value;
  return (
    <li>
      <div className="pic">
        <img src={img} alt="" />
      </div>
      <div className="autoplay-progress" slot="container-end">
        <div className="progress-bar" ref={progressCircle}></div>
        <span ref={progressContent}></span>
      </div>
    </li>
  );
};

export default ValueItem;
