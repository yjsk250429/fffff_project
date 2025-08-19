import PaymentWrap from '../../components/payment/PaymentWrap';
import { PaymentStyle } from './style';

const Payment = () => {
    return (
        <PaymentStyle>
            <h2>주문 / 결제</h2>
            <PaymentWrap />
        </PaymentStyle>
    );
};

export default Payment;
