import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  /* other styles */
  
  @font-face {
    font-family: 'Pretendard-Light';
    src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Light.woff') format('woff');
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'Pretendard-Medium';
    src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Medium.woff') format('woff');
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: 'Pretendard-SemiBold';
    src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-SemiBold.woff') format('woff');
    font-weight: 600;
    font-style: normal;
  }
  @font-face {
    font-family: 'Pretendard-Bold';
    src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Bold.woff') format('woff');
    font-weight: 700;
    font-style: normal;
  }
  @font-face {
    font-family:'KyivTypeSerif-Bold' ;
    src: url(../fonts/KyivTypeSerif-Bold.oft);
  }

  @font-face {
    font-family: "Lush Handwritten WLat Bold";
    src: url("https://db.onlinewebfonts.com/t/986793bc2e6d8d6c6400fac7d7fc3a22.eot");
    src: url("https://db.onlinewebfonts.com/t/986793bc2e6d8d6c6400fac7d7fc3a22.eot?#iefix")format("embedded-opentype"),
    url("https://db.onlinewebfonts.com/t/986793bc2e6d8d6c6400fac7d7fc3a22.woff2")format("woff2"),
    url("https://db.onlinewebfonts.com/t/986793bc2e6d8d6c6400fac7d7fc3a22.woff")format("woff"),
    url("https://db.onlinewebfonts.com/t/986793bc2e6d8d6c6400fac7d7fc3a22.ttf")format("truetype"),
    url("https://db.onlinewebfonts.com/t/986793bc2e6d8d6c6400fac7d7fc3a22.svg#Lush Handwritten WLat Bold")format("svg");
}

@font-face {
  font-family: 'wedrive';
  font-weight: normal;
  font-style: normal;
  font-display: swap;
  src: url('https://cdn.jsdelivr.net/gh/fonts-archive/wedrive/wedrive.woff2') format('woff2'),
        url('https://cdn.jsdelivr.net/gh/fonts-archive/wedrive/wedrive.woff') format('woff'),
        url('https://cdn.jsdelivr.net/gh/fonts-archive/wedrive/wedrive.otf') format('opentype'),
        url('https://cdn.jsdelivr.net/gh/fonts-archive/wedrive/wedrive.ttf') format('truetype');
}
  body {
    padding-top: 163px;
    font-size: 16px;
    line-height: 1.6;
    font-family: 'Pretendard', sans-serif;
    /* font-family: 'Lush Handwritten WLat Bold' , sans-serif; */
    /* font-family: 'KyivTypeSerif-Bold' , serif; */
    color:#000;
  }
  a {
    text-decoration: none;
    color:#000; 
  
  }
  li { list-style:none }
  img { vertical-align: top; }
  
  
  .inner { margin:auto; box-sizing:border-box; position:relative; width: 1600px;}
   button { border:none; cursor: pointer; }
`;

export default GlobalStyle;
