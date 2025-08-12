import { IoCloseOutline } from 'react-icons/io5';
import { PiMinus, PiPlus } from 'react-icons/pi';
import { WishtItemStyle } from './style';

const WishItem = () => {
    return (
        <WishtItemStyle>
            <li>
                <label className="checkbox-wrap">
                    <input type="checkbox" />
                </label>
                <div className="product-image">
                    <img src="images/item240.webp" alt="상품 이미지" />
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
                        <p>장바구니에 담기</p>
                        <p className="item-price">00,000원</p>
                    </div>
                </div>
            </li>
        </WishtItemStyle>
    );
};

export default WishItem;
