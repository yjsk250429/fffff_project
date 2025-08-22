import styled from 'styled-components';

export const GiftMyselfStyle = styled.div`
    .inner {
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 150px;
        @media (max-width: 390px) {
            margin-top: 100px;
            width: 100%;
        }
    }
    .title {
        span {
            color: var(--Foundation-White-Dark, #a8a8a8);
            font-size: 18px;
            display: block;
        }
        strong {
            font-size: 46px;
            font-weight: 700;
            font-family: 'EB Garamond';
            line-height: 1.2;
            display: block;
            margin-bottom: 80px;
            position: relative;
            display: block;
            /* border: 1px solid #000; */
            width: 1920px;
            &::after {
                content: '';
                width: 610px;
                height: 1px;
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                left: 112px;
                /* background: var(--Foundation-White-Dark, #a8a8a8); */
                background: #000;
            }

            &::before {
                content: '';
                width: 610px;
                height: 1px;
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                right: 112px;
                /* background: var(--Foundation-White-Dark, #a8a8a8); */
                background: #000;
            }
        }
        @media (max-width: 390px) {
            width: 100%;
            text-align: center;
            span {
                display: none;
            }
            strong {
                font-size: 20px;
                max-width: 100%;
                margin: 0 auto 50px;

                &::after {
                    width: 65px;
                    left: 0;
                }
                &::before {
                    width: 65px;
                    right: 0;
                }
            }
        }
    }
    .type {
        display: flex;
        gap: 127px;
        li {
            .img-wrap {
                width: 480px;
                height: 540px;
                position: relative;
                overflow: hidden;
                img {
                    width: 100%;
                    height: 100%;
                    transition: transform 0.3s ease;
                    &:hover {
                        cursor: pointer;
                        transform: scale(1.1);
                    }
                }

                p {
                    color: #fff;
                    font-size: 50px;
                    font-weight: 600;
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%, -50%);
                    pointer-events: none;
                }
            }
        }
        @media (max-width: 390px) {
            flex-direction: column;
            gap: 20px;
            li {
                .img-wrap {
                    width: 90.7692vw;
                    height: 400px;
                }
            }
        }
    }
`;
