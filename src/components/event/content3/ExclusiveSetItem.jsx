import { ExclusiveSetItemStyle } from './style';
import { Link } from 'react-router-dom';

const ExclusiveSetItem = ({ img, title, path }) => {
    return (
        <ExclusiveSetItemStyle>
            <Link to={path}>
                <img src={img} alt={title} />
                <p>{title}</p>
            </Link>
        </ExclusiveSetItemStyle>
    );
};

export default ExclusiveSetItem;
