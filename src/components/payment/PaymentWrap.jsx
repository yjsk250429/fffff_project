import { PaymentWrapStyle } from './style';

const PaymentWrap = () => {
    return (
        <PaymentWrapStyle>
            <div className="payment-left"></div>
            <div className="payment-right">
                <h3>결제 정보</h3>
                <strong>
                    총 결제 금액
                    <span>000원</span>
                </strong>
                <p>
                    상품 금액
                    <span>000원</span>
                </p>
                <p>
                    배송비
                    <span>000원</span>
                </p>
                <p>
                    할인 금액
                    <span>000원</span>
                </p>
                <p>
                    첫 구매 고객 15% 할인
                    <span>-7,200원</span>
                </p>
                <p>
                    공식몰 상시 5% 할인 혜택
                    <span>-2,040원</span>
                </p>

                <div className="button-wrap">
                    <p>
                        <button>총00개</button>
                    </p>
                    <p>
                        <button>주문하기</button>
                    </p>
                </div>
            </div>
        </PaymentWrapStyle>
    );
};

export default PaymentWrap;
