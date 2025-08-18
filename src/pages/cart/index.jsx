import { useSelector } from 'react-redux';
import CartEmpty from '../../components/cart/CartEmpty';
import CartWrap from '../../components/cart/CartWrap';

const Cart = () => {
    const { carts } = useSelector((state) => state.cart);
    return <>{carts.length > 0 ? <CartWrap /> : <CartEmpty />}</>;
};

export default Cart;
