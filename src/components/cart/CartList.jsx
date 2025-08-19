import { CartListStyle } from './style';
import CartItem from './CartItem';
import CartSample from './CartSample';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../store/modules/cartSlice';
import { useEffect } from 'react';

const CartList = () => {
    const { carts, isChecked } = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(cartActions.totalCart());
    }, [carts, dispatch]);

    const handleCheckAll = (e) => {
        dispatch(cartActions.checkAll(e.target.checked));
        setTimeout(() => dispatch(cartActions.totalCart()), 0);
    };

    const handleEmptyCart = () => {
        dispatch(cartActions.emptyCart());
        setTimeout(() => dispatch(cartActions.totalCart()), 0);
    };

    const handleDeleteSelected = () => {
        dispatch(cartActions.removeSelected());
        setTimeout(() => dispatch(cartActions.totalCart()), 0);
    };

    return (
        <CartListStyle>
            <div className="cart-left">
                <div className="check-all">
                    <input type="checkbox" checked={isChecked} onChange={handleCheckAll} />
                    <span>전체</span>
                    <div className="delete-wrap">
                        <p onClick={handleDeleteSelected}>선택 삭제</p>
                        <p onClick={handleEmptyCart}>전체 삭제</p>
                    </div>
                </div>
                <ul>
                    {carts.map((cart) => (
                        <CartItem key={cart.id} cart={cart} />
                    ))}
                </ul>
            </div>
            <CartSample />
        </CartListStyle>
    );
};

export default CartList;
