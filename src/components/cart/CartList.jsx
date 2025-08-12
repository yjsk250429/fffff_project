import { CartListStyle } from './style';
import CartRight from './CartRight';

const CartList = () => {
    return (
        <CartListStyle>
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
                    <div className="cart-left">
                        <label className="check-all">
                            <input type="checkbox" />
                            <span>전체</span> {/* 텍스트는 span으로 분리 권장 */}
                            <div className="delete-wrap">
                                <p>
                                    선택 삭제<span>전체 삭제</span>
                                </p>
                            </div>
                        </label>
                        <ul className="cart-item">
                            {
                                // products.map((product)=> (<li key={product.id} product={product}></li>))
                            }
                        </ul>
                    </div>
                    <CartRight />
                </div>
                <div className="sample-left"></div>
                <div className="gift-right"></div>
            </div>
        </CartListStyle>
    );
};

export default CartList;
