import { GiftItemStyle } from './style';
import { Link } from 'react-router-dom';

const GiftItem = ({ item }) => {
    const { title, name, price, img, path } = item;
    return (
        <GiftItemStyle>
            <Link to={path}>
                <img src={img} alt={name} />
                <strong>{title}</strong>
                <em>{name}</em>
                <p>{price}원</p>
            </Link>
        </GiftItemStyle>
    );
};

export default GiftItem;
