import { PiHandbagSimple } from 'react-icons/pi';
import { IoHeart, IoHeartOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const CollectionProductItem = ({ product }) => {
    return (
        <li>
            <Link to="">
                <div className="img-wrap">
                    <img src={product.image} alt={product.title} />
                    <i>
                        <IoHeartOutline />
                        {/* <IoHeart /> */}
                    </i>
                </div>
                <div className="text-wrap">
                    <p className="product-info">
                        <strong>{product.title}</strong>
                        <span>★ {product.rating.rate}</span>
                        <em>{product.label}</em>
                    </p>
                    <p className="price-info">
                        <span>
                            {product.option[0].size}
                            {product.unit} / {product.option[0].price.toLocaleString()}원
                        </span>
                        <i>
                            <PiHandbagSimple />
                        </i>
                    </p>
                </div>
            </Link>
        </li>
    );
};

export default CollectionProductItem;
