import { GoChevronRight } from 'react-icons/go';
import Button from '../../ui/Button';
import { OrderListItemStyle } from './style';

const OrderListItem = ({ item, index }) => {
    const { status, title, number, price, img } = item;
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
                    <p className="price">{price}원</p>
                    <p className="more">
                        상세보기
                        <GoChevronRight />
                    </p>
                </div>
            </div>
            <div className="btn">
                <Button
                    text={index === 0 ? '취소하기' : '리뷰 작성하기'}
                    bgColor={index === 0 ? '#fff' : '#00274C'}
                    textColor={index === 0 ? '#00274C' : '#fff'}
                    width={'402px'}
                    height={'50px'}
                />
                <Button
                    text="장바구니 담기"
                    borderColor="#00274C"
                    textColor="#00274C"
                    width={'402px'}
                    height={'50px'}
                />
                <Button
                    text="찜 하기"
                    borderColor="#00274C"
                    textColor="#00274C"
                    width={'402px'}
                    height={'50px'}
                />
            </div>
        </OrderListItemStyle>
    );
};

export default OrderListItem;
