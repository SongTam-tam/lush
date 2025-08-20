import React, { useEffect } from "react";
import { VisualContent } from "./style";
import AOS from "aos";
import "aos/dist/aos.css";
const VIsual = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <VisualContent>
      <h2 className="visual_logo">
        <img src="./images/main/visual_logo.png" alt="" />
      </h2>
      <div className="visualText">
        <p>FRESH HANDMADE COSMETICE</p>
      </div>
    </VisualContent>
  );
};

export default VIsual;
