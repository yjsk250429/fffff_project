import styled from 'styled-components';

export const ButtonStyle = styled.button`
    background-color: ${(props) => props.bgColor || 'transparent'};
    color: ${(props) => props.textColor || 'var(--foundation-white-darker)'};
    width: ${(props) => props.width || '150px'};
    height: ${(props) => props.height || '42px'};
    border: none;
    border: 1px solid ${(props) => props.borderColor || 'var(--foundation-white-darker)'};
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
    border-radius: 50%;
    color: #fff;
    text-align: center;
    line-height: 18px;
    font-size: 10px;
`;

export const BreadCrumbStyle = styled.p`
    margin-bottom: 30px;
    display: flex;
    gap: 20px;
    align-items: center;

    i {
        color: var(--foundation-white-normal-hover);
        font-size: 16px;
        margin-top: 4px;
    }
    > span:first-of-type {
        color: ${(props) => props.color1 || 'var(--foundation-white-normal-hover)'};
    }
    > span:nth-of-type(2) {
        color: ${(props) => props.color2 || 'var(--foundation-white-normal-hover)'};
    }
    > span:last-of-type {
        color: ${(props) => props.color3 || 'var(--foundation-white-normal-hover)'};
    }
`;

export const SearchFormStyle = styled.form`
    margin-bottom: 30px;
    width: ${({ $width }) => $width || '400px'};
    height: 45px;
    background: var(--foundation-white-light-active);

    box-sizing: border-box;
    position: relative;
    input[type='text'] {
        width: 90%;
        height: 100%;
        padding: 15px 0 15px 15px;
        box-sizing: border-box;
        background: none;
        border: none;
        position: absolute;
        left: 0px;
        top: 50%;
        transform: translateY(-50%);
        color: var(--foundation-white-darker);
        font-family: 'Pretendard', sans-serif;
        font-size: 14px;
        font-weight: 500;
        &:focus {
            outline: none;
        }
    }
    i {
        cursor: pointer;
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-40%);
        font-size: 24px;
        color: var(--foundation-white-darker);
    }
`;
