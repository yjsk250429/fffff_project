// // 개별카드
// import { useSelector } from 'react-redux';
// import { GiftItemStyle } from './style';

// const GiftItem = () => {
//     const { gifts } = useSelector((state) => state.gift);
//     const { item } = gifts;
//     const newItem = [...item];
//     const { title, price, img } = newItem;
//     return (
//         <GiftItemStyle className="gift-item">
//             <img src={img} alt={title} />
//             <strong>{title}</strong>
//             <p>{price}</p>
//         </GiftItemStyle>
//     );
// };

// export default GiftItem;
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
