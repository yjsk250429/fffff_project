import { useNavigate } from 'react-router-dom';
import Button from '../../ui/Button';
import { PaymentCompleteStyle } from './style';
import { useSelector } from 'react-redux';

const PayComplete = () => {
    const { payments } = useSelector((state) => state.payment);
    const latest = payments?.[payments.length - 1];
    const { orderNo, items, address, orderer, summary, memo } = latest;
    const formatPrice = (n) => Number(n || 0).toLocaleString();

    const navigate = useNavigate();
    const onGo = () => {
        navigate('/product/skin');
    };
    return (
        <PaymentCompleteStyle>
            <div className="inner">
                <h2>주문이 완료되었습니다.</h2>
                <div className="completed-info">
                    <h3>
                        주문번호: <span>{orderNo}</span>
                    </h3>
                    <ul className="info-wrap">
                        <li>
                            <p>
                                배송지정보
                                <span>
                                    {orderer?.tel}
                                    <br />
                                    {orderer?.name}
                                    <br />({address?.zipCode}) {address?.mainAddr}{' '}
                                    {address?.detailAddr}
                                </span>
                            </p>
                        </li>
                        <li>
                            <p>
                                배송메모<span>{memo || '-'}</span>
                            </p>
                        </li>
                        <li>
                            <p>
                                배송비<span>{formatPrice(summary?.shippingFee)}원</span>
                            </p>
                        </li>
                        <li>
                            <p>
                                입금금액<span>{formatPrice(summary?.finalTotal)}</span>
                            </p>
                        </li>
                    </ul>
                </div>
                <div className="btn-wrap">
                    <Button text="주문 상세보기" width="150px" bgColor="#fff" textColor="#000" />
                    <Button
                        onClick={onGo}
                        text="쇼핑 계속하기"
                        width="150px"
                        bgColor="#000"
                        textColor="#fff"
                    />
                </div>
            </div>
        </PaymentCompleteStyle>
    );
};

export default PayComplete;
