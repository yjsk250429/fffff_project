import { IoCloseOutline } from 'react-icons/io5';
import { PiMinus, PiPlus } from 'react-icons/pi';
import { CartItemStyle } from './style';

const CartItem = () => {
    return (
        <CartItemStyle>
            <li>
                <label className="checkbox-wrap">
                    <input type="checkbox" />
                </label>
                <div className="product-image">
                    <img src="images/products/item240.webp" alt="상품 이미지" />
                </div>

                <div className="product-info">
                    <p className="product-name">
                        title
                        <i>
                            <IoCloseOutline />
                        </i>
                    </p>
                    <p className="product-size">size ml</p>
                    <div className="quantity-control">
                        <p className="btn minus">
                            <i>
                                <PiMinus />
                            </i>
                        </p>
                        <strong className="quantity">1</strong>
                        <p className="btn plus">
                            <i>
                                <PiPlus />
                            </i>
                        </p>
                        <p className="item-price">00,000원</p>
                    </div>
                </div>
            </li>
        </CartItemStyle>
    );
};

export default CartItem;
