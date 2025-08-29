import { useNavigate } from 'react-router-dom';
import { ButtonStyle } from './style';

const Button = ({
    text = '확인',
    bgColor,
    textColor,
    width,
    height,
    borderColor,
    onClick = () => {},
    className,
}) => {
    return (
        <ButtonStyle
            className={className}
            bgColor={bgColor}
            textColor={textColor}
            width={width}
            height={height}
            borderColor={borderColor}
            onClick={onClick}
        >
            {text}
        </ButtonStyle>
    );
};

export default Button;
