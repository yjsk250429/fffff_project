import { BestGiftStyle } from './style';

const BestGift = () => {
    return (
        <BestGiftStyle>
            <div className="inner">
                <div className="text-wrap">
                    <em>A Gift from the Heart</em>
                    <strong>Best Gift</strong>
                    <p>
                        사랑하는 마음을 가장 아름답게
                        <br /> 담는 방법, 향기와 감촉으로 기억될 단 하나의 선물을 지금 만나보세요.
                    </p>
                    {/* <p className="btn">
                        <button>자세히 보기</button>
                    </p> */}
                </div>
                <div className="img-wrap">
                    <ul className="list">
                        <li>
                            <img src="/images/gift/gift_con1_0.png" alt="헤어 세럼 듀오" />
                            <p className="title">헤어 세럼 듀오</p>
                        </li>
                        <li>
                            <img src="/images/gift/gift_con1_1.png" alt="아몬드 바디 듀오 리추얼" />
                            <p className="title">아몬드 바디 듀오 리추얼</p>
                        </li>
                        <li>
                            <img
                                src="/images/gift/gift_con1_2.png"
                                alt="리퀴드 솝 & 핸드 앤 바디 듀오"
                            />
                            <p className="title">리퀴드 솝 & 핸드 앤 바디 듀오</p>
                        </li>
                    </ul>
                </div>
            </div>
        </BestGiftStyle>
    );
};

export default BestGift;
