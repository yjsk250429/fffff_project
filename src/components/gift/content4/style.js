import styled from 'styled-components';

export const SheaButterStyle = styled.div`
    .inner {
        margin-top: 150px;
        .img-wrap {
            margin-top: 45px;
            margin-bottom: 170px;
            ul {
                display: flex;
                gap: 40px;
                li {
                    display: flex;
                    flex-direction: column;
                    /* border: 1px solid; */
                    gap: 76px;
                    &:nth-of-type(2) {
                        margin-top: 308px;
                    }
                    img {
                    }
                    p {
                        color: var(--Foundation-White-Dark, #a8a8a8);
                        font-size: 20px;
                        line-height: 30px;
                    }
                }
            }
        }
        @media (max-width: 390px) {
            width: 100%;
            margin-top: 50px;
            .bg {
                width: 46.1538vw;
                margin-left: 20px;
            }
            .img-wrap {
                margin-top: 33px;
                margin-bottom: 60px;
                ul {
                    gap: 8px;
                    flex-wrap: wrap;
                    justify-content: center;
                    li {
                        gap: 10px;
                        flex: 0 0 auto;
                        min-width: 100px;
                        &:nth-of-type(1) {
                            width: 28.4615vw;
                            /* height: 176px; */
                            img {
                                height: 176px;
                            }
                        }
                        &:nth-of-type(2) {
                            margin-top: 70px;
                            width: 29.2308vw;
                            img {
                                height: 105px;
                            }
                        }
                        &:nth-of-type(3) {
                            width: 28.7179vw;
                            img {
                                height: 105px;
                            }
                        }
                        img {
                        }
                        p {
                            font-size: 8px;
                            line-height: 1.6;
                            br {
                                display: none;
                            }
                        }
                    }
                }
            }
        }
    }
`;
