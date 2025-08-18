import { useNavigate } from 'react-router-dom';
import Button from '../../ui/Button';
import { CartEmptyStyle } from './style';

const CartEmpty = () => {
    const navigate = useNavigate();
    const onGo = () => {
        navigate(`/hair`);
    };
    return (
        <CartEmptyStyle>
            <div className="inner">
                <h2>고객님의 장바구니가 비어있습니다.</h2>
                <p>
                    <Button onClick={onGo} text="쇼핑하러 가기" bgColor="#000" textColor="#fff"/>                </p>
            </div>
        </CartEmptyStyle>
    );
};

export default CartEmpty;
