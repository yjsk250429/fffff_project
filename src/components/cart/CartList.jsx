import { CartListStyle, CartSampleStyle } from './style';
import CartItem from './CartItem';
import CartSample from './CartSample';
import { useSelector } from 'react-redux';

const CartList = () => {
    const { carts } = useSelector((state) => state.cart);
    return (
        <CartListStyle>
            <div className="cart-left">
                <div className="check-all">
                    <input type="checkbox" />
                    <span>전체</span>
                    <div className="delete-wrap">
                        <p>
                            선택 삭제<span>전체 삭제</span>
                        </p>
                    </div>
                </div>
                <ul>
                    {carts.map((cart) => (
                        <CartItem key={cart.id} cart={cart} />
                    ))}
                    {
                        // products.map((product)=> (<CartItem key={product.id} product={product}/>))
                    }
                </ul>
            </div>
            <CartSample />
        </CartListStyle>
    );
};

export default CartList;
