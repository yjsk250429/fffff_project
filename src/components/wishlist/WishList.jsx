import { WishListStyle } from './style';
import WishItem from './WishItem';

const WishList = () => {
    return (
        <WishListStyle>
            <h2>위시리스트</h2>
            <div className="wishlist">
                <ul>
                    <WishItem />
                    {
                        // products.map((product)=> (<CartItem key={product.id} product={product}/>))
                    }
                </ul>
            </div>
        </WishListStyle>
    );
};

export default WishList;
