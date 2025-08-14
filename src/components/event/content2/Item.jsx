import { ItemStyle } from './style';

const Item = ({ img, title, desc }) => {
    return (
        <ItemStyle>
            <img src={img} alt={title} />
            <strong>{title}</strong>
            <p>{desc}</p>
        </ItemStyle>
    );
};

export default Item;
