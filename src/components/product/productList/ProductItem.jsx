import { Link } from 'react-router-dom';
import { PiHandbagSimple } from 'react-icons/pi';
import { IoHeart, IoHeartOutline } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../../store/modules/cartSlice';
import { wishActions } from '../../../store/modules/wishSlice';
import { ProductItemStyle } from './style';
import BestStemp from '../../../ui/BestStemp';
import { useState } from 'react';
import Modal from '../../../ui/modal';

const ProductItem = ({ product }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalText, setModalText] = useState('');
    const { carts } = useSelector((state) => state.cart);
    const { wishes } = useSelector((state) => state.wish);
    const dispatch = useDispatch();
    const { label, title, unit, image, option, rating } = product;
    const { rate, count } = rating;
    const selectedOption = option?.length > 1 ? option[1] : option?.length === 1 ? option[0] : null;

    const price = selectedOption?.price ?? '';
    const size = selectedOption?.size ?? '';

    const openModal = (text) => {
        setModalText(text); // 모달 메시지 설정
        setModalOpen(true); // 모달 열기
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    // 현재 상품이 장바구니에 있는지 확인
    const isInCart = carts.some((item) => item.id === product.id);

    // 현재 상품이 위시리스트에 있는지 확인
    const isInWishlist = wishes.some((item) => item.id === product.id);

    // 장바구니 토글 핸들러
    const handleCartToggle = (e) => {
        e.preventDefault(); // Link 클릭 막기
        if (isInCart) {
            dispatch(cartActions.removeCart(product.id)); // 장바구니에서 제거
            openModal('상품을 장바구니에서 삭제했습니다.');
        } else {
            dispatch(cartActions.addCart(product)); // 장바구니에 추가
            openModal('상품을 장바구니에 담았습니다.');
        }
    };

    // 위시리스트 토글 핸들러
    const handleWishToggle = (e) => {
        e.preventDefault(); // Link 클릭 막기
        dispatch(wishActions.toggleWish(product));
    };

    return (
        <ProductItemStyle>
            <Link to={`/product/${product.category}/${product.id}`}>
                <div className="img-wrap">
                    <img src={image} alt={title} />
                    {rate === 5 && count >= 50 ? <BestStemp className="best" /> : ''}
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
            {modalOpen && (
                <Modal
                    text={modalText}
                    onClose={closeModal}
                    showHomeButton={false}
                    showConfirmButton={true}
                />
            )}
        </ProductItemStyle>
    );
};

export default ProductItem;
