import { Link } from 'react-router-dom';
import { BigUtilStyle, HeaderSearchWrap, HeaderStyle, SmallUtilStyle } from './style';
import Nav from './Nav';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { PiHandbagSimple } from 'react-icons/pi';
import { IoSearchOutline, IoHeartOutline, IoPersonOutline } from 'react-icons/io5';
import Badge from '../../ui/Badge';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { cartActions } from '../../store/modules/cartSlice';
import { authActions } from '../../store/modules/authSlice';
import SearchForm from '../../ui/SearchForm';
import { IoCloseOutline } from "react-icons/io5";


const Header = ({ theme }) => {
    const { carts } = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const { authed, user } = useSelector((state) => state.auth);
    const [ lang, setLang ] = useState('KOR');
    const [openLang, setOpenLang] = useState(false);
    const [openSearch, setOpenSearch] = useState(false);
    const logoChange =
        theme === 'special' ? '/images/header_logo_2.png' : '/images/header_logo.png';

    useEffect(() => {
        dispatch(cartActions.totalCart());
    }, [carts]);

    const handleLogout = () => {
        dispatch(authActions.logout());
        alert('로그아웃 완료');
    };

    const totalQuantity = carts.reduce((sum, cart) => sum + cart.quantity, 0);
    return (
        <HeaderStyle>
            <div className="inner">
                <SmallUtilStyle>
                    <li>
                        <span onClick={()=>setOpenLang(v => !v)}>{lang}</span>
                        <i onClick={()=>setOpenLang(v => !v)}>
                            {openLang? <FiChevronUp />:<FiChevronDown />}
                        </i>
                        <ul className={openLang ? 'on' : ''}>
                            <li onClick={()=>{setLang('KOR'); setOpenLang(false)}}>KOR</li>
                            <li onClick={()=>{setLang('ENG'); setOpenLang(false)}}>ENG</li>
                        </ul>
                    </li>
                    <li>
                        {authed ? (
                            <span onClick={handleLogout} style={{ cursor: 'pointer' }}>
                                {user?.name}님 로그아웃
                            </span>
                        ) : (
                            <Link to="/login">로그인</Link>
                        )}
                    </li>
                    <li>
                        <Link to="/cscenter/faq">고객센터</Link>
                    </li>
                </SmallUtilStyle>
                <div className="bottom">
                    <h1>
                        <Link to="/">
                            <img src={logoChange} alt="loccitane" />
                        </Link>
                    </h1>
                    <Nav />
                    <BigUtilStyle>
                        <li onClick={()=>setOpenSearch(true)}>
                            <i>
                                <IoSearchOutline />
                            </i>
                        </li>
                        <li>
                            <Link to="/cart">
                                <i>
                                    <PiHandbagSimple />
                                </i>
                            </Link>
                            {carts.length > 0 && <Badge text={totalQuantity} />}
                        </li>
                        <li>
                            <Link to="/wish">
                                <i>
                                    <IoHeartOutline />
                                </i>
                            </Link>
                        </li>
                        <li>
                            {authed ? (
                                <i>
                                    <IoPersonOutline />
                                </i>
                            ) : (
                                <Link to="/login">
                                    <i>
                                        <IoPersonOutline />
                                    </i>
                                </Link>
                            )}
                        </li>
                    </BigUtilStyle>
                </div>
            </div>
            <HeaderSearchWrap className={openSearch ? 'on' : ''}>
                <div className="inner">
                    <i onClick={()=>setOpenSearch(false)}><IoCloseOutline /></i>
                <span>Search For Products</span>
                <h3>무엇을 찾고 계신가요?</h3>
                <SearchForm width="1010px"/>
                <ul>
                    <li>인기 검색어</li>
                    <li>#핸드크림</li>
                    <li>#바디워시</li>
                    <li>#시어버터</li>
                    <li>#핸드워시</li>
                    <li>#헤어오일</li>
                </ul>
                </div>
            </HeaderSearchWrap>
        </HeaderStyle>
    );
};

export default Header;
