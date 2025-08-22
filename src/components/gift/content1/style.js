import styled from 'styled-components';

export const BestGiftStyle = styled.div`
    .inner {
        width: 100%;
        max-width: 1920px;
        display: flex;
        gap: 144px;
        margin-top: 110px;
        justify-content: center;
        @media (max-width: 390px) {
            flex-direction: column;
            align-items: center;
            gap: 40px;
            margin-top: 57px;
            padding: 0 20px;
        }
    }
    .text-wrap {
        width: 222px;
        display: flex;
        flex-direction: column;
        margin-top: 165px;
        em {
            color: var(--Foundation-White-Darker, #4e4e4e);
            font-size: 16px;
            display: block;
        }
        strong {
            display: block;
            font-size: 46px;
            font-weight: 600;
            margin-bottom: 37px;
            line-height: 1;
        }
        p {
            color: var(--Foundation-White-Darker, #4e4e4e);
            font-size: 16px;
            line-height: 30px;
        }
        .btn {
            button {
                width: 160px;
                height: 48px;
                box-sizing: border-box;
                font-size: 18px;
                /* font-weight: 700; */
                color: #fff;
                background: var(--Foundation-Yellow-B, #000);
                border: none;
            }
        }
        @media (max-width: 390px) {
            text-align: center;
            width: 280px;
            /* width: 100%; */
            margin-top: 0;
            em {
                font-size: 14px;
                margin-bottom: 4px;
            }
            strong {
                font-size: 22px;
                margin-bottom: 5px;
            }
            p {
                font-size: 12px;
                line-height: 16px;
            }
        }
    }
    .img-wrap {
        .list {
            display: flex;
            gap: 36px;
            li {
                cursor: pointer;
                text-align: center;
                a {
                    .img {
                        width: 370px;
                        height: 495px;
                        overflow: hidden;
                        margin-bottom: 15px;
                        img {
                            transition: 0.6s;
                        }
                        &:hover {
                            img {
                                transform: scale(1.1);
                            }
                        }
                    }
                    p {
                        font-size: 20px;
                        font-weight: 500;
                    }
                }
            }
        }

        @media (max-width: 390px) {
            .list {
                gap: 6px;
                li {
                    flex: 1;

                    a {
                        .img {
                            /* width: 100%; */
                            width: 28.9744vw;
                            height: 118px;
                            margin: 0 auto;

                            img {
                                width: 100%;
                                height: 100%;
                                object-fit: cover;
                            }
                        }
                        p {
                            font-size: 8px;
                            margin-top: 10px;
                        }
                    }
                }
            }
        }
    }
`;
