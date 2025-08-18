import { CartListStyle, CartSampleStyle } from './style';
import CartItem from './CartItem';
import CartSample from './CartSample';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../store/modules/cartSlice';
import { useState } from 'react';

const CartList = () => {
    const { carts, isChecked } = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const [selectedIds, setSelectedIds] = useState([]);
    // 전체 선택/해제
    const handleCheckAll = (e) => {
        if (e.target.checked) {
            setSelectedIds(carts.map((cart) => cart.id)); // 모든 id 추가
        } else {
            setSelectedIds([]); // 전부 해제
        }
    };
    return (
        <CartListStyle>
            <div className="cart-left">
                <div className="check-all">
                    <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={(e) => dispatch(cartActions.checkAll(e.target.checked))}
                    />
                    <span>전체</span>
                    <div className="delete-wrap">
                        <p>
                            선택 삭제
                            <span onClick={() => dispatch(cartActions.emptyCart())}>전체 삭제</span>
                        </p>
                    </div>
                </div>
                <ul>
                    {carts.map((cart) => (
                        <CartItem key={cart.id} cart={cart} />
                    ))}
                    {
                        // products.map((product)=> (<CartItem key={product.id} product={product}/>))
                    }
                </ul>
            </div>
            <CartSample />
        </CartListStyle>
    );
};

export default CartList;
