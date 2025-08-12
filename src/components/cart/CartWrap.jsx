import { CartWrapStyle } from './style';
import CartRight from './CartRight';
import CartList from './CartList';

const CartWrap = () => {
    return (
        <CartWrapStyle>
            <div className="inner">
                <h2>장바구니</h2>

                {/* 슬라이스 연동 
                로그인 돼있으면 안보이고, 안돼있으면 보이기 */}
                <div className="login-info">
                    <strong>
                        <img src="/images/loginguide.png" alt="로그인하기" />
                        로그인 후 더 많은 혜택을 누려보세요.
                    </strong>
                    <em>
                        <img src="/images/info.png" alt="알림" />
                        로그인을 하시면 장바구니에 담긴 상품을 나중에도 확인하실 수 있습니다.
                    </em>
                </div>

                <div className="first wrap">
                    <CartList />
                    <CartRight />
                </div>
            </div>
        </CartWrapStyle>
    );
};

export default CartWrap;
