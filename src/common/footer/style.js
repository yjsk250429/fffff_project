import styled from 'styled-components';
export const FooterStyle = styled.footer`
    border-top: 1px solid #cacaca;
    .inner {
        height: 600px;
        text-align: center;
        padding: 78px 0 50px 0;
    }
    .sns {
        display: flex;
        justify-content: center;
        margin-bottom: 43px;
        gap: 15px;
    }
    .policy {
        display: flex;
        justify-content: center;
        margin-bottom: 58px;
        gap: 24px;
        li {
            font-size: 14px;
            font-weight: 500;
            color: #333;
            position: relative;
            a {
                font-weight: 400;
            }
            &::after {
                content: '';
                display: block;
                width: 1px;
                height: 11px;
                background: #b0bcc8;
                position: absolute;
                right: -12px;
                top: 50%;
                transform: translateY(-50%);
            }
            &:last-child::after {
                display: none;
            }
        }
    }
    h1 {
        margin-bottom: 83px;
    }
    .info1 {
        display: flex;
        justify-content: center;
        margin: auto;
        width: 1000px;
        gap: 20px;
        li {
            color: #9f9f9f;
            font-size: 14px;
            position: relative;
            &::after {
                content: '';
                display: block;
                width: 1px;
                height: 11px;
                background: #b0bcc8;
                position: absolute;
                right: -12px;
                top: 50%;
                transform: translateY(-50%);
            }
            &:last-child::after {
                display: none;
            }
        }
    }
    .info2 {
        display: flex;
        justify-content: center;
        margin: auto;
        width: 1300px;
        gap: 20px;
        li {
            color: #9f9f9f;
            font-size: 14px;
            position: relative;
            &::after {
                content: '';
                display: block;
                width: 1px;
                height: 11px;
                background: #b0bcc8;
                position: absolute;
                right: -12px;
                top: 50%;
                transform: translateY(-50%);
            }
            &:last-child::after {
                display: none;
            }
        }
    }
    p {
        text-align: center;
        color: #9f9f9f;
        font-size: 14px;
    }
`;
