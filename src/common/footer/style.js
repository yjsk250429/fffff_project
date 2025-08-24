import styled from 'styled-components';
export const FooterStyle = styled.footer`
    border-top: 1px solid var(--border-footer, #cacaca);
    background: var(--bg-footer);

    .inner {
        height: 600px;
        text-align: center;
        padding: 78px 0 50px 0;
        @media (max-width: 390px) {
            height: 145px;
            width: 90.7692vw;
            margin: 28px 18px;
            padding: 50px 0 50px 0;
        }
    }
    .sns {
        display: flex;
        justify-content: center;
        margin-bottom: 43px;
        gap: 15px;
        @media (max-width: 390px) {
            position: absolute;
            top: 46px;
            right: 0;
            gap: 10px;
            justify-content: end;
            margin-bottom: 0;
            li {
                img {
                    width: 3.5897vw;
                }
            }
        }
    }
    .policy {
        display: flex;
        justify-content: center;
        margin-bottom: 58px;
        gap: 24px;
        li {
            font-size: 14px;
            font-weight: 500;
            color: var(--text-footer, #333);
            position: relative;
            a {
                font-weight: 400;
                color: var(--text-footer, #333);
            }
            &::after {
                content: '';
                display: block;
                width: 1px;
                height: 11px;
                background: var(--text-footer, #b0bcc8);
                position: absolute;
                right: -12px;
                top: 50%;
                transform: translateY(-50%);
            }
            &:last-child::after {
                display: none;
            }
        }
        @media (max-width: 390px) {
            gap: 13px;
            margin-bottom: 10px;
            justify-content: left;

            li {
                font-size: 10px;
                color: var(--Foundation-Blue-Dark, #001d39);
                font-weight: 500;
                &:nth-of-type(n + 4) {
                    display: none;
                }
                a {
                    color: var(--Foundation-Blue-Dark, #001d39);
                    font-weight: 500;
                    font-size: 10px;
                }
                &::after {
                    right: -8px;
                }
                &:nth-of-type(3)::after {
                    display: none;
                }
            }
        }
    }
    h1 {
        margin-bottom: 83px;
        @media (max-width: 390px) {
            position: absolute;
            margin-bottom: 0;
            top: 0;
            img {
                width: 51.2821vw;
            }
        }
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
        @media (max-width: 390px) {
            flex-wrap: wrap;
            display: block;
            width: 100%;
            margin-bottom: 6px;
            line-height: 0.8;
            text-align: left;
            li {
                font-size: 8px;
                display: inline;
                padding-right: 7px;
                &::after {
                    right: 3px;
                    height: 8px;
                }
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
        @media (max-width: 390px) {
            flex-wrap: wrap;
            display: block;
            width: 100%;
            line-height: 0.8;
            text-align: left;
            li {
                font-size: 8px;
                display: inline-block;
                padding-right: 7px;

                &::after {
                    right: 3px;
                    height: 8px;
                }
            }
        }
    }
    p {
        text-align: center;
        color: #9f9f9f;
        font-size: 14px;
        @media (max-width: 390px) {
            font-size: 8px;
            text-align: left;
            margin-top: 12px;
        }
    }
`;
