import { ExclusiveSetItemStyle } from './style';

const ExclusiveSetItem = ({ img, title }) => {
    return (
        <ExclusiveSetItemStyle>
            <img src={img} alt={title} />
            <p>{title}</p>
        </ExclusiveSetItemStyle>
    );
};

export default ExclusiveSetItem;
