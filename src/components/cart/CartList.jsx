import { CartListStyle } from './style';
import CartItem from './CartItem';
import CartSample from './CartSample';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../store/modules/cartSlice';
import { useEffect } from 'react';

const CartList = () => {
    const { carts } = useSelector((state) => state.cart); // Redux 상태 조회
    const dispatch = useDispatch();

    // carts 변경 시 총 합계 계산
    useEffect(() => {
        dispatch(cartActions.totalCart());
    }, [carts, dispatch]);

    // 전체 체크 상태는 carts 상태로부터 계산
    const allChecked = carts.length > 0 && carts.every((cart) => cart.isChecked);

    // 전체 체크박스 토글
    const handleCheckAll = (e) => {
        dispatch(cartActions.checkAll(e.target.checked));
        // 체크 후 총 합계 계산
        setTimeout(() => dispatch(cartActions.totalCart()), 0);
    };

    // 장바구니 전체 삭제
    const handleEmptyCart = () => {
        dispatch(cartActions.emptyCart());
        setTimeout(() => dispatch(cartActions.totalCart()), 0);
    };

    // 선택된 항목 삭제
    const handleDeleteSelected = () => {
        dispatch(cartActions.removeSelected());
        setTimeout(() => dispatch(cartActions.totalCart()), 0);
    };

    return (
        <CartListStyle>
            <div className="cart-left">
                <div className="check-all">
                    <input
                        type="checkbox"
                        checked={allChecked} //  전체 체크 상태는 계산된 값 사용
                        onChange={handleCheckAll}
                    />
                    <span>전체</span>
                    <div className="delete-wrap">
                        <p onClick={handleDeleteSelected}>선택 삭제</p>
                        <p onClick={handleEmptyCart}>전체 삭제</p>
                    </div>
                </div>
                <ul>
                    {carts
                        .filter((cart) => !cart.isSample) // 샘플 제외
                        .map((cart) => (
                            <CartItem key={cart.id} cart={cart} />
                        ))}
                </ul>
            </div>
            <CartSample />
        </CartListStyle>
    );
};

export default CartList;
