import { NavStyle } from './style';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Nav = () => {
    const [headerOn, setHeaderOn] = useState(false);
    const [subOn, setSubOn] = useState(false);
    return (
        <>
            <NavStyle className="nav">
                <ul className="gnb">
                    <li
                        onMouseEnter={() => {
                            setHeaderOn(true);
                            setSubOn(false);
                        }}
                    >
                        <span>제품 보기</span>
                        <ul
                            className={headerOn ? 'submenu1 on' : 'submenu1'}
                            onMouseLeave={() => setHeaderOn(false)}
                        >
                            <li>
                                <Link to="/product/hand">핸드 케어</Link>
                            </li>
                            <li>
                                <Link to="/product/hair">헤어 케어</Link>
                            </li>
                            <li>
                                <Link to="/product/skin">스킨 케어</Link>
                            </li>
                            <li>
                                <Link to="/product/body">바디 케어</Link>
                            </li>
                            <li>
                                <Link to="/product/fragrance">홈 & 프래그런스</Link>
                            </li>
                            <li>
                                <Link to="/product/refill">리필</Link>
                            </li>
                        </ul>
                    </li>
                    <li
                        onMouseEnter={() => {
                            setHeaderOn(false);
                            setSubOn(false);
                        }}
                    >
                        <Link to="/gift">Gift & Set</Link>
                    </li>
                    <li
                        onMouseEnter={() => {
                            setHeaderOn(false);
                            setSubOn(false);
                        }}
                    >
                        <Link to="/collection">라인별 콜렉션</Link>
                    </li>
                    <li
                        onMouseEnter={() => {
                            setHeaderOn(false);
                            setSubOn(false);
                        }}
                    >
                        <Link to="/event">이벤트</Link>
                    </li>
                    <li
                        onMouseEnter={() => {
                            setHeaderOn(false);
                            setSubOn(true);
                        }}
                    >
                        <Link to="/about/intro">브랜드 스토리</Link>
                        <ul
                            className={subOn ? 'submenu2 on' : 'submenu2'}
                            onMouseLeave={() => setSubOn(false)}
                        >
                            <li>
                                <Link to="/about/intro">브랜드 소개</Link>
                            </li>
                            <li>
                                <Link to="/about/promise">록시땅의 약속</Link>
                            </li>
                            <li>
                                <Link to="/about/bcorp">B corp</Link>
                            </li>
                        </ul>
                    </li>
                    <li
                        onMouseEnter={() => {
                            setHeaderOn(false);
                            setSubOn(false);
                        }}
                    >
                        <Link to="/darkedition">L'OCCITANE Dark Edition</Link>
                    </li>
                </ul>
            </NavStyle>
        </>
    );
};

export default Nav;
