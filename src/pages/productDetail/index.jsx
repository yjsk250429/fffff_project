import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
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

const ProductDetail = () => {
    const { productID } = useParams();
    const { products } = useSelector((state) => state.product);
    const dispatch = useDispatch();
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
    return (
        <ProductDetailStyle>
            <div className="inner">
                <div className="img-wrap">
                    <img src={`/images/products/item${id}.webp`} alt={title} />
                </div>
                <div className="right">
                    <div className="detail">
                        <SearchForm/>
                        <em>{label}</em>
                        <h2>{title}</h2>
                        <strong>
                        {formatPrice(selectedOption?.price)}원
                        </strong>
                        <span>용량</span>
                        <ul className="size">
                            {option.map((opt, i) => (
                                <li key={opt.id}
                                className={i === selectedIdx ? 'on' : ''}
                            onClick={() => setSelectedIdx(i)}>
                                    {opt.size}
                                    {unit}
                                </li>
                            ))}
                        </ul>
                        <span>{description}</span>

                        <p>
                            <i onClick={handleWishToggle} className={isInWishlist ? 'active' : ''}>
                            {isInWishlist ? <IoHeart /> : <IoHeartOutline />}
                            </i>
                            <Button onClick={handleCartToggle} className={isInCart ? 'active' : ''} text="장바구니" width="340px" height="60px" textColor={isInCart? "#dcdcdc":"#000"} bgColor={isInCart ? 'var(--foundation-yellow-dark-hover)' : ''}/>
                            <Button
                                text="구매하기"
                                bgColor="#000"
                                textColor="#fff"
                                width="340px"
                                height="60px"
                            />
                        </p>
                        <ul className="tabs">
                            <li className="on">제품설명</li>
                            <li>원료</li>
                            <li>리뷰</li>
                            <li>추천제품</li>
                        </ul>
                    </div>
                    <div className="scrollZone">
                        <Description />
                        <Ingredient thisItem={thisItem} />
                    </div>
                </div>
            </div>
            <RecommandList thisItem={thisItem} />
            <Reivew/>
        </ProductDetailStyle>
    );
};

export default ProductDetail;
