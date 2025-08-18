// import { IoCloseOutline } from 'react-icons/io5';
// import { PiMinus, PiPlus } from 'react-icons/pi';
// import { CartItemStyle } from './style';
// import { useDispatch, useSelector } from 'react-redux';
// import { cartActions } from '../../store/modules/cartSlice';

// const CartItem = ({ cart }) => {
//     const {
//         id,
//         image,
//         title,
//         quantity,
//         option, // 가격과 사이즈 정보
//         unit, // ml, g 등의 단위
//     } = cart;
//     const { size, price } = option[0];
//     const { carts } = useSelector((state) => state.cart);
//     const dispatch = useDispatch();
//     return (
//         <CartItemStyle>
//             <li>
//                 <label className="checkbox-wrap">
//                     <input type="checkbox" />
//                 </label>
//                 <div className="product-image">
//                     <img src={image} alt={title} />
//                 </div>

//                 <div className="product-info">
//                     <p className="product-name">
//                         {title}
//                         <i onClick={() => dispatch(cartActions.removeCart(id))}>
//                             <IoCloseOutline />
//                         </i>
//                     </p>
//                     <p className="product-size">
//                         {size}
//                         {unit}
//                     </p>
//                     <div className="quantity-control">
//                         <p className="btn minus">
//                             <i onClick={() => dispatch(cartActions.decreaseQuantity(id))}>
//                                 <PiMinus />
//                             </i>
//                         </p>
//                         <strong className="quantity">1</strong>
//                         <p className="btn plus">
//                             <i onClick={() => dispatch(cartActions.increaseQuantity(id))}>
//                                 <PiPlus />
//                             </i>
//                         </p>
//                         <p className="item-price">{price}</p>
//                     </div>
//                 </div>
//             </li>
//         </CartItemStyle>
//     );
// };

// export default CartItem;

import { IoCloseOutline } from 'react-icons/io5';
import { PiMinus, PiPlus } from 'react-icons/pi';
import { CartItemStyle } from './style';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../store/modules/cartSlice';

const CartItem = ({ cart }) => {
    const { id, image, title, quantity, option, unit } = cart;

    // option 배열에서 size와 price 안전하게 추출
    const size = option && option[0] ? option[0].size : 0;
    const price = option && option[0] ? option[0].price : 0;

    const { carts } = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    // 가격 포맷팅 함수
    const formatPrice = (price) => {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    };

    // 총 가격 계산 (itemTotal이 없을 경우 계산)
    const totalPrice = cart.itemTotal || price * quantity;

    return (
        <CartItemStyle>
            <li>
                <label className="checkbox-wrap">
                    <input type="checkbox" />
                </label>
                <div className="product-image">
                    <img src={image} alt={title} />
                </div>

                <div className="product-info">
                    <p className="product-name">
                        {title}
                        <i onClick={() => dispatch(cartActions.removeCart(id))}>
                            <IoCloseOutline />
                        </i>
                    </p>
                    <p className="product-size">
                        {size}
                        {unit}
                    </p>
                    <div className="quantity-control">
                        <p className="btn minus">
                            <i onClick={() => dispatch(cartActions.decreaseQuantity(id))}>
                                <PiMinus />
                            </i>
                        </p>
                        <strong className="quantity">{quantity}</strong>
                        <p className="btn plus">
                            <i onClick={() => dispatch(cartActions.increaseQuantity(id))}>
                                <PiPlus />
                            </i>
                        </p>
                        <p className="item-price">{formatPrice(totalPrice)}원</p>
                    </div>
                </div>
            </li>
        </CartItemStyle>
    );
};

export default CartItem;
