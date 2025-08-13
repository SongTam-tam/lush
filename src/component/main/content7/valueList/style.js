import styled from "styled-components";

export const ValueListStyle = styled.div`
width: 100%;
position: relative;
display: flex;
li{
    position: relative;
    width: 100%;
    height: 965px;
    .pic{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 965px;
        img{
            width: 100%;
            height: 100%;
        }
    }
}
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #444;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.autoplay-progress {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 200px; 
  position: absolute;
  left: 0;
  top: 0;
}

.progress-bar {
  --progress: 0;
  flex: 1;
  height: 8px;
  background-color: #ddd; 
  position: relative;
  overflow: hidden;
  border-radius: 4px;
}

.progress-bar::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: calc(var(--progress) * 100%);
  height: 100%;
  background-color: #007bff; 
  transition: width 0.1s linear;
}
.custom-pagenation{
    position: absolute;
    bottom: 252px;
    left: 50%;
    transform: translateX(-50%);
  display: flex;
  justify-content: center;
  gap: 32px;
  z-index: 100;
}
.swiper-pagination-bullet{
    width: 240px;
    height: 3px;
    background-color: rgba(170, 170, 170, 0.3
        );
        opacity: 1;
    border-radius: 2px;
  margin-left: 0;
    display: block;
    position: relative;

}
.swiper-pagination-bullet-active{
    width: 240px;
    height: 3px;
    border-radius: 2px;
    background-color: rgba(170, 170, 170, 0.3
    );
    display: block;
    position: relative;
    overflow: hidden;
  .pagenation-gage{
transform: scaleX(0);
transform-origin: left;
background-color: #fff;
width: 240px;
height: 3px;
position: absolute;
left: 0;
top: 0;
  }
}
`