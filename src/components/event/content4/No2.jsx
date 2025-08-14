import { No2Style } from './style';
import { PiDotOutlineFill } from 'react-icons/pi';

const No2 = () => {
    return (
        <No2Style>
            <div className="img-wrap">
                <img src="/images/event/event9.png" alt="재구매 고객 혜택" />
            </div>
            <div className="text-wrap">
                <div className="title">
                    <span>Thank you for returning</span>
                    <strong>재구매 고객 혜택</strong>
                    <em>02</em>
                </div>
                <p>
                    공식몰에서 두 번째 구매 시<br /> 10% 할인 + 디럭스 1종을 드립니다.
                </p>
                <div className="desc">
                    <p>
                        <PiDotOutlineFill />
                        쿠폰 코드 입력 시 적용 및 1인 1회, 일부 상품 한정
                    </p>
                    <p>
                        <PiDotOutlineFill />
                        상시 5% 중복 적용 가능
                    </p>
                    <p>
                        <PiDotOutlineFill />
                        로그인 후 제품 1개 이상 구매 시 장바구니에서 쿠폰 코드 확인 가능
                    </p>
                </div>
            </div>
        </No2Style>
    );
};

export default No2;
