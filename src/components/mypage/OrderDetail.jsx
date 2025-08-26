

import { useSelector } from 'react-redux';
import { PaymentCompleteStyle } from '../../pages/payment/style';
import { useParams } from 'react-router-dom';
import { selectDisplayableRowsByUser, selectPaymentByOrderNo } from '../../store/modules/paymentSlice';

const formatPrice = (n) => (n == null ? '-' : Number(n).toLocaleString());

const OrderDetail = () => {
    const { orderNo } = useParams();
    const { authed, user } = useSelector((s) => s.auth);
  
    // 1) 로그인 유저의 주문행들
    const myRows = useSelector((s) => selectDisplayableRowsByUser(s, user?.name));
    // 2) 해당 주문번호의 결제건
    const payment = useSelector((s) => selectPaymentByOrderNo(s, orderNo));

    const isMine =
    !!authed &&
    !!user?.name &&
    !!payment &&
    myRows.some((r) => r.number === orderNo);

  if (!isMine) {
        return (
            <PaymentCompleteStyle>
                <div className="inner">
                    <h2>주문내역 상세보기</h2>
                    <div className="completed-info">
                        <h3>주문 정보를 찾을 수 없습니다.</h3>
                        <p>주문번호와 주문자 성함을 확인한 후 다시 시도해 주세요.</p>
                    </div>
                </div>
            </PaymentCompleteStyle>
        );
    }
    const {
        orderer, // { name, tel }
        address, // { zipCode, mainAddr, detailAddr }
        memo,
        summary, // { shippingFee, finalTotal, ... }
    } = payment;
    return (
        <PaymentCompleteStyle>
            <div className="inner">
                <h2>주문내역 상세보기</h2>
                <div className="completed-info">
                    <h3>
                        주문번호: <span>{orderNo}</span>
                    </h3>
                    <ul className="info-wrap">
                        <li>
                            <p>배송지정보</p>
                            <p>
                                {orderer?.tel}
                                <br />
                                {orderer?.name}
                                <br />({address?.zipCode}) {address?.mainAddr} {address?.detailAddr}
                            </p>
                        </li>
                        <li>
                            <p>배송메모</p>
                            <p>{memo || '-'}</p>
                        </li>
                        <li>
                            <p>배송비</p>
                            <p>{formatPrice(summary?.shippingFee)}원</p>
                        </li>
                        <li>
                            <p>입금금액</p>
                            <p>{formatPrice(summary?.finalTotal)}원</p>
                        </li>
                    </ul>
                </div>
            </div>
        </PaymentCompleteStyle>
    );
};

export default OrderDetail;
