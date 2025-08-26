import { GoChevronRight } from 'react-icons/go';
import Button from '../../ui/Button';
import { OrderListItemStyle } from './style';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../store/modules/cartSlice';
import { wishActions } from '../../store/modules/wishSlice';
import { useNavigate } from 'react-router-dom';

const OrderListItem = ({ item, index }) => {
    const { products } = useSelector((state) => state.product);
    const { status, title, number, price, img, itemIndex  } = item;
    const { carts } = useSelector((state) => state.cart);
    const { wishes } = useSelector((state) => state.wish);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const originalProduct = products.find((p) => p.title === title);

    const isInCart = carts.some((cart) => cart.title === title);

    const isInWishlist = wishes.some((wish) => wish.title === title);

    const handleCartToggle = (e) => {
        e.preventDefault();
        if (!originalProduct) {
            alert('상품 정보를 찾을 수 없습니다.');
            return;
        }
        if (isInCart) {
            dispatch(cartActions.removeCart(originalProduct.id));
            alert('장바구니에서 제거하였습니다.');
        } else {
            dispatch(
                cartActions.addCart({
                    ...originalProduct,
                    option: originalProduct.option,
                    _selectedOption: originalProduct.option?.[0],
                })
            );
            alert('상품을 장바구니에 담았습니다.');
        }
    };

    const handleWishToggle = (e) => {
        e.preventDefault();
        dispatch(wishActions.toggleWish(originalProduct));
    };
    const onDetail = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (!originalProduct) {
            alert('상품 정보를 찾을 수 없습니다.');
            return;
        }
        navigate(`/product/${originalProduct.category}/${originalProduct.id}`);
    };
    const onCancel = (e) => {
        e.preventDefault();
        // 배송완료는 취소 불가(시연 요건)
        if (status === '배송완료') return;
    
        // itemIndex 가 있어야 실제 결제 아이템을 정확히 지울 수 있음
        if (typeof itemIndex !== 'number') {
          alert('취소할 수 없는 항목입니다.');
          return;
        }
        dispatch(paymentActions.cancelOrderItem({ orderNo: number, itemIndex }));
        alert('주문이 취소되었습니다.');
      };
    
      const isDelivered = status === '배송완료';
    return (
        <OrderListItemStyle>
            <em>{status}</em>
            <div className="list">
                <img src={img} alt={title} />
                <div className="text-wrap">
                    <p className="num">
                        주문번호 : <span> {number}</span>
                    </p>
                    <strong>{title}</strong>
                    <p className="price">
                        {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
                    </p>
                    <p className="more" role="button" tabIndex={0} onClick={onDetail}>
                        상세보기
                        <GoChevronRight />
                    </p>
                </div>
            </div>
            <div className="btn">
            {isDelivered ? (
          <Button
            text="리뷰 작성하기"
            bgColor="#00274C"
            textColor="#fff"
            width="402px"
            height="50px"
          />
        ) : (
          <Button
            text="취소하기"
            bgColor="#fff"
            textColor="#00274C"
            width="402px"
            height="50px"
            onClick={onCancel}
          />
        )}
                <Button
                    text="장바구니 담기"
                    borderColor="#00274C"
                    textColor={isInCart ? '#fff' : '#00274C'}
                    bgColor={isInCart ? '#00274C' : ''}
                    width="402px"
                    height="50px"
                    onClick={handleCartToggle}
                />
                <Button
                    text="찜 하기"
                    borderColor="#00274C"
                    textColor={isInWishlist ? '#fff' : '#00274C'}
                    bgColor={isInWishlist ? '#00274C' : ''}
                    width="402px"
                    height={'50px'}
                    onClick={handleWishToggle}
                />
            </div>
        </OrderListItemStyle>
    );
};

export default OrderListItem;
