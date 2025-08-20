import React, { useState } from "react";
import { FooterStyle } from "./style";

const Footer = () => {
  const [on, setOn] = useState(false);
  const [on2, setOn2] = useState(false);
  const [on3, setOn3] = useState(false);

  return (
    <FooterStyle>
      <div className="inner">
        <h2 className="logo">
          <a href="#">
            <img src="./images/LOGO.png" alt="" />
          </a>
        </h2>
        <ul className="con1">
          <li>개인정보처리방침</li>
          <li>영상정보관리지침</li>
          <li>이용약관</li>
        </ul>
        <ul className="con2">
          <li>
            서울 강남구 학동로 336 (메이트리 빌딩(matree B/D)) 1층 주식회사
            러쉬코리아
          </li>
          <li>사이트 운영자 : 주식회사 러쉬코리아 I 대표이사 : 우미령</li>
          <li>
            통신판매업 신고번호 : 2012-서울서초-0647 I 개인정보보호책임자 :
            장승웅
          </li>
          <li>COPYRIGHT © LUSHKOREA.CO.LTD.ALL RIGHTS RESERVED.</li>
        </ul>
        <ul className="con3">
          <li>고객센터</li>
          <li>webmaster@lush.co.kr</li>
          <li>
            <button
              onMouseEnter={() => setOn(true)}
              onMouseLeave={() => setOn(false)}
              className={on ? "on" : ""}
            >
              <img
                src={
                  on
                    ? "./images/icons/talk-color.png"
                    : "./images/icons/talk.png"
                }
                alt=""
              />
              러쉬톡 시작하기
            </button>
          </li>
        </ul>
        <ul className="con4">
          <li>기업선물</li>
          <li>order@lush.co.kr</li>
        </ul>
        <ul className="con5">
          <li>러쉬 앱 다운로드</li>
          <li>
            <button
              onMouseEnter={() => setOn2(true)}
              onMouseLeave={() => setOn2(false)}
              className={on2 ? "on" : ""}
            >
              <img
                src={
                  on2
                    ? "./images/icons/Android-color.png"
                    : "./images/icons/Android.png"
                }
                alt=""
              />
              Google Play
            </button>
          </li>
          <li>
            <button
              onMouseEnter={() => setOn3(true)}
              onMouseLeave={() => setOn3(false)}
              className={on3 ? "on" : ""}
            >
              <img
                src={
                  on3
                    ? "./images/icons/Apple-color.png"
                    : "./images/icons/Apple.png"
                }
                alt=""
              />
              App Store
            </button>
          </li>
        </ul>
      </div>
    </FooterStyle>
  );
};

export default Footer;
