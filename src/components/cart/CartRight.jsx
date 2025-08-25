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

    const handleOrderClick = () => {
        // 체크된 아이템이 있는지 확인 (샘플 제외)
        const checkedItems = carts.filter((cart) => cart.isChecked && !cart.isSample);

        if (checkedItems.length === 0) {
            alert('주문하실 상품을 선택해주세요.');
            return;
        }

        // 선택된 상품이 있으면 기존 onGo 함수 실행
        onGo();
    };

    // 총 개수: 샘플 포함
    const totalQuantityWithSample = carts
        .filter((cart) => cart.isChecked)
        .reduce((sum, cart) => sum + (cart.quantity || 0), 0);

    const shippingFee = priceTotal > 0 && priceTotal < 50000 ? 3000 : 0;

    // 첫 구매 15% 할인
    const firstPurchaseDiscount = priceTotal * 0.15;

    // 공식몰 상시 5% 할인
    const regularDiscount = priceTotal * 0.05;

    // 총 할인
    const discountAmount = Math.round(firstPurchaseDiscount + regularDiscount);

    // 최종 결제 금액
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
                        <button onClick={handleOrderClick}>
                            {formatPrice(finalTotal)}원 주문하기
                        </button>
                    </p>
                </div>
            </div>
            <CartGift />
        </CartRightStyle>
    );
};

export default CartRight;
