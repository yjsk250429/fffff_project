import { PiDotOutlineFill } from 'react-icons/pi';
import { No1Style } from './style';

const No3 = () => {
    return (
        <No1Style>
            <div className="text-wrap">
                <div className="title">
                    <em>03</em>
                    <span>Refill Discount</span>
                    <strong>리필 할인 프로모션</strong>
                </div>
                <p>
                    공식몰 단독 리필 프로모션으로 지구를 위한
                    <br /> 작은 실천을 시작해보세요.
                </p>
                <div className="desc">
                    <p>
                        <PiDotOutlineFill />
                        2개 구매 시 15% / 3개 구매 시 20% 할인
                    </p>
                    <p>
                        <PiDotOutlineFill />
                        쿠폰코드 RFLOVE (쿠폰코드 입력 시 혜택 적용)
                    </p>
                    <p>
                        <PiDotOutlineFill />
                        상시 5% 할인 중복 적용 기준
                    </p>
                    <p>
                        <PiDotOutlineFill />타 프로모션과 중복 적용 불가
                    </p>
                </div>
            </div>
            <div className="img-wrap">
                <img src="/images/event/event10.png" alt="이달의생일기프트" />
            </div>
        </No1Style>
    );
};

export default No3;
