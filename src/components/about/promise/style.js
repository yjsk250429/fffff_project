import styled from 'styled-components';

export const PromiseStyle = styled.article`
overflow:hidden;
    .inner {
        #con1 {
            background: var(--sub, #00274c);
            width: 100vw;
            margin-left: calc(-50vw + 50%);
            height: 1000px;
            display: flex;
            align-items: center;
            justify-content: center;
            ul {
                display: flex;
                flex-wrap: wrap;
                width: 1180px;
                gap: 50px;
                li {
                    position: relative;
                    display: inline-block;
                    cursor: pointer;
                    .img-wrap {
                        position: relative;
                        display: block;
                        width: 100%;
                        height: auto;
                    }
                    img {
                        display: block;
                        width: 100%;
                        height: auto;
                    }
                    .overlay {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        background: rgba(0, 0, 0, 0.7);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        opacity: 0;
                        transition: opacity 0.3s ease;
                        p {
                            color: var(--w);
                            font-size: 16px;
                            font-weight: 700;
                            text-align: center;
                            font-family: 'EB Garamond';
                        }
                    }
                    &:hover .overlay {
                        opacity: 1;
                    }
                }
            }
        }
        #con2 {
            width: 100vw;
            margin-left: calc(-50vw + 50%);
            margin-top: 100px;
            .top {
                display: flex;

                .img-wrap {
                    margin-right: 80px;
                    img {
                    }
                }
                .text-wrap {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;

                    .number {
                        display: block;
                        color: #00274c;
                        font-weight: 700;
                        font-size: 50px;
                    }
                    .subtitle {
                        font-family: 'EB Garamond';
                        font-size: 26px;
                        font-weight: 500;
                        display: block;
                    }
                    .title {
                        font-size: 40px;
                        font-weight: 700;
                        margin-bottom: 130px;
                        display: block;
                    }
                    .desc {
                        color: var(--Foundation-White-Darker, #4e4e4e);
                        font-size: 20px;
                        line-height: 35px;
                        width: 730px;
                    }
                }
            }
            .three-x {
                strong {
                    text-align: center;
                    display: block;
                    font-size: 40px;
                    font-weight: 700;
                    margin-top: 100px;
                }
                ul {
                    display: flex;
                    gap: 60px;
                    justify-content: center;
                    margin-bottom: 240px;
                    li {
                        display: flex;
                        flex-direction: column;
                        width: 380px;
                        margin-top: 64px;
                        border: 1px solid #e0e0e0;
                    }
                    .text {
                        width: 280px;
                        display: flex;
                        flex-direction: column;
                        height: 300px;
                        margin: auto;
                        em {
                            margin-top: 50px;
                            text-align: start;
                            font-size: 26px;
                            font-weight: 700;
                            color: #00274c;
                        }
                        p {
                            margin-top: 20px;
                            color: var(--Foundation-White-Darker, #4e4e4e);
                        }
                    }
                }
            }
        }
        #con3 {
            .top {
                display: flex;
                gap: 50px;
                justify-content: center;
                .img-wrap {
                    margin-bottom: 100px;
                }
                .text-wrap {
                    strong {
                        font-size: 40px;
                        font-weight: 700;
                        color: #594600;
                        display: block;
                        margin-bottom: 20px;
                    }
                    p {
                        font-size: 18px;
                        line-height: 35px;
                        margin-bottom: 35px;
                        .num {
                            font-size: 24px;
                            font-weight: 700;
                            color: var(--Foundation-White-Darker, #4e4e4e);
                            margin-right: 10px;
                        }
                        &:nth-of-type(2),
                        &:nth-of-type(3) {
                            margin-bottom: 15px;
                            font-size: 20px;
                        }
                    }
                    em {
                        color: #594600;
                        font-size: 24px;
                        font-weight: 700;
                        line-height: 35px;
                        display: block;
                        margin-bottom: 15px;
                    }
                }
            }
            .card {
                ul {
                    display: flex;
                    gap: 117px;
                    margin-bottom: 220px;
                    li {
                        width: 474px;
                        height: 595px;
                        border: 1px solid #e0e0e0;
                        box-sizing: border-box;
                        display: flex;
                        flex-direction: column;
                        text-align: center;
                        align-items: center;
                        justify-content: center;
                        margin: auto;
                        gap: 20px;
                        img {
                            width: 312px;
                        }
                        strong {
                            font-size: 30px;
                            font-weight: 600;
                        }
                        p {
                            color: var(--Foundation-White-Darker, #4e4e4e);
                        }
                        .btn {
                            button {
                                width: 218px;
                                height: 52px;
                                background: #000;
                                color: var(--w);
                                border: none;
                            }
                        }
                    }
                }
            }
        }
        #con4 {
            width: 100vw;
            margin-left: calc(-50vw + 50%);
            em {
                color: #00274c;
                font-size: 50px;
                font-weight: 700;
                display: block;
            }
            span {
                font-family: 'EB Garamond';
                font-size: 26px;
                font-weight: 500;
                display: block;
            }
            strong {
                margin-top: 10px;
                display: block;
                font-size: 40px;
                font-weight: 700;
            }
            p {
                margin-top: 110px;
                font-size: 20px;
                line-height: 35px;
                color: var(--Foundation-White-Darker, #4e4e4e);
            }

            .campain_right {
                margin-bottom: 196px;
                display: flex;
                gap: 78px;
                align-items: center;
                justify-content: end;
                .text-wrap {
                    width: 732px;
                }
                .img-wrap {
                }
            }
            .campain_left {
                margin-bottom: 196px;
                display: flex;
                gap: 78px;
                align-items: center;
                .text-wrap {
                    width: 732px;
                }
            }
        }
    }
`;
