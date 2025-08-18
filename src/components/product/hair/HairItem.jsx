import { Link } from 'react-router-dom';
import { PiHandbagSimple } from 'react-icons/pi';

const HairItem = ({ product }) => {
    const { id, label, title, unit, image, option, rating } = product;
    const { rate, count } = rating;
    const selectedOption = option?.length > 1 ? option[1] : option?.length === 1 ? option[0] : null;

    const price = selectedOption?.price ?? '';
    const size = selectedOption?.size ?? '';

    return (
        <article>
            <Link to={`/hair/${id}`}>
                <div className="img-wrap">
                    <img src={image} alt={title} />
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
                            {size} {unit} / {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                            원
                        </span>{' '}
                        <i>
                            <PiHandbagSimple />
                        </i>
                    </p>
                </div>
            </Link>
        </article>
    );
};

export default HairItem;
