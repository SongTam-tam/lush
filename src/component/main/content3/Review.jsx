import React from "react";
import { ReviewStyle } from "./style";
import { Link } from "react-router-dom";

const Review = () => {
  return (
    <ReviewStyle>
      <h2>
        <img src="./images/main/txt.png" alt="" />
      </h2>
      <p>
        {`여름의 초록 내음이 가득한 8월,
러쉬와 함께 어떤날들을 보내고 계신가요?
구매하신 제품과`}
        <strong>이야기를 남겨주신 모든 분께 파워</strong>를,
        <strong>{`\n추첨을 통해 선정한 세 분께는 깜짝선물`}</strong>
        {`을 드립니다.`}
      </p>
      <Link to="/event">
        <button className="eve">파워는 무엇이고, 어떻게 쓰이나요?</button>
      </Link>
    </ReviewStyle>
  );
};

export default Review;
