import { OrderStatusStyle } from './style';
import { GoChevronRight } from 'react-icons/go';

const OrderStatus = () => {
    return (
        <OrderStatusStyle>
            <div className="text-wrap">
                <strong>
                    주문 배송 현황<span>최근 3개월</span>
                </strong>
            </div>
            <ul>
                <li>
                    <p>
                        <span>1</span>
                        결제완료
                    </p>
                    <GoChevronRight />
                    <p>
                        <span>0</span>
                        상품준비
                    </p>
                    <GoChevronRight />
                    <p>
                        <span>0</span>
                        배송중
                    </p>
                    <GoChevronRight />
                    <p>
                        <span>2</span>
                        배송완료
                    </p>
                </li>
            </ul>
        </OrderStatusStyle>
    );
};

export default OrderStatus;
