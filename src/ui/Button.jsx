import { ButtonStyle } from './style';

const Button = ({ text = '확인', bgColor, textColor, width, height, borderColor, onClick = () => {} }) => {
    return (
        <ButtonStyle bgColor={bgColor} textColor={textColor} width={width} height={height} borderColor={borderColor} onClick={onClick}>
            {text}
        </ButtonStyle>
    );
};

export default Button;
