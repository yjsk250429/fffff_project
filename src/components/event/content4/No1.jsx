import { PiDotOutlineFill } from 'react-icons/pi';
import { No1Style } from './style';

const No1 = () => {
    return (
        <No1Style>
            <div className="text-wrap">
                <div className="title">
                    <em>01</em>
                    <span>Happy birthday!</span>
                    <strong>이달의 생일 기프트</strong>
                </div>
                <p>
                    매달 생일을 맞이한 고객님께
                    <br /> 록시땅이 준비한 미니 힐링 기프트를 선물해 드립니다!
                </p>
                <div className="desc">
                    <p>
                        <PiDotOutlineFill />
                        1개 제품 이상 구매 시 증정 및 1인 1회 한정
                    </p>
                    <p>
                        <PiDotOutlineFill />
                        1개 제품 이상 구매 시 증정
                    </p>
                    <p>
                        <PiDotOutlineFill />
                        로그인 후 제품 1개 이상 구매 시 장바구니에서 쿠폰 코드 확인 가능
                    </p>
                </div>
            </div>
            <div className="img-wrap">
                <img src="/images/event/event8.png" alt="이달의생일기프트" />
            </div>
        </No1Style>
    );
};

export default No1;
