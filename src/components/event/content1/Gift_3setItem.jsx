import { Gift_3setItemStyle } from './style';

const Gift_3setItem = ({ title, desc }) => {
    return (
        <Gift_3setItemStyle>
            <em>{title}</em>
            <p>
                {desc.map((text, idx) => (
                    <span key={idx}>{text}</span>
                ))}
            </p>
        </Gift_3setItemStyle>
    );
};

export default Gift_3setItem;
