<<<<<<< HEAD
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Layout from './common/Layout';
import GlobalStyle from './styled/GlobalStyld';
import {
    Event,
    FAQ,
    Main,
    Hara,
    Shop,
    SPA,
    Store,
    About,
    ShopDetail,
    BestDetail,
    NewDetail,
    Login,
    Join,
    Cart,
    Logout,
} from './page';
import NotFile from './page/notFile';

const App = () => {
    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Main />} />
                        <Route path=":bestDetail" element={<BestDetail />} />
                        <Route path=":newDetail" element={<NewDetail />} />
                        <Route path="hara" element={<Hara />} />
                        <Route path="faq" element={<FAQ />} />
                        <Route path="event" element={<Event />} />
                        <Route path="spa" element={<SPA />} />
                        <Route path="store" element={<Store />} />
                        <Route path="about" element={<About />} />
                        <Route path="login" element={<Login />} />
                        <Route path="logout" element={<Logout />} />
                        <Route path="join" element={<Join />} />
                        <Route path="cart" element={<Cart />} />
                        <Route path="shop">
                            <Route index element={<Shop />} />
                            <Route path=":shopDetail" element={<ShopDetail />} />
                        </Route>
                    </Route>
                    <Route path="*" element={<NotFile />} />
                </Routes>
            </BrowserRouter>
        </>
    );
=======
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Layout from "./common/Layout";
import GlobalStyle from "./styled/GlobalStyld";
import {
  Event,
  FAQ,
  Main,
  Hara,
  Shop,
  SPA,
  Store,
  About,
  ShopDetail,
  BestDetail,
  NewDetail,
  Login,
  Join,
  Cart,
<<<<<<< HEAD
=======
  Logout,
>>>>>>> dd1d993 (“추가”)
} from "./page";
import NotFile from "./page/notFile";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Main />} />
            <Route path=":bestDetail" element={<BestDetail />} />
            <Route path=":newDetail" element={<NewDetail />} />
            <Route path="hara" element={<Hara />} />
            <Route path="faq" element={<FAQ />} />
            <Route path="event" element={<Event />} />
            <Route path="spa" element={<SPA />} />
            <Route path="store" element={<Store />} />
            <Route path="about" element={<About />} />
            <Route path="login" element={<Login />} />
<<<<<<< HEAD
=======
            <Route path="logout" element={<Logout />} />
>>>>>>> dd1d993 (“추가”)
            <Route path="join" element={<Join />} />
            <Route path="cart" element={<Cart />} />
            <Route path="shop">
              <Route index element={<Shop />} />
              <Route path=":shopDetail" element={<ShopDetail />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
>>>>>>> 5f9e158d9aae61bbac892fe016fffd6a90d71ad7
};

export default App;
