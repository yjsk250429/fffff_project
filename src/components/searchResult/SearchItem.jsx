import { Link } from 'react-router-dom';
import { ProductItemStyle } from '../product/productList/style';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../store/modules/cartSlice';
import { wishActions } from '../../store/modules/wishSlice';
import { IoHeart, IoHeartOutline } from 'react-icons/io5';
import { PiHandbagSimple } from 'react-icons/pi';

const SearchItem = ({ result }) => {
    const { carts } = useSelector((state) => state.cart || {});
    const { wishes } = useSelector((state) => state.wish || {});
    const dispatch = useDispatch();

    if (!result || typeof result !== 'object') return null;
    const { id, label = '', title = '', unit = '', image, option, rating, category = '' } = result;
    const rate = typeof rating?.rate === 'number' ? rating.rate : null;
    const count = typeof rating?.count === 'number' ? rating.count : null;

    const selectedOption = option?.length > 1 ? option[1] : option?.length === 1 ? option[0] : null;

    const price = selectedOption?.price ?? '';
    const size = selectedOption?.size ?? '';
    const isInCart = carts.some((item) => item.id === result.id);

    // 현재 상품이 위시리스트에 있는지 확인
    const isInWishlist = wishes.some((item) => item.id === result.id);

    // 장바구니 토글 핸들러
    const handleCartToggle = (e) => {
        e.preventDefault(); // Link 클릭 막기
        if (isInCart) {
            dispatch(cartActions.removeCart(id)); // 장바구니에서 제거
        } else {
            dispatch(cartActions.addCart(result)); // 장바구니에 추가
        }
    };

    // 위시리스트 토글 핸들러
    const handleWishToggle = (e) => {
        e.preventDefault(); // Link 클릭 막기
        dispatch(wishActions.toggleWish(result));
    };
    if (id == null || !category) return null;

    return (
        <ProductItemStyle>
            <Link to={`/product/${category}/${id}`}>
                <div className="img-wrap">
                    <img src={image} alt={title} />
                    <i onClick={handleWishToggle} className={isInWishlist ? 'active' : ''}>
                        {isInWishlist ? <IoHeart /> : <IoHeartOutline />}
                    </i>
                </div>
                <div className="text-wrap">
                    <p className="product-info">
                        <strong>{title}</strong>
                        {rate && count && (
                            <span>
                                ★{rate.toFixed(1)} ({count})
                            </span>
                        )}
                        <em>{label}</em>
                    </p>
                    <p className="price-info">
                        <span>
                            {typeof size === 'number' && `${size} ${unit} /`}{' '}
                            {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
                        </span>
                        <i onClick={handleCartToggle} className={isInCart ? 'active' : ''}>
                            <PiHandbagSimple />
                        </i>
                    </p>
                </div>
            </Link>
        </ProductItemStyle>
    );
};

export default SearchItem;
