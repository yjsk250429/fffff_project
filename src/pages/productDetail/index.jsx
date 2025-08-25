import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { ProductDetailStyle } from './style';
import Button from '../../ui/Button';
import { IoHeart, IoHeartOutline } from 'react-icons/io5';
import Description from '../../components/productDetail/Description';
import Ingredient from '../../components/productDetail/Ingredient';
import RecommandList from '../../components/productDetail/RecommandList';
import { cartActions } from '../../store/modules/cartSlice';
import { wishActions } from '../../store/modules/wishSlice';
import Reivew from '../../components/productDetail/Reivew';
import { useState, useMemo, useEffect } from 'react';
import SearchForm from '../../ui/SearchForm';
import { reviewActions } from '../../store/modules/reviewSlice';
import { useRef } from 'react';
import { searchActions } from '../../store/modules/searchSlice';

const ProductDetail = () => {
    const { productID } = useParams();
    const { products } = useSelector((state) => state.product);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    if (!products) {
        return <p>상품 데이터를 불러오는 중입니다.</p>;
    }
    const thisItem = products.find((product) => product.id === Number(productID));
    if (!thisItem) {
        return <p>해당 상품을 찾을 수 없습니다.</p>;
    }
    const { id, title, label, description, unit, option } = thisItem;

    const [selectedIdx, setSelectedIdx] = useState(0);
    useEffect(() => {
        setSelectedIdx(0);
    }, [id, option.length]);

    const selectedOption = useMemo(
        () => option?.[selectedIdx] ?? option?.[0],
        [option, selectedIdx]
    );

    const { carts } = useSelector((state) => state.cart);
    const { wishes } = useSelector((state) => state.wish);

    const isInCart = carts.some((item) => item.id === id);
    const isInWishlist = wishes.some((item) => item.id === id);

    const handleCartToggle = (e) => {
        e.preventDefault();
        if (isInCart) {
            alert('상품을 장바구니에서 삭제하였습니다.');
            dispatch(cartActions.removeCart(id));
        } else {
            alert('상품을 장바구니에 담았습니다.');
            dispatch(
                cartActions.addCart({
                    ...thisItem,
                    _selectedOption: selectedOption, // 선택 옵션 메모(필요시)
                })
            );
        }
    };

    const handleWishToggle = (e) => {
        e.preventDefault();
        dispatch(wishActions.toggleWish(thisItem));
    };

    const formatPrice = (n) => (n ?? 0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    useEffect(() => {
        dispatch(reviewActions.getReviewsByProductId(Number(productID)));
    }, [dispatch, productID]);

    const descRef = useRef(null);
    const ingrRef = useRef(null);
    const recomRef = useRef(null);
    const reviewRef = useRef(null);

    const scrollTo = (ref) => {
        if (!ref?.current) return;
        const elementTop = ref.current.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
            top: elementTop,
            behavior: 'smooth',
        });
    };
    const [text, setText] = useState('');
    const changeInput = (e) => {
        const { value } = e.target;
        setText(value);
    };
    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(searchActions.setKeyword(text));
        dispatch(searchActions.onSearch(text));
        navigate('/searchresult');
        setText('');
    };
    const onBuyNow = async (e) => {
        e.preventDefault();

        // 상품만 체크된 상태로 장바구니 저장
        await dispatch(
            cartActions.buyNow({
                ...thisItem,
                option: [selectedOption], // 필수
                isChecked: true,
            })
        );
        setTimeout(() => {
            navigate('/cart/payment');
        }, 0);
    };
    return (
        <ProductDetailStyle>
            <div className="inner">
                <div className="img-wrap">
                    <div className="sticky-img">
                        <img src={`/images/products/item${id}.webp`} alt={title} />
                    </div>
                </div>
                <div className="right">
                    <div className="detail">
                        <div className="top">
                            <SearchForm value={text} onSubmit={onSubmit} onChange={changeInput} />
                            <em>{label}</em>
                            <h2>{title}</h2>
                            <strong>{formatPrice(selectedOption?.price)}원</strong>
                            <span>용량</span>
                            <ul className="size">
                                {option.map((opt, i) => (
                                    <li
                                        key={opt.id}
                                        className={i === selectedIdx ? 'on' : ''}
                                        onClick={() => setSelectedIdx(i)}
                                    >
                                        {opt.size}
                                        {unit}
                                    </li>
                                ))}
                            </ul>
                            <span>{description}</span>

                            <p>
                                <i
                                    onClick={handleWishToggle}
                                    className={isInWishlist ? 'active' : ''}
                                >
                                    {isInWishlist ? <IoHeart /> : <IoHeartOutline />}
                                </i>
                                <Button
                                    onClick={handleCartToggle}
                                    className={isInCart ? 'active' : ''}
                                    text="장바구니"
                                    width="340px"
                                    height="60px"
                                    textColor={isInCart ? '#fff' : '#000'}
                                    bgColor={isInCart ? 'var(--foundation-yellow-dark-hover)' : ''}
                                />
                                <Button
                                    text="구매하기"
                                    bgColor="#000"
                                    textColor="#fff"
                                    width="340px"
                                    height="60px"
                                    onClick={onBuyNow}
                                />
                            </p>
                        </div>
                        <ul className="tabs">
                            <li className="on" onClick={() => scrollTo(descRef)}>
                                제품설명
                            </li>
                            <li onClick={() => scrollTo(ingrRef)}>원료</li>
                            <li onClick={() => scrollTo(recomRef)}>추천제품</li>
                            <li onClick={() => scrollTo(reviewRef)}>리뷰</li>
                        </ul>
                        <Description ref={descRef} />
                        <Ingredient ref={ingrRef} thisItem={thisItem} />
                    </div>
                </div>
            </div>
            <RecommandList ref={recomRef} thisItem={thisItem} />
            <Reivew ref={reviewRef} />
        </ProductDetailStyle>
    );
};

export default ProductDetail;
