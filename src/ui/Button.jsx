import { ButtonStyle } from './style';

const Button = ({ text = '확인', bgColor, textColor, width, height, onClick = () => {} }) => {
    return (
        <ButtonStyle bgColor={bgColor} textColor={textColor} width={width} height={height} onClick={onClick}>
            {text}
        </ButtonStyle>
    );
};

export default Button;
