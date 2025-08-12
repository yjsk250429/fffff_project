import { Link } from 'react-router-dom';
import { FooterStyle } from './style';

const Footer = () => {
    return (
        <FooterStyle>
            <div className="inner">
                <ul className="sns">
                    <li>
                        <a href="https://www.instagram.com/loccitanekorea/#">
                            <img src="/images/instagram.png" alt="instagram" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/channel/UCThkOG1gSayUnxQQzEZur1A/featured">
                            <img src="/images/youtube.png" alt="youtube" />
                        </a>
                    </li>
                    <li>
                        <a href="https://pf.kakao.com/_fwQxaz">
                            <img src="/images/kakaochanel.png" alt="kakaochanel" />
                        </a>
                    </li>
                </ul>
                <ul className="policy">
                    <li>
                        <Link to="/cscenter/faq">고객지원</Link>
                    </li>
                    <li>이용약관</li>
                    <li>개인정보처리방침</li>
                    <li>영상정보처리기기 운영 및 관리 방침</li>
                    <li>
                        <Link to="/cscenter/faq">자주하는 질문</Link>
                    </li>
                    <li>교환/반품 안내</li>
                    <li>기업구매문의</li>
                    <li>매장찾기</li>
                    <li>록시땅 프로방스 국가/도시 변경</li>
                </ul>
                <h1>
                    <img src="/images/footer_logo.png" alt="loccitane" />
                </h1>
                <ul className="info1">
                    <li>록시땅코리아 유한책임회사</li>
                    <li>사업자 등록 번호 : 211-87-74234</li>
                    <li>대표자 : 안드레조셉호프만</li>
                    <li>
                        주소 : 서울특별시 강남구 테헤란로 87길 36(삼성동) 도심공항타워 21층(06164)
                    </li>
                </ul>
                <ul className="info2">
                    <li>대표전화 : (02)2054-0500</li>
                    <li>대표메일 : LOCCITANE@LOCCITANE.CO.KR</li>
                    <li>결제관련문의 : 1588-4954</li>
                    <li>주문관련문의 : (02)2054-0500</li>
                    <li>통신판매번호 : 2008-서울강남-0844</li>
                    <li>호스팅 서비스 제공 : AWS</li>
                </ul>
                <p>L'OCCITANE EN PROVENCE &copy; COPYRIGHT 2025</p>
            </div>
        </FooterStyle>
    );
};

export default Footer;
