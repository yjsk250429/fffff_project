import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import OrderListItem from './OrderListItem';
import { OrderListStyle } from './style';

import { selectDisplayableRowsByUser } from '../../store/modules/paymentSlice';


const normalizePaymentToRows = (payment) => {
    const rows = [];
  
    const statusMap = {
      PAID: '결제완료',
      READY: '상품준비중',
      SHIPPED: '배송중',
      DELIVERED: '배송완료',
      CANCELLED: '취소',
      REFUNDED: '환불완료',
    };
  
    const status = statusMap[payment.status] || payment.status || '결제완료';
    const number = payment.orderNo;
  
    // payment.items 가 배열이라는 가정. (장바구니 구조에 맞춰 보수적으로 접근)
    const items = Array.isArray(payment.items) ? payment.items : [];
  
    items.forEach((it, i) => {
      const title = it?.title || it?.name || '(상품명)';
      const price =
        // 옵션 가격 우선 → 기본 가격 → summary 단가 추정
        it?._selectedOption?.price ??
        it?.price ??
        it?.summary?.total ??
        0;
  
      // 이미지 결정(상품 이미지 or 옵션 이미지 or fallback)
      const img =
        it?.image ||
        it?._selectedOption?.image ||
        (it?.id ? `/images/products/item${it.id}.webp` : '/images/products/item.png');
  
      rows.push({
        id: `${number}-${i}`, // 화면용 key
        status,
        title,
        number,
        price,
        img,
      });
    });
  
    // 만약 주문에 items가 비어있으면, 주문건 단위로 1개라도 보여주고 싶다면:
    if (rows.length === 0) {
      rows.push({
        id: number,
        status,
        title: '(주문 상품 없음)',
        number,
        price: payment?.summary?.total || 0,
        img: '/images/products/item.png',
      });
    }
  
    return rows;
  };


const OrderList = () => {
     const { authed, user } = useSelector((state) => state.auth);
  const payments = useSelector((state) => state.payment.payments);
  const loginName = (user?.name || '').trim();
  const hasLogin = !!authed && !!loginName;
  const myPayments = useMemo(() => {
    if (!hasLogin) return [];
    const me = loginName.toLowerCase();
    return payments.filter((p) => (p?.orderer?.name || '').trim().toLowerCase() === me);
  }, [payments, hasLogin, loginName]);

  const rows = useSelector((s) => selectDisplayableRowsByUser(s, user?.name));
    return (
        <OrderListStyle>
            <strong>
                주문 내역<span>최근 3개월</span>
            </strong>
            <ul>
                {rows.map((item, index) => (
                    <OrderListItem key={item.id} item={item} index={index} />
                ))}
            </ul>
        </OrderListStyle>
    );
};

export default OrderList;
