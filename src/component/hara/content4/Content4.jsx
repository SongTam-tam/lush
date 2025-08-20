import { useEffect, useRef } from "react";
import { Content4lStyle } from "./style";
import { gsap } from "gsap";

const Content4 = () => {
  const imgRef = useRef(null);

  useEffect(() => {
    gsap.to(imgRef.current, {
      x: "-50%",
      ease: "linear",
      duration: 70,
      repeat: -1,
    });
  }, []);

  return (
    <Content4lStyle>
      <img ref={imgRef} src="/images/hara/img2.png" alt="" />
    </Content4lStyle>
  );
};

export default Content4;
