import styled from 'styled-components';

export const ButtonStyle = styled.button`
    background-color: ${(props) => props.bgColor || 'transparent'};
    color: ${(props) => props.textColor || 'var(--foundation-white-darker)'};
    width: ${(props) => props.width || '150px'};
    height: ${(props) => props.height || '42px'};
    border: none;
    border: 1px solid ${(props)=> props.borderColor|| 'var(--foundation-white-darker)'};
    text-align: center;
    cursor: pointer;
    padding: 12px 20px;
    vertical-align: middle;
    font-size: 16px;
    font-family: 'Pretendard', sans-serif;
    transition: background-color 0.3s;
    &:hover {
        /* opacity: 0.9; */
    }
`;

export const InputStyle = styled.input`
    background-color: ${(props) => props.bgColor || '#fff'};
    color: ${(props) => props.textColor || '#000'};
    width: ${(props) => props.width || '200px'};
    border: 1px solid #ccc;
    padding: 10px 15px;
    font-size: 16px;
    outline: none;
    border-radius: 4px;
    box-sizing: border-box;
    transition: border 0.3s;

    &::placeholder {
        color: #aaa;
    }

    &:focus {
        border: 1px solid #666;
    }
`;

export const BadgeStyle = styled.p`
    background: var(--foundation-yellow-dark-hover);
    position: absolute;
    width: 18px;
    height: 18px;
    border-radius:50%;
    color: #fff;
    text-align: center;
    line-height: 18px;
    font-size: 10px;
`;