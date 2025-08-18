import { IoHeartOutline } from "react-icons/io5";
import { PiHandbagSimple } from "react-icons/pi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const RecommandItem = () => {
    const {products} = useSelector((state)=>state.product);
    const {id, label, title, unit, description, image, option, rating} = products;
    // const { rate, count } =rating;
    const selectedOption = option?.length > 1 
    ? option[1] 
    : option?.length === 1 
      ? option[0] 
      : null;


  const price = selectedOption?.price ?? "";
  const size = selectedOption?.size ?? "";
    return (
        <li>
            <Link to={`/hand/${id}`}>
            <div className="img-wrap">
                <img src={image} alt={title} />
            </div>
            <div className="text-wrap">
                <p className="product-info">
                    <strong>{title}</strong>
                    {/* {rate && count && */}
                        {/* <span>★ */}
                        {/* {rate.toFixed(1)} ({count}) */}
                    {/* </span>} */}
                    <em>{label}</em>
                </p>
                <p className="price-info">
                <span>
                {typeof size === "number" ? `${size} ${unit} /` : ""} {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</span>
                </p>
            </div>
            </Link>
        </li>
    );
};

export default RecommandItem;