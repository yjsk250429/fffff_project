import { Link } from 'react-router-dom';
import { IntroStyle, TabBarStyle } from './style';
import { PiDotOutlineFill } from 'react-icons/pi';

const Intro = () => {
    return (
        <IntroStyle>
            <TabBarStyle className="tabBar">
                <li className="on">
                    <Link to="/about/intro">브랜드 소개</Link>
                </li>
                <li>
                    <Link to="/about/promise">록시땅의 약속</Link>
                </li>
                <li>
                    <Link to="/about/bcorp">Bcorp</Link>
                </li>
            </TabBarStyle>
            <div className="inner">
                <section id="con1">
                    <em>피부에 닿기 전, 자연에서 시작된 이야기</em>
                    <strong>
                        자연과 사람을 잇는 <span>록시땅</span>의 여정
                    </strong>
                    <div className="desc">
                        <p>
                            L'OCCITANE EN PROVENCE는 1976년 부터
                            <br />
                            자연의 경이로움을 공유하기 위해 스킨케어 제품 등을 생산 및 판매해
                            왔습니다. <br />
                        </p>
                        <p>
                            L'OCCITANE EN PROVENCE는 변화를 이끌어냅니다. <br />
                            세상을 위한 긍정적인 변화를 이끌기 위해 최선을 다하고, <br />
                            항상 주변의 모든 사람들이 변화에 동참하도록 영감을 주기 위해 노력합니다.
                        </p>
                    </div>

                    <div className="img">
                        <img
                            src="/images/about/about1_con1.jpg"
                            alt="자연과 사람을 잇는 록시땅의 여정"
                        />
                        <img
                            src="/images/about/about1_con1.jpg"
                            alt="자연과 사람을 잇는 록시땅의 여정"
                        />
                    </div>
                </section>
                <section id="con2">
                    <div className="story">
                        <strong>All About L'OCCITANE</strong>
                        <em>프로방스에서 시작된 록시땅의 이야기를 들려드립니다.</em>
                        <p>
                            록시땅의 여정은 브랜드 청립자인 올리비에 보쏭이 프로방스 지방에서 자라는
                            <br />
                            원재료를 통해 에센셜 오일을 증류하고 판매하면서 시작되었습니다. 이후
                            브랜드는
                            <br /> 급속도로 성장했지만 자연을 향한 철학은 단 한 순간도 변치
                            않았습니다. <br /> 록시땅은 자연을 소중히 여기고 경작자를 존중합니다.
                            <br />
                        </p>
                    </div>
                    <div className="story_img">
                        <img src="/images/about/story03.png" alt="all about loccitane" />
                    </div>
                </section>
                <section id="con3">
                    <div className="head">
                        <span>우리의 이야기는 4개의 장으로 나뉩니다.</span>
                        <h3>Our Story Is Divided into Four Chapters</h3>
                    </div>
                    <ul className="list">
                        {/* 1 */}
                        <li className="story_right">
                            <div className="left">
                                <em>01</em>
                                <span>We Grow Nature</span>
                                <strong>우리는 자연을 키웁니다</strong>
                                <p>
                                    지속가능한 경작과 농업 생태학적 방법에 따라 유기농 재료를
                                    재배합니다. <br />
                                    원재료들은 지속가능한 방법으로 재배되고
                                    <br />
                                    자연 생태계에 해가 되지 않는 방안으로 운영되고 있습니다.
                                </p>
                            </div>
                            <div className="right">
                                <img src="/images/about/story04.png" alt="우리는 자연을 키웁니다" />
                            </div>
                        </li>
                        {/* 2 */}
                        <li className="story_left">
                            <div className="left">
                                <img src="/images/about/story05.png" alt="우리는 자연을 키웁니다" />
                            </div>
                            <div className="right">
                                <em>02</em>
                                <span>We Reveal Wonders</span>
                                <strong>우리는 경이로움을 발견합니다</strong>
                                <p>
                                    자연이 그러하듯 모발/피부에도 저마다 고유의 생태계를 가지고
                                    있습니다.
                                    <br /> 새로운 결과가 도출될 때까지 지속적으로 연구하는
                                    과학자들과 함께 <br />
                                    팀을 이루어 연구 개발에 매진합니다.
                                </p>
                            </div>
                        </li>
                        {/* 2 */}
                        <li className="story_right">
                            <div className="left">
                                <em>03</em>
                                <span>We Craft Sensation</span>
                                <strong>우리는 감각을 만듭니다.</strong>
                                <p>
                                    감각을 자극함으로써 새로운 감각을 만들어냅니다.
                                    <br />
                                    우리는 오랫동안 지속되는 추억을 만들어내고
                                    <br />
                                    고객의 기억에 오랫동안 남는 순간을 만들기 위해 노력합니다.
                                    <br />
                                    사랑하는 이들을 위한 록시땅의 선물은 영원히 빛날 것입니다.
                                </p>
                            </div>
                            <div className="right">
                                <img src="/images/about/story06.png" alt="우리는 자연을 키웁니다" />
                            </div>
                        </li>
                        {/* 2 */}
                        <li className="story_left">
                            <div className="left">
                                <img src="/images/about/story07.png" alt="우리는 자연을 키웁니다" />
                            </div>
                            <div className="right">
                                <em>04</em>
                                <span>We Act Locally</span>
                                <strong>우리는 자연을 키웁니다.</strong>
                                <p>
                                    세상은 변화해야하며 우리는 이 변화에 책임을 갖고 있습니다.
                                    <br />
                                    록시땅의 직원과 고객 그리고 우리가 매일 함께하고 있는 모두가
                                    변화를 만들어낼 수 있습니다.
                                    <br />
                                    지역적 차원에서 취하는 행동은 세계적으로 더 좋은 삶을 만들 수
                                    있습니다.
                                </p>
                            </div>
                        </li>
                    </ul>
                </section>
                <section id="con4">
                    <strong>Group Sustainability</strong>
                    <ul>
                        <li>
                            <div className="img-wrap">
                                <img src="/images/about/story08.png" alt="생물다양성 보존" />
                                <div className="overlay">
                                    <p>
                                        PROTECTING <br /> BIOVERSITY
                                    </p>
                                </div>
                            </div>

                            <em>생물다양성 보존</em>
                            <p>
                                <PiDotOutlineFill />
                                친환경 방식으로 원료 조달
                            </p>
                            <p>
                                <PiDotOutlineFill />
                                지속 가능한 방식으로 원료 소싱
                            </p>
                            <p>
                                <PiDotOutlineFill />
                                생물다양성 복원 및 보호를 위한 <br />
                                개별 국가의 활동 장려
                            </p>
                        </li>
                        <li>
                            <div className="img-wrap">
                                <img src="/images/about/story09.png" alt="다양성과 포용성 증진" />
                                <div className="overlay">
                                    <p>HUMANS</p>
                                </div>
                            </div>

                            <em>다양성과 포용성 증진</em>
                            <p>
                                <PiDotOutlineFill />
                                생산자와 공급자들을 향한 지원
                            </p>
                            <p>
                                <PiDotOutlineFill />
                                일터에서의 웰빙 지수 개선
                            </p>
                            <p>
                                <PiDotOutlineFill />팀 교육 및 발전을 위한 노력
                            </p>
                        </li>
                        <li>
                            <div className="img-wrap">
                                <img src="/images/about/story10.png" alt="기후 변화 완화 " />
                                <div className="overlay">
                                    <p>REDUCING WASTE</p>
                                </div>
                            </div>

                            <em>기후 변화 완화 </em>
                            <p>
                                <PiDotOutlineFill />
                                쓰레기 배출 감소
                            </p>
                            <p>
                                <PiDotOutlineFill />
                                전 벨류 체인에 걸쳐 폐기 및<br />
                                오염 감소를 물류 시스템 구축
                                <br />
                                25년 까지 100% 재생에너지 사용
                            </p>
                            <p></p>
                        </li>
                    </ul>
                </section>
                <section id="con5">
                    <div className="left">
                        <img
                            src="/images/about/story11.png"
                            alt="자연의 가치를 전하며 한국에서 이어가는 록시땅의 특별한 공헌 활동"
                        />
                    </div>
                    <div className="right">
                        <strong>
                            자연의 가치를 전하며 <br />
                            한국에서 이어가는 록시땅의 특별한 공헌 활동
                        </strong>
                        <p>
                            자연과 사람을 위한 더 나은 내일을 만들기 위해, 록시땅은 다양한 노력을
                            이어갑니다. <br />
                            우리는 쓰레기를 줄이고, 시각 장애 어린이의 꿈을 지키며, 생물 다양성을
                            보존하는 활동을 통해 지속가능한 아름다움을 전하고자 합니다.
                        </p>
                        <p className="btn">
                            <button>함께하는 여정 보기</button>
                        </p>
                    </div>
                </section>
            </div>
        </IntroStyle>
    );
};

export default Intro;
