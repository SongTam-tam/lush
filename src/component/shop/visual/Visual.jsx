import { VisualStyle } from "./style";

const Visual = () => {
  return (
    <VisualStyle>
      <div className="video-wrap">
        <video
          src="../../videos/Visual.mp4"
          autoPlay
          muted
          loop
          playsInline
        ></video>
        <h2>Lush shop</h2>
      </div>
    </VisualStyle>
  );
};

export default Visual;
