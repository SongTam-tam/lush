import React from 'react';
import { SpaContent1Style } from './style';

const Content1 = () => {
    return (
        <SpaContent1Style>
            <div className="spa-reservation">
                <p className="reservation on">소개·예약</p>
                <p className="guide">이용방법</p>
            </div>
            <div className="videoPic">
                <iframe
                    width="1371"
                    height="770"
                    src="https://www.youtube.com/embed/G9JsHWeO3c0"
                    title="[LUSH] SPA TREATMENT PREVIEW"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                ></iframe>
            </div>
            <div className="textBox">
                <p className="first-line">
                    감성 스파라 불리는 러쉬 스파는 총<span> 14가지 트리트먼트가</span> 있으며
                </p>
                <p className="second-line">
                    {`트리트먼트별 각기 다른 음악과 놀라운 퍼포먼스가 함께 진행됩니다.
                    \n`}
                </p>
                <p className="third-line">
                    자연에서 얻어진 소리와 오케스트라와 같은 멋진 협주곡으로 숲속
                </p>
                <p className="fourth-line">
                    감성 스파라 불리는 러쉬 스파는 총<span> 환상의 퍼포먼스</span> 있으며
                </p>
                <p className="fifth-line">
                    감성 스파라 불리는 러쉬 스파는 총<span> 14가지 트리트먼트가</span> 있으며
                </p>
            </div>
            <div className="imgBox">
                <div className="pp left">
                    <img src="./images/spa/button1.jpg" alt="" />
                    <p>{`나에게 맞는
스파 트리트먼트`}</p>
                    <span>찾기</span>
                </div>
                <div className="pp right">
                    <img src="./images/spa/button2.jpg" alt="" />
                    <p>{`나에게 맞는
스파 트리트먼트`}</p>
                    <span>조합하기</span>
                </div>
            </div>
        </SpaContent1Style>
    );
};

export default Content1;
