import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './styled/GlobalStyle';
import Layout from './common/Layout';
import {
    Bcorp,
    Cart,
    Collection,
    Contact,
    DarkEdition,
    Event,
    Faq,
    Gift,
    Intro,
    Join,
    Login,
    Main,
    Product,
    ProductDetail,
    Promise,
    Wish,
} from './pages';
import Notfiles from './pages/notfiles';
import JoinInfo from './components/join/JoinInfo';
import JoinComplete from './components/join/JoinComplete';
import Payment from './pages/payment';
import PayComplete from './pages/payment/PayComplete';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <GlobalStyle />
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Main />} />

                        <Route path="product/:category" element={<Product />} />
                        <Route path="product/:category/:productID" element={<ProductDetail />} />

                        <Route path="gift" element={<Gift />} />
                        <Route path="collection" element={<Collection />} />
                        <Route path="event" element={<Event />} />

                        <Route path="about">
                            <Route index element={<Intro />} />
                            <Route path="intro" element={<Intro />} />
                            <Route path="promise" element={<Promise />} />
                            <Route path="bcorp" element={<Bcorp />} />
                        </Route>

                        <Route path="cscenter">
                            <Route index element={<Faq />} />
                            <Route path="faq" element={<Faq />} />
                            <Route path="contact" element={<Contact />} />
                        </Route>

                        <Route path="cart">
                            <Route index element={<Cart />} />
                            <Route path="payment" element={<Payment />} />
                            <Route path="paycomplete" element={<PayComplete />} />
                        </Route>

                        <Route path="wish" element={<Wish />} />

                        <Route path="login" element={<Login />} />
                        <Route path="join">
                            <Route index element={<Join />} />
                            <Route path="joininfo" element={<JoinInfo />} />
                            <Route path="joincomplete" element={<JoinComplete />} />
                        </Route>

                        <Route path="*" element={<Notfiles />} />
                    </Route>
                    <Route path="/darkedition" element={<Layout theme="special" />}>
                        <Route index element={<DarkEdition />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
