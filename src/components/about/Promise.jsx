import { Promise_VisualStyle, PromiseStyle } from './style';
import { Link } from 'react-router-dom';
import { IntroStyle, TabBarStyle } from './style';
const Promise = () => {
    return (
        <PromiseStyle>
            <Promise_VisualStyle>
                <div className="visual"></div>
            </Promise_VisualStyle>
            <TabBarStyle className="tabBar">
                <li>
                    <Link to="/about/intro">브랜드 소개</Link>
                </li>
                <li className="on">
                    <Link to="/about/promise">록시땅의 약속</Link>
                </li>
                <li>
                    <Link to="/about/bcorp">Bcorp</Link>
                </li>
            </TabBarStyle>
            <div className="inner">
                <section id="con1">
                    <ul>
                        <li>
                            <div className="img-wrap">
                                <img
                                    src="/images/about/promise02.png"
                                    alt="지구를 위한 작은 실천, 큰 변화"
                                />
                                <div className="overlay">
                                    <p>
                                        REDUCING WASTE <br /> 지구를 위한 작은 실천, 큰 변화
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="img-wrap">
                                <img
                                    src="/images/about/promise03.png"
                                    alt="다채로운 생명의 가치를 지키다"
                                />
                                <div className="overlay">
                                    <p>
                                        RESPECTING BIODIVERSITY
                                        <br /> 다채로운 생명의 가치를 지키다
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="img-wrap">
                                <img
                                    src="/images/about/promise04.png"
                                    alt="여성의 손끝에서 피어나는 변화"
                                />
                                <div className="overlay">
                                    <p>
                                        EMPOWERING WOMEN <br /> 여성의 손끝에서 피어나는 변화
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="img-wrap">
                                <img
                                    src="/images/about/promise05.png"
                                    alt="정직한 손길과 함께 만든 가치 "
                                />
                                <div className="overlay">
                                    <p>
                                        SUPPORTING PRODUCERS <br /> 정직한 손길과 함께 만든 가치
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="img-wrap">
                                <img
                                    src="/images/about/promise06.png"
                                    alt="장인의 손길로 완성되는 아름다움 "
                                />
                                <div className="overlay">
                                    <p>
                                        CELEBRATING CRAFTMANSHIP <br />
                                        장인의 손길로 완성되는 아름다움
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="img-wrap">
                                <img
                                    src="/images/about/promise07.png"
                                    alt="소중한 눈을 위한 따뜻한 약속"
                                />
                                <div className="overlay">
                                    <p>
                                        CARING FOR SIGHTS <br /> 소중한 눈을 위한 따뜻한 약속
                                    </p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </section>
                <section id="con2">
                    <div className="top">
                        <div className="img-wrap">
                            <img
                                src="/images/about/promise08.png"
                                alt="지구를 위한 작은 실천, 큰 변화"
                            />
                        </div>
                        <div className="text-wrap">
                            <span className="number">01</span>
                            <em className="subtitle">REDUCING WASTE</em>
                            <strong className="title">지구를 위한 작은 실천, 큰 변화</strong>
                            <p className="desc">
                                록시땅은 1976년부터 유리병 용기 반환 시스템을 도입하여 사용한 용기를
                                매장으로 다시 가져오는 활동을 시작하였습니다. 이후, 2008년에는 에코
                                리필 제품을 도입하여 플라스틱 사용을 줄이기 위한 노력을
                                이어왔습니다. 현재 록시땅은 2025년까지 3X 100% 라는 슬로건과
                                함께100% 제품 용기를 100% 재활용 플라스틱으로 전환하고 100% 모든
                                매장에서 재활용 서비스를 제공이라는 목표를 달성하기 위해 노력하고
                                있습니다.
                            </p>
                        </div>
                    </div>
                    <div className="three-x">
                        <strong>2025년까지 3X 100%</strong>
                        <ul>
                            <li>
                                <img src="/images/about/promise09.png" alt="REDUCE" />
                                <div className="text">
                                    <em>REDUCE</em>
                                    <p>
                                        에코 리필 또는 리필 스테이션을 활용해 소비자들에게 여러 번
                                        용기를 사용하도록 장려함으로써 전 세계적으로 플라스틱
                                        쓰레기를 줄이고 용기의 수명 주기를 개선할 수 있습니다.
                                    </p>
                                </div>
                            </li>
                            <li>
                                <img src="/images/about/promise10.png" alt="RECYCLE " />
                                <div className="text">
                                    <em>REDUCE</em>
                                    <p>
                                        제품의 용기를 재사용하거나 자원이 될 수 있도록
                                        재활용합니다.이를 위해 Terra Cycle 및 LOOP Industries 등
                                        선구적인 파트너사와 협업합니다.
                                    </p>
                                </div>
                            </li>
                            <li>
                                <img src="/images/about/promise11.png" alt="REACT" />
                                <div className="text">
                                    <em>REACT</em>
                                    <p>
                                        글로벌적으로 Plastic Odyssey의 지속가능한 플라스틱 사용을
                                        장려하는 브랜드의 활동을 지원하며 국내에서는 공병 프로모션,
                                        에코 캠페인을 지속해나가고 있습니다.
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>
                <section id="con3">
                    <div className="top">
                        <div className="img-wrap">
                            <img src="/images/about/promise12.png" alt="매장 방문을 통한 참여" />
                        </div>
                        <div className="text-wrap">
                            <strong>공병수거 캠페인</strong>
                            <p>
                                록시땅의 RETHINK BEAUTY 캠페인은 지구를 존중하고 지키는 것이 <br />
                                진정한 아름다움이라는 메시지를 전하는 환경 캠페인으로 <br />
                                2018년부터 꾸준히 공병수거 캠페인을 전개하여 지속가능한 자원순환
                                활동을 이어오고 있습니다.
                            </p>
                            <em>지속 가능한 내일을 만드는, 두 번째 삶을 얻은 공병들</em>
                            <p>
                                <span className="num">01</span>
                                텀블러와 에코백, 솝 트레이 등으로 재탄생해 록시땅 고객에게 새롭게
                                전달되며 자원 순환을 실천합니다.
                            </p>

                            <p>
                                <span className="num">02</span>
                                록시땅 매장 내 집기류 및 디스플레이 가구로 재탄생하여지속가능한
                                자원순환을 실천하고 있습니다.
                            </p>
                        </div>
                    </div>
                    <div className="card">
                        <ul>
                            <li>
                                <img src="/images/about/promise13.png" alt="공병수거캠페인" />
                                <strong>매장 방문을 통한 참여</strong>
                                <p>가까운 록시땅 매장에서 공병수거 캠페인에 참여하세요.</p>
                                <p className="btn">
                                    <button>매장 찾기</button>
                                </p>
                            </li>
                            <li>
                                <img
                                    src="/images/about/promise14.png"
                                    alt="온라인 채널을 통한 참여 "
                                />
                                <strong>온라인 채널을 통한 참여</strong>
                                <p>테라사이클 홈페이지에서 온라인 수거를 신청하세요.</p>
                                <p className="btn">
                                    <button>참여 신청하기</button>
                                </p>
                            </li>
                            <li>
                                <img src="/images/about/promise15.png" alt="에코리필" />
                                <strong>에코리필</strong>
                                <p>환경을 위하는 록시땅과 함께 해주세요.</p>
                                <p className="btn">
                                    <button>리필 제품 보기</button>
                                </p>
                            </li>
                        </ul>
                    </div>
                </section>
                <section id="con4">
                    {/* 2 */}
                    <div className="campain_right">
                        <div className="text-wrap">
                            <em>02</em>
                            <span>RESPECTING BIODIVERSITY</span>
                            <strong>다채로운 생명의 가치를 지키다</strong>
                            <p>
                                록시땅의 제품에 사용되는 원료들은 생물의 다양성이 존중되는 환경
                                속에서 생산됩니다. 농작물을 재배할 때 효율적인 수확을 위해 과도한
                                동일종 재배 또는 변종을 선택하는 경향은 식물의 다양성을 위협하는
                                대표적인 요소들입니다. 록시땅은 원료 생산자들과 지속적인 파트너쉽과
                                재정적 지원을 통해 생물의 다양성에 유익한 방식으로 원료들이
                                재배되도록 추적 관리하고 있습니다. 뿐만 아니라 재배 과정에 있어
                                화학적 물질 및 합성 비료 사용을 지양하는 유기농 용법을 사용한 재배를
                                통해 환경 보호에 힘쓰고 있습니다.
                            </p>
                        </div>
                        <div className="img-wrap">
                            <img
                                src="/images/about/promise16.png"
                                alt="다채로운 생명의 가치를 지키다"
                            />
                        </div>
                    </div>
                    {/* 3 */}
                    <div className="campain_left">
                        <div className="img-wrap">
                            <img
                                src="/images/about/promise17.png"
                                alt="여성의 손끝에서 피어나는 변화"
                            />
                        </div>
                        <div className="text-wrap">
                            <em>03</em>
                            <span>EMPOWERING WOMEN</span>
                            <strong>여성의 손끝에서 피어나는 변화</strong>
                            <p>
                                록시땅은 부르키나파소 여성협동조합과의 협력을 통해 직접 시어버터를
                                구입해오고 있습니다.특히 2018년에 설립한 RESIST 프로그램을 통해
                                자원을 보호하고 지속 가능한 방법으로 시어버터를 생산할 뿐만 아니라,
                                여성의 경제적인 자립을 돕고 역량을 강화해나가고 있습니다.
                            </p>
                        </div>
                    </div>
                    {/* 4 */}
                    <div className="campain_right">
                        <div className="text-wrap">
                            <em>04</em>
                            <span>SUPPORTING PRODUCERS</span>
                            <strong>정직한 손길과 함께 만든 가치</strong>
                            <p>
                                록시땅은 원료 생산자들과 깊은 유대 관계를 맺고(30년 이상 지속되고
                                있는 관계도 있습니다.) 최상의 원료를 위한 그들의 열정을 존경합니다.
                                록시땅은 2025년까지 록시땅의 주요 원재료 생산자들과의 100% 공정무역
                                협약 체결을 목표로 하고 있습니다. 이를 위해 우리는
                                생산자와의다년간의(최소 3년 이상) 비독점적 계약을 맺어 그들의
                                안정적이고 지속적인 경제 활동을 보장합니다. 또한 지속적으로 기술적
                                지원을 제공함으로써 생산자들이 더욱 친환경적이고 유기농적인 방식으로
                                원료를 생산할 수 있도록 돕습니다.
                            </p>
                        </div>
                        <div className="img-wrap">
                            <img
                                src="/images/about/promise18.png"
                                alt="정직한 손길과 함께 만든 가치"
                            />
                        </div>
                    </div>
                    {/* 5 */}
                    <div className="campain_left">
                        <div className="img-wrap">
                            <img
                                src="/images/about/promise19.png"
                                alt="장인의 손길로 완성되는 아름다움"
                            />
                        </div>
                        <div className="text-wrap">
                            <em>05</em>
                            <span>CELEBRATING CRAFTMANSHIP</span>
                            <strong>장인의 손길로 완성되는 아름다움 </strong>
                            <p>
                                록시땅에서 장인정신은 아름답고 유용한 물건을 전하는 진정한 노하우를
                                가지고 있으며 예술을 생각하고 실행하고 변형하여 창조하는 모든 과정을
                                의미합니다. 장인의 전통 기술이 서서히 사라져가고 있는 지금, 록시땅은
                                장인과의 특별한 파트너십을 개발하여 도자기, 프로방스 비누, 자수 등
                                다양한 분야의 수많은 장인들의 기술을 보존하는데 기여해오고 있습니다.
                                록시땅은 2025년까지 장인 20명의 노하우를 지원하고 이를 지속적으로
                                소비자들에게 선보일 예정입니다.
                            </p>
                        </div>
                    </div>
                    {/* 6 */}
                    <div className="campain_right">
                        <div className="text-wrap">
                            <em>06</em>
                            <span>CARING FOR SIGHTS</span>
                            <strong>소중한 눈을 위한 따뜻한 약속</strong>
                            <p>
                                전 세계 2억 8천여명의 사람들이 시각 장애로 고통받고 있습니다.
                                록시땅은 1997년부터 제품에 점자 라벨을 각인하여 시력에 대한 헌신을
                                지속해오고 있습니다. 록시땅은 2025년까지 1천 500만명의 어린이들의
                                실명 예방을 목표로 삼고 전 세계 파트너들과 함께 실명 예방을 위해
                                힘쓰고 있으며 결과적으로 2020년 1,000만명의 안과 치료 지원 목표를
                                달성했습니다. 록시땅 코리아 또한 실명 예방에 힘을 더하기 위해
                                2016년부터 후원 모금을 위한 [EYE LOVE L’OCCITANE] 캠페인을 이어오고
                                있습니다. 이와 함께 2016년부터 목표 KM 달성 시 시각 장애 예방을 위한
                                기회를 선물하는 글로벌 캠페인 [RACE FOR VISION] 에 지속적으로
                                참여하고 있습니다.
                            </p>
                        </div>
                        <div className="img-wrap">
                            <img
                                src="/images/about/promise20.png"
                                alt="소중한 눈을 위한 따뜻한 약속"
                            />
                        </div>
                    </div>
                </section>
            </div>
        </PromiseStyle>
    );
};

export default Promise;
