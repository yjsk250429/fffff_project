import { PaymentProductItemStyle } from './style';

export const PaymentProductItem = () => {
    return (
        <PaymentProductItemStyle>
            <div className="product-image">
                <img src="/images/products/item200.webp" alt="" />
            </div>
            <div className="product-info">
                <p className="product-name">시어 라이트 컴포팅 크림</p>
                <p className="product-size">50ml</p>
                <p className="item-price">
                    00,000원 <span>/ 1개</span>
                </p>
            </div>
        </PaymentProductItemStyle>
    );
};

export default PaymentProductItem;
