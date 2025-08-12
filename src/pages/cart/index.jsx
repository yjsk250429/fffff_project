import CartEmpty from '../../components/cart/CartEmpty';
import CartWrap from '../../components/cart/CartWrap';

const Cart = () => {
    return (
        <>
            <CartWrap />
            <CartEmpty />
            {/* {
                    carts.length > 0 ?
                    <CartList/>:
                <CartEmpty/>
                } */}
        </>
    );
};

export default Cart;
