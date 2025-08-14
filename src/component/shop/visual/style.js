import styled from "styled-components";

export const VisualStyle = styled.section`
  width: 100%;
  height: 600px;
  .video-wrap {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden; /* 넘치는 부분 잘라내기 */
    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    h2 {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #fff;
      font-family: "Lush Handwritten WLat Bold";
      font-size: 100px;
      font-style: normal;
      font-weight: 700;
      margin: auto;
      text-align: center;
    }
  }
`;
