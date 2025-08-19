import { BadgeStyle } from './style';

const Badge = ({ text = ''}) => {
    return (
        <BadgeStyle>
            {text}
        </BadgeStyle>
    );
};

export default Badge;