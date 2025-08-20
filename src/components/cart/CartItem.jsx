import { IoCloseOutline } from 'react-icons/io5';
import { PiMinus, PiPlus } from 'react-icons/pi';
import { CartItemStyle } from './style';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/modules/cartSlice';

const CartItem = ({ cart }) => {
    const { id, image, title, quantity, option, unit, isChecked } = cart;
    const dispatch = useDispatch();

    const size = option?.[0]?.size ?? 0;
    const price = option?.[0]?.price ?? 0;
    const totalPrice = cart.itemTotal || price * quantity;

    const formatPrice = (price) => price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    // 체크박스 토글
    const handleCheck = () => {
        dispatch(cartActions.checkSelected(id));
        setTimeout(() => dispatch(cartActions.totalCart()), 0);
    };

    return (
        <CartItemStyle>
            <li>
                <label className="checkbox-wrap">
                    <input
                        type="checkbox"
                        checked={isChecked} // Redux 상태 기반
                        onChange={handleCheck}
                    />
                </label>
                <div className="product-image">
                    <img src={image} alt={title} />
                </div>
                <div className="product-info">
                    <p className="product-name">
                        {title}
                        <i
                            onClick={() => {
                                dispatch(cartActions.removeCart(id)); // 항목 삭제
                                dispatch(cartActions.totalCart());
                            }}
                        >
                            <IoCloseOutline />
                        </i>
                    </p>
                    <p className="product-size">
                        {size}
                        {unit}
                    </p>
                    <div className="quantity-control">
                        <p
                            className="btn minus"
                            onClick={() => {
                                dispatch(cartActions.decreaseQuantity(id));
                                dispatch(cartActions.totalCart());
                            }}
                        >
                            <PiMinus />
                        </p>
                        <strong className="quantity">{quantity}</strong>
                        <p
                            className="btn plus"
                            onClick={() => {
                                dispatch(cartActions.increaseQuantity(id));
                                dispatch(cartActions.totalCart());
                            }}
                        >
                            <PiPlus />
                        </p>
                        <p className="item-price">{formatPrice(totalPrice)}원</p>
                    </div>
                </div>
            </li>
        </CartItemStyle>
    );
};

export default CartItem;
