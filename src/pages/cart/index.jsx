import CartEmpty from '../../components/cart/CartEmpty';
import CartList from '../../components/cart/CartList';

const Cart = () => {
    return (
        <>
            <CartList />
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
