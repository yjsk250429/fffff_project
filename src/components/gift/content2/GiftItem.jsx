import { GiftItemStyle } from './style';

const GiftItem = ({ item }) => {
    const { title, name, price, img } = item;
    return (
        <GiftItemStyle>
            <img src={img} alt={name} />
            <strong>{title}</strong>
            <em>{name}</em>
            <p>{price}원</p>
        </GiftItemStyle>
    );
};

export default GiftItem;
