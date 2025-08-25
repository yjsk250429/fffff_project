import OrderListItem from './OrderListItem';
import { OrderListStyle } from './style';

const OrderList = () => {
    const orderData = [
        {
            id: 1,
            status: '결제완료',
            title: '시어 라이트 컴포팅 크림 50ml',
            number: '2020090519683953',
            price: 35000,
            img: '/images/products/item187.webp',
        },
        {
            id: 2,
            status: '배송완료',
            title: '로즈 핸드크림 35ml',
            number: '2020090519683953',
            price: 17000,
            img: '/images/products/item77.webp',
        },
        {
            id: 3,
            status: '배송완료',
            title: '[기프트] 시어 & 체리 핸드크림 듀오 50ml',
            number: '2020090519683953',
            price: 68000,
            img: '/images/products/item78.webp',
        },
    ];
    return (
        <OrderListStyle>
            <strong>
                주문 내역<span>최근 3개월</span>
            </strong>
            <ul>
                {orderData.map((item, index) => (
                    <OrderListItem key={item.id} item={item} index={index} />
                ))}
            </ul>
        </OrderListStyle>
    );
};

export default OrderList;
