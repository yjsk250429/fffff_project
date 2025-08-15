import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './styled/GlobalStyle';
import Layout from './common/Layout';
import {
    Bcorp,
    Body,
    BodyDetail,
    Cart,
    Collection,
    Contact,
    DarkEdition,
    Event,
    Faq,
    Fragrance,
    FragranceDetail,
    Gift,
    Hair,
    HairDetail,
    Hand,
    HandDetail,
    Intro,
    Join,
    Login,
    Main,
    Promise,
    Refill,
    RefillDetail,
    Skin,
    SkinDetail,
    Wish,
} from './pages';
import Notfiles from './pages/notfiles';
import JoinInfo from './components/join/JoinInfo';
import JoinComplete from './components/join/JoinComplete';
import Payment from './pages/payment/Payment';
import PayComplete from './pages/payment/PayComplete';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <GlobalStyle />
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Main />} />
                        <Route path="/hair">
                            <Route index element={<Hair />} />
                            <Route path=":hairID" element={<HairDetail />} />
                        </Route>

                        <Route path="/hand">
                            <Route index element={<Hand />} />
                            <Route path=":handID" element={<HandDetail />} />
                        </Route>

                        <Route path="/body">
                            <Route index element={<Body />} />
                            <Route path=":bodyID" element={<BodyDetail />} />
                        </Route>

                        <Route path="/skin">
                            <Route index element={<Skin />} />
                            <Route path=":skinID" element={<SkinDetail />} />
                        </Route>

                        <Route path="/refill">
                            <Route index element={<Refill />} />
                            <Route path=":refillID" element={<RefillDetail />} />
                        </Route>

                        <Route path="/fragrance">
                            <Route index element={<Fragrance />} />
                            <Route path=":fragranceID" element={<FragranceDetail />} />
                        </Route>

                        <Route path="/gift" element={<Gift />} />
                        <Route path="/collection" element={<Collection />} />
                        <Route path="/event" element={<Event />} />

                        <Route path="/about">
                            <Route index element={<Intro />} />
                            <Route path="intro" element={<Intro />} />
                            <Route path="promise" element={<Promise />} />
                            <Route path="bcorp" element={<Bcorp />} />
                        </Route>

                        <Route path="/darkedition" element={<DarkEdition />} />

                        <Route path="/cscenter">
                            <Route index element={<Faq />} />
                            <Route path="faq" element={<Faq />} />
                            <Route path="contact" element={<Contact />} />
                        </Route>

                        <Route path="/cart">
                            <Route index element={<Cart />} />
                            <Route path="payment" element={<Payment />} />
                            <Route path="paycomplete" element={<PayComplete />} />
                        </Route>

                        <Route path="/wish" element={<Wish />} />

                        <Route path="/login" element={<Login />} />
                        <Route path="/join">
                            <Route index element={<Join />} />
                            <Route path="joininfo" element={<JoinInfo />} />
                            <Route path="joincomplete" element={<JoinComplete />} />
                        </Route>

                        <Route path="*" element={<Notfiles />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
