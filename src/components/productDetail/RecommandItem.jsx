import { IoHeart, IoHeartOutline } from "react-icons/io5";
import { PiHandbagSimple } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { cartActions } from "../../store/modules/cartSlice";
import { wishActions } from "../../store/modules/wishSlice";

const RecommandItem = ({product}) => {
 const { carts } = useSelector((state) => state.cart);
    const { wishes } = useSelector((state) => state.wish);
    const {id, category, label, title, unit, image, option, rating} = product;
    const { rate, count } = rating;
        const dispatch = useDispatch();
    
    const selectedOption = option?.length > 1 
    ? option[1] 
    : option?.length === 1 
      ? option[0] 
      : null;

  const price = selectedOption?.price ?? "";
  const size = selectedOption?.size ?? "";
      const isInCart = carts.some((item) => item.id === product.id);
  
      const isInWishlist = wishes.some((item) => item.id === product.id);
  

      const handleCartToggle = (e) => {
          e.preventDefault(); 
          if (isInCart) {
              dispatch(cartActions.removeCart(product.id)); 
          } else {
              dispatch(cartActions.addCart(product));
          }
      };
  

      const handleWishToggle = (e) => {
          e.preventDefault();
          dispatch(wishActions.toggleWish(product));
      };


    return (
        <li>
            <Link to={`/product/${category}/${id}`}>
            <div className="img-wrap">
                <img src={image} alt={title} />
                <i onClick={handleWishToggle} className={isInWishlist ? 'active' : ''}>
                    {isInWishlist ? <IoHeart /> : <IoHeartOutline />}
                </i>
            </div>
            <div className="text-wrap">
                <p className="product-info">
                    <strong>{title}</strong>
                    {rate && count && (
                            <span>
                                ★{rate.toFixed(1)} ({count})
                            </span>
                        )}
                    <em>{label}</em>
                </p>
                <p className="price-info">
                        <span>
                            {typeof size === 'number' && `${size} ${unit} /`}{' '}
                            {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
                        </span>
                        <i onClick={handleCartToggle} className={isInCart ? 'active' : ''}>
                            <PiHandbagSimple />
                        </i>
                    </p>
            </div>
            </Link>
        </li>
    );
};

export default RecommandItem;