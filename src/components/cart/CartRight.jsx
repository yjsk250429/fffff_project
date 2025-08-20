import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CartGift from './CartGift';
import { CartRightStyle } from './style';
import { useEffect } from 'react';
import { cartActions } from '../../store/modules/cartSlice';

const CartRight = () => {
    const { carts, priceTotal } = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onGo = () => {
        navigate(`/cart/payment`);
        window.scrollTo(0, 0);
    };

    useEffect(() => {
        dispatch(cartActions.totalCart());
    }, [carts, dispatch]);

    // 총 개수: 샘플 포함
    const totalQuantityWithSample = carts
        .filter((cart) => cart.isChecked)
        .reduce((sum, cart) => sum + (cart.quantity || 0), 0);

    const shippingFee = priceTotal > 0 && priceTotal < 50000 ? 3000 : 0;
    const discountAmount = 0;
    const finalTotal = priceTotal + shippingFee - discountAmount;

    const formatPrice = (price) => price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    return (
        <CartRightStyle>
            <div className="cart-right">
                <h3>결제 정보</h3>
                <strong>
                    총 결제 금액
                    <span>{formatPrice(finalTotal)}원</span>
                </strong>
                <p>
                    상품 금액
                    <span>{formatPrice(priceTotal)}원</span>
                </p>
                <p>
                    배송비
                    <span>{formatPrice(shippingFee)}원</span>
                </p>
                <p>
                    할인 금액
                    <span>{formatPrice(discountAmount)}원</span>
                </p>
                <div className="button-wrap">
                    <p>
                        <button>총 {totalQuantityWithSample}개</button>
                    </p>
                    <p>
                        <button onClick={onGo}>{formatPrice(finalTotal)}원 주문하기</button>
                    </p>
                </div>
            </div>
            <CartGift />
        </CartRightStyle>
    );
};

export default CartRight;
