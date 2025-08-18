import { PiHandbagSimple } from 'react-icons/pi';
import { IoHeart, IoHeartOutline } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { cartActions } from '../../store/modules/cartSlice';

const CollectionProductItem = ({ product }) => {
    const { image, title, rating, label, option, unit } = product;
    const { rate, count } = rating;
    const { carts } = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    return (
        <li>
            <Link to="">
                <div className="img-wrap">
                    <img src={image} alt={title} />
                    <i>
                        <IoHeartOutline />
                    </i>
                </div>
                <div className="text-wrap">
                    <p className="product-info">
                        <strong>{title}</strong>
                        {rate && count && <span>★ {rate.toFixed(1)}</span>}
                        <em>{label}</em>
                    </p>
                    <p className="price-info">
                        <span>
                            {option?.[0]?.size && typeof option[0].size === 'number'
                                ? `${option[0].size}${unit} / `
                                : ''}
                            {option?.[0]?.price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
                        </span>
                        <i onClick={() => dispatch(cartActions.addCart(product))}>
                            <PiHandbagSimple />
                        </i>
                    </p>
                </div>
            </Link>
        </li>
    );
};

export default CollectionProductItem;
