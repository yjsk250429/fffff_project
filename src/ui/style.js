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
    &.modal-button1 {
        width: ${(props) => props.width || '120px'} !important;
        background-color: var(--background) !important;
        color: #000 !important;
        border: 1px solid #000 !important;
        margin-right: 10px;
    }
    &.modal-button2 {
        width: ${(props) => props.width || '120px'} !important;
        background-color: #000;
        color: #fff;
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

export const TopBtnStyle = styled.div`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: #fff;
    position: fixed;
    bottom: 40px;
    right: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    transition: opacity 0.4s ease, visibility 0.4s ease;
    z-index: 10;
    cursor: pointer;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.1);
    &.on {
        opacity: 1;
        visibility: visible;
        pointer-events: auto;
    }

    img {
        width: 100%;
        height: 100%;
    }
`;

export const BestStempStyle = styled.div`
    width: 90px;
    height: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 10px;
    top: 10px;
    @media screen and (max-width: 390px) {
        width: 50px;
        height: 50px;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`;

export const ModalStyle = styled.div`
    position: fixed;
    inset: 0; /* 전체 화면 덮기 */
    background: rgba(0, 0, 0, 0.5); /* 반투명 배경 */
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;
    .modal-box {
        width: 520px;
        padding: 60px 40px;
        box-sizing: border-box;
        margin: auto;
        background: var(--background);
        animation: ani 0.4s ease;
        .modal-li {
            font-size: 20px;
            font-weight: 600;
            text-align: center;
            margin-bottom: 30px;
            &:last-child {
                margin-bottom: 0;
            }
        }
    }

    @keyframes ani {
        from {
            opacity: 0;
            transform: translateY(-50px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
