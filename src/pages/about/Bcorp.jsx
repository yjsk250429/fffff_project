import { Link } from 'react-router-dom';
import { Bcorp_VisualStyle, BcorpStyle, TabBarStyle } from '../../components/about/style';

const Bcorp = () => {
    return (
        <BcorpStyle>
            <Bcorp_VisualStyle>
                <div className="visual"></div>
            </Bcorp_VisualStyle>
            <TabBarStyle className="tabBar">
                <li>
                    <Link to="/about/intro">브랜드 소개</Link>
                </li>
                <li>
                    <Link to="/about/promise">록시땅의 약속</Link>
                </li>
                <li className="on">
                    <Link to="/about/bcorp">Bcorp</Link>
                </li>
            </TabBarStyle>
            <div className="inner">
                <section id="con1">
                    <strong>Proud to be B Corp</strong>
                    <p>
                        록시땅은 투명하고 공정한 기업 경영 방식을 통해
                        <br />
                        지속가능한 경제를 위하여 기여하고 있습니다.
                    </p>
                </section>
                <section id="con2">
                    <video src="/images/BcropVideo.mp4" autoPlay muted loop playsInline></video>
                </section>
                <section id="con3">
                    <div className="left">
                        <div className="text-wrap">
                            <strong>
                                One Part of a whole <br />
                                전체의 일부
                            </strong>
                            <p>
                                기업 활동으로 선한 영향력을 만드는 것은 록시땅의 오랜 비전이자, 기업
                                운영 전반에 반영되어 있습니다. <br />
                                우리는 B Corp 인증 제도에 동의하고, 이를 통하여 비즈니스를 선의의
                                힘으로 활용하고자 합니다.
                            </p>
                            <p>
                                록시땅은 사람과 지구에 긍정적인 영향을 미치기 위해 네 가지 핵심
                                요소에 집중합니다.
                                <br />
                                자연을 성장시키고 그 경이로움을 드러내며 창조하고 지역적으로
                                행동하여 <br />전 세계적인 변화를 만들기 위하여 노력하고 있습니다.
                            </p>
                        </div>
                        <div className="img-wrap">
                            <img src="/images/about/Bcrop03.png" alt="One Part of a whole" />
                        </div>
                    </div>
                    <div className="right">
                        <div className="img-wrap">
                            <img src="/images/about/Bcrop04.png" alt="What is B Corp?" />
                        </div>
                        <div className="text-wrap">
                            <strong>What is B Corp?</strong>
                            <p>
                                비콥은 전 세계적으로 객관적인 인정을 받은 인증 제도로, 5개 영역인
                                지배 구조, 기업 구성원, 고객, 지역사회, 환경 분야에서의 성과에 대해
                                엄격한 평가 기준을 적용합니다. <br />
                                기업은 이에이어 상세한 증거자료를 제출해야 하며, 평가 기업의사규를
                                변경해야 합니다. <br />
                            </p>
                            <p>
                                재무적 성과와 사회적 성과를 균형 있게 추구하며 비즈니스를 통해 더
                                나은 사회를 구축하고자 하는 기업에게 부여되는 인증이자 기업들이 더
                                공정하고 포용적이며 지속 가능한 경제를 추구하는 강력한 도구입니다.
                            </p>
                            <p>
                                록시땅은 비콥인증을 얻는 것 이상으로, 기업 운영을 통해 선한 영향력을
                                만들고자 하는 공통된 가치를 공유하는 6,000개의 기업이 함께하는
                                지속가능성을 위한 움직임입니다. <br />
                                우리 사회와 환경을 위해 계속 개선하고, 지속 가능한 경제를 위한
                                록시땅의 발걸음입니다.
                            </p>
                        </div>
                    </div>
                </section>
                <section id="con4">
                    <strong>우리가 더 나아가는 세 가지 영역</strong>
                    <p>
                        우리는 공동체와 긴밀한 협력을 통한 공정무역 파트너쉽, 환경보호에 대한 노력,
                        <br />
                        그리고 모든 이해관계자의 지원을 통한 활동 방식의 변화와 영향을 모두 고려하여
                        <br />
                        모든 영역에서 긍정적인 가치 창출을 이루어 냈습니다.
                    </p>
                    <ul>
                        <li>
                            <img src="/images/about/Bcrop05.png" alt="SUPPORTING OURPRODUCERS" />
                            <strong className="title">
                                SUPPORTING OUR <br /> PRODUCERS
                            </strong>
                            <p className="desc">
                                록시땅은 함께 오래 공존하고 상생할 수 있는 <br />
                                지속 가능한 방식을 고집합니다.
                            </p>
                            <p className="desc">
                                생산자와의 공정한 관계를 통해 사람을 우선시하고
                                <br />
                                소규모 농업 비즈니스의 경제적 안정을 보장합니다.
                            </p>
                        </li>
                        <li>
                            <img
                                src="/images/about/Bcrop06.png"
                                alt="REDUCING OURENVIRONMENTAL IMPACT"
                            />
                            <strong className="title">
                                REDUCING OUR <br /> ENVIRONMENTAL IMPACT
                            </strong>
                            <p className="desc">
                                록시땅은 환경에 미치는 영향을 줄이기 위해
                                <br /> 폐기물을 최소화하는 것을 목표로 잡고 있습니다.
                            </p>
                            <p className="desc">
                                전 세계 매장에서 진행하는 "Reduce, Recycle,
                                <br /> React" 프로그램을 통한 플라스틱 줄이기 캠페인과 록시땅의
                                제품이 만들어지는 프랑스 공장에서 시행하는 폐기물 감축 조치를 통해
                                환경을 위한
                                <br /> 노력을 이어 나가고 있습니다.
                            </p>
                        </li>
                        <li>
                            <img
                                src="/images/about/Bcrop07.png"
                                alt="CULTIVATING CHANGE FOR PEOPLE"
                            />
                            <strong className="title">
                                CULTIVATING <br />
                                CHANGE FOR PEOPLE
                            </strong>
                            <p className="desc">
                                "가장 중요한 것은 사람과 자연이다.”
                                <br />
                                우리의 철학은 변함없이 유지되고 있습니다.
                            </p>
                            <p className="desc">
                                우리는 우리 이해관계 속에 있는 각각의 개인을
                                <br />
                                존중합니다. 그리고 이러한 신념을 지키기 위해 <br />
                                우리 록시땅 구성원들의 헌신적인 노력으로
                                <br /> 유지하고 있습니다.
                            </p>
                        </li>
                    </ul>
                </section>
            </div>
        </BcorpStyle>
    );
};

export default Bcorp;
