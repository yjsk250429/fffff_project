import { Link } from 'react-router-dom';
import { BigUtilStyle, HeaderStyle, SmallUtilStyle } from './style';
import Nav from './Nav';
import { FiChevronDown } from 'react-icons/fi';
import { PiHandbagSimple } from "react-icons/pi";
import { IoSearchOutline } from "react-icons/io5";
import { IoHeartOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";

const Header = () => {
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
                    <li>
                        <Link to="/login">로그인</Link>
                    </li>
                    {/* <li>xxx 님 로그아웃</li> */}
                    <li>
                        <Link to="/cscenter/faq">고객센터</Link>
                    </li>
                </SmallUtilStyle>
                <div className="bottom">
                    <h1>
                        <Link to="/">
                            <img src="/images/header_logo.png" alt="loccitane" />
                        </Link>
                    </h1>
                    <Nav />
                    <BigUtilStyle>
                        <li>
                            <i><IoSearchOutline /></i>
                        </li>
                        <li>
                            <Link to="/cart">
                                <i><PiHandbagSimple /></i>
                            </Link>
                        </li>
                        <li>
                            <Link to="/wish">
                                <i><IoHeartOutline /></i>
                            </Link>
                        </li>
                        <li>
                            {/* 로그인 되어있으면 그냥 이미지만, 로그인 안 돼있으면 Link to 안에 이미지 */}
                            <Link to="/login">
                                <i><IoPersonOutline /></i>
                            </Link>
                        </li>
                    </BigUtilStyle>
                </div>
            </div>
        </HeaderStyle>
    );
};

export default Header;
