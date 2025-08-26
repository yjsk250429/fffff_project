import { OrderStatusStyle } from './style';
import { GoChevronRight } from 'react-icons/go';
import { useSelector } from 'react-redux';

const OrderStatus = () => {
    const { authed, user } = useSelector((state) => state.auth);
    const payments = useSelector((state) => state.payment.payments);
    const loginName = (user?.name || '').trim().toLowerCase();
    const hasLogin = !!authed && !!loginName;
    const paidCount = hasLogin
        ? payments.filter(
              (p) =>
                  (p?.orderer?.name || '').trim().toLowerCase() === loginName && p.status === 'PAID'
          ).length
        : 0;

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
                        <span>{paidCount}</span>
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
                        <span>3</span>
                        배송완료
                    </p>
                </li>
            </ul>
        </OrderStatusStyle>
    );
};

export default OrderStatus;
