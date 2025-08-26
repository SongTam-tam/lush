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
    Search,
    MyPage,
    Oauth,
    Pay,
    PayComplete,
} from './page';
import NotFile from './page/notFile';
import PageTop from './ui/PageTop';

const App = () => {
    return (
        <>
            <GlobalStyle />

            <BrowserRouter>
                <PageTop />
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
                        <Route path="oauth" element={<Oauth />} />
                        <Route path="logout" element={<Logout />} />
                        <Route path="join" element={<Join />} />
                        <Route path="mypage" element={<MyPage />} />
                        <Route path="cart" element={<Cart />} />
                        <Route path="pay" element={<Pay />} />
                        <Route path="payComplete" element={<PayComplete />} />
                        <Route path="newDetail/:id" element={<NewDetail />} />
                        <Route path="search">
                            <Route index element={<Search />} />
                        </Route>
                        <Route path="shop">
                            <Route index element={<Shop />} />
                            <Route path="shopDetail/:id" element={<ShopDetail />} />
                            <Route path="bestDetail/:id" element={<BestDetail />} />
                        </Route>
                    </Route>
                    <Route path="*" element={<NotFile />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
