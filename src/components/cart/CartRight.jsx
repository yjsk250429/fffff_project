import { CartRightStyle } from './style';

const CartRight = () => {
    return (
        <CartRightStyle className="cart-right">
            <h3>결제 정보</h3>
            <strong>
                총 결제 금액<span>price원</span>
            </strong>
            <p>
                상품 금액<span>price원</span>
            </p>
            <p>
                배송비<span>price원</span>
            </p>
            <p>
                할인 금액<span>price원</span>
            </p>
            <div className="button-wrap">
                <p>
                    <button>총 totalCount개</button>
                </p>
                <p>
                    <button>price원 주문하기</button>
                </p>
            </div>
        </CartRightStyle>
    );
};

export default CartRight;
