import { PaymentProductItemStyle } from './style';

const PaymentProductItem = ({ product }) => {
    const { image, title, option, quantity, isSample, sampleImg } = product;

    // 샘플이면 size와 price 처리
    const size = isSample ? '' : option?.[0]?.size ?? '';
    const price = isSample ? 0 : option?.[0]?.price ?? 0;

    // 가격 천단위 콤마 포맷
    const formatPrice = (num) => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    return (
        <PaymentProductItemStyle>
            <div className="product-image">
                {/* 샘플이면 sampleImg 사용, 아니면 image */}
                <img src={isSample ? sampleImg : image} alt={title} />
            </div>
            <div className="product-info">
                <p className="product-name">
                    {title} {isSample && '(샘플)'}
                </p>
                {size && <p className="product-size">{size}ml</p>}
                <p className="item-price">
                    {formatPrice(price)}원 <span>/ {quantity}개</span>
                </p>
            </div>
        </PaymentProductItemStyle>
    );
};

export default PaymentProductItem;
