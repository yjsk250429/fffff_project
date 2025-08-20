import { Link } from 'react-router-dom';
import { BigUtilStyle, HeaderStyle, SmallUtilStyle } from './style';
import Nav from './Nav';
import { FiChevronDown } from 'react-icons/fi';
import { PiHandbagSimple } from 'react-icons/pi';
import { IoSearchOutline } from 'react-icons/io5';
import { IoHeartOutline } from 'react-icons/io5';
import { IoPersonOutline } from 'react-icons/io5';
import Badge from '../../ui/Badge';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { cartActions } from '../../store/modules/cartSlice';
import { authActions } from '../../store/modules/authSlice';

const Header = ({ theme }) => {
    const { carts, quantityTotal } = useSelector((state) => state.cart);
        const dispatch = useDispatch();
    const { authed, user } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const logoChange =
        theme === 'special' ? '/images/header_logo_2.png' : '/images/header_logo.png';

    useEffect(() => {
        dispatch(cartActions.totalCart());
    }, [carts]);

    const handleLogout = () => {
        dispatch(authActions.logout());
    };
    return (
        <HeaderStyle>
            <div className="inner">
                <SmallUtilStyle>
                    <li>
                        <span>KOR</span>
                        <i>
                            <FiChevronDown />
                        </i>
                        <ul style={{ display: 'none' }}>
                            <li>ENG</li>
                        </ul>
                    </li>
                    {/* <li>
                        <Link to="/login">로그인</Link>
                    </li> */}
                    <li>
                        {authed ? (
                            <span onClick={handleLogout} style={{ cursor: 'pointer' }}>
                                {user?.name}님 로그아웃
                            </span>
                        ) : (
                            <Link to="/login">로그인</Link>
                        )}
                    </li>
                    {/* <li>xxx 님 로그아웃</li> */}
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
                        <li>
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
                            {carts.length > 0 && <Badge text={quantityTotal} />}
                        </li>
                        <li>
                            <Link to="/wish">
                                <i>
                                    <IoHeartOutline />
                                </i>
                            </Link>
                        </li>
                        <li>
                            {/* 로그인 되어있으면 그냥 이미지만, 로그인 안 돼있으면 Link to 안에 이미지 */}
                            <Link to="/login">
                                <i>
                                    <IoPersonOutline />
                                </i>
                            </Link>
                        </li>
                    </BigUtilStyle>
                </div>
            </div>
        </HeaderStyle>
    );
};

export default Header;
