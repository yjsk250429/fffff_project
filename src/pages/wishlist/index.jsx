import { useSelector } from 'react-redux';
import WishEmpty from '../../components/wishlist/WishEmpty';
import WishList from '../../components/wishlist/WishList';

const Wish = () => {
    const { wishes } = useSelector((state) => state.wish);
    return <>{wishes.length > 0 ? <WishList /> : <WishEmpty />}</>;
};

export default Wish;
