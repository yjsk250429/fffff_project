import styled from 'styled-components';

export const SpecialGiftStyle = styled.div`
    background: var(--Foundation-Blue-Dark, #001d39);
    height: 898px;
    text-align: center;
    background-image: url('/images/event/event_bg.png');
    background-repeat: no-repeat;
    background-position: 0% 95%;
    em {
        color: #e7e7e7;
        font-size: 20px;
        font-family: 'EB Garamond';
        display: block;
        padding-top: 160px;
    }
    strong {
        color: var(--w, #fff);
        font-size: 30px;
        font-weight: 600;
        line-height: 1;
        display: block;
        margin-top: 20px;
    }
    ul {
        display: flex;
        justify-content: center;
        margin-top: 90px;
        gap: 42px;
    }
`;
export const ItemStyle = styled.li`
    width: 353px;
    padding: 45px 0;
    background: #4e4e4e;
    background: rgba(255, 255, 255, 0.6);
    border-radius: 10px;
    cursor: pointer;
    img {
        &:hover {
            transform: scale(1.1);
            transition: 0.2s ease-in;
        }
    }
    strong {
        color: #000;
        font-size: 30px;
        font-weight: 600;
        display: block;
        margin-bottom: 15px;
    }
    p {
        white-space: pre-line;
        color: var(--Foundation-White-Darker, #4e4e4e);
        font-size: 16px;
        line-height: 24px;
        font-weight: 600;
    }
`;
