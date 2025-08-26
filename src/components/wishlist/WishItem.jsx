import { IoCloseOutline } from 'react-icons/io5';
import { WishtItemStyle } from './style';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { cartActions } from '../../store/modules/cartSlice';
import { wishActions } from '../../store/modules/wishSlice';

const WishItem = ({ wish }) => {
    const { id, image, title, quantity, option, unit, isChecked } = wish;
    const { carts } = useSelector((state) => state.cart);
    const isInCart = carts.some((item) => item.id === wish.id);
    const navigate = useNavigate();
    const onGo = () => {
        navigate(`/cart`);
    };
    const handleCartToggle = (e) => {
            e.preventDefault(); // Link 클릭 막기
            if (isInCart) {
                dispatch(cartActions.removeCart(wish.id)); // 장바구니에서 제거
                alert('장바구니에서 제거하였습니다.');
            } else {
                dispatch(cartActions.addCart(wish)); // 장바구니에 추가
                alert('상품을 장바구니에 담았습니다.');
            }
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
                            className={ isInCart ?"btn active" : "btn"}
                            onClick={handleCartToggle}
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
