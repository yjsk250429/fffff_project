import { useSelector } from 'react-redux';
import { WishListStyle } from './style';
import WishItem from './WishItem';

const WishList = () => {
    const { wishes } = useSelector((state) => state.wish);
    return (
        <WishListStyle>
            <h2>위시리스트</h2>
            <div className="wishlist">
                <ul>
                    {wishes.map((wish) => (
                        <WishItem key={wish.id} wish={wish} />
                    ))}
                </ul>
            </div>
        </WishListStyle>
    );
};

export default WishList;
