import { SheaButterStyle } from './style';

const SheaButter = () => {
    return (
        <SheaButterStyle>
            <div>
                <div className="inner">
                    <img src="/images/gift/bg_Shea Butter.png" alt="시어버터문구" />
                    <div className="img-wrap">
                        <ul>
                            <li>
                                <img src="/images/gift/gift_con5_0.png" alt="시어버터핸드크림" />
                            </li>
                            <li>
                                <img src="/images/gift/gift_con5_1.png" alt="시어버터나무" />
                            </li>
                            <li>
                                <img src="/images/gift/gift_con5_2.png" alt="시어버터열매" />
                                <p>
                                    시어 나무가 전하는 자연의 따뜻한 마음
                                    <br /> 서아프리카의 바람 속에서 자란 시어는 땅을 살리고
                                    <br /> 생명을 품어내며, 선물이 됩니다. <br />
                                    소중한 마음, 록시땅과 함께 부드럽게 전해보세요.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </SheaButterStyle>
    );
};

export default SheaButter;
