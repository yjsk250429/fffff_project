import Button from '../../ui/Button';
import { CartEmptyStyle } from './style';

const CartEmpty = () => {
    return (
        <CartEmptyStyle>
            <div className="inner">
                <h2>고객님의 장바구니가 비어있습니다.</h2>
                <p>
                    <Button text="쇼핑하러 가기" bgColor="#000" textColor="#fff"/>
                </p>
            </div>
        </CartEmptyStyle>
    );
};

export default CartEmpty;
