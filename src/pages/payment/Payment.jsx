import PaymentWrap from '../../components/payment/PaymentWrap';
import BreadCrumb from '../../ui/BreadCrumb';
import { PaymentStyle } from './style';

const Payment = () => {
    return (
        <PaymentStyle>
                <BreadCrumb text1='CART' text2='ORDER' text3='ORDER COMPLETE' color2="#000"/>
                <h2>주문 / 결제</h2>
            <PaymentWrap />
        </PaymentStyle>
    );
};

export default Payment;
