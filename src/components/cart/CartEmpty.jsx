<<<<<<< HEAD
import { useNavigate } from 'react-router-dom';
=======
import Button from '../../ui/Button';
>>>>>>> 8546c230613c4a70a681102f1bd0d9097669da93
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
<<<<<<< HEAD
                    <button onClick={onGo}>쇼핑하러 가기</button>
=======
                    <Button text="쇼핑하러 가기" bgColor="#000" textColor="#fff"/>
>>>>>>> 8546c230613c4a70a681102f1bd0d9097669da93
                </p>
            </div>
        </CartEmptyStyle>
    );
};

export default CartEmpty;
