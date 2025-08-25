import { IoCloseOutline } from 'react-icons/io5';
import { PiMinus, PiPlus } from 'react-icons/pi';
import { WishtItemStyle } from './style';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { cartActions } from '../../store/modules/cartSlice';
import { wishActions } from '../../store/modules/wishSlice';

const WishItem = ({ wish }) => {
    const { id, image, title, quantity, option, unit, isChecked } = wish;
    const navigate = useNavigate();
    const onGo = () => {
        navigate(`/cart`);
    };

    // option 배열에서 size와 price 안전하게 추출
    const size = option && option[0] ? option[0].size : 0;
    const price = option && option[0] ? option[0].price : 0;

    const dispatch = useDispatch();

    // 가격 포맷팅 함수
    const formatPrice = (price) => {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    };

    // 찜 목록에서 제거 핸들러 (변경됨)
    const handleRemove = () => {
        dispatch(wishActions.removeWish(id)); // wishActions 사용
    };

    return (
        <WishtItemStyle>
            <li>
                <label className="checkbox-wrap">
                    <input
                        type="checkbox"
                        checked={isChecked ?? true}
                        onChange={() => {
                            dispatch(wishActions.toggleCheck(id)); // wishActions 사용
                        }}
                    />
                </label>
                <div className="product-image">
                    <img src={image} alt={title} />
                </div>

                <div className="product-info">
                    <p className="product-name">
                        {title}
                        <i
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation(); // 이벤트 버블링 방지
                                handleRemove();
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
                            className="btn"
                            onClick={() => {
                                if (!isChecked) return;
                                dispatch(cartActions.addCart(wish));
                                dispatch(cartActions.totalCart());
                                onGo();
                            }}
                        >
                            장바구니에 담기
                        </p>
                        <p className="item-price">{formatPrice(price)}원</p>
                    </div>
                </div>
            </li>
        </WishtItemStyle>
    );
};

export default WishItem;
