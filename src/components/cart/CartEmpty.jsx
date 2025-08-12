import { CartEmptyStyle } from './style';

const CartEmpty = () => {
    return (
        <CartEmptyStyle>
            <div className="inner">
                <h2>고객님의 장바구니가 비어있습니다.</h2>
                <p>
                    <button>쇼핑하러 가기</button>
                </p>
            </div>
        </CartEmptyStyle>
    );
};

export default CartEmpty;
