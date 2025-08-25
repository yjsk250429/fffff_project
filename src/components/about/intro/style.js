import styled from 'styled-components';

export const IntroStyle = styled.article`
overflow:hidden;
    .inner {
        #con1 {
            margin-top: 175px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            text-align: center;
            align-items: center;
            position: relative;
            em {
                color: var(--point, #002274);
                display: block;
                margin-bottom: 12px;
            }
            strong {
                font-size: 30px;
                font-weight: 600;
                display: block;
                width: 100%;
                margin-bottom: 52px;
                position: relative;
                span {
                    color: var(--point, #002274);
                }
                &::after {
                    content: '';
                    width: 625px;
                    height: 1px;
                    background: #4e4e4e;
                    position: absolute;
                    right: 0;
                    top: 50%;
                    transform: translateY(-50%);
                }
                &::before {
                    content: '';
                    width: 625px;
                    height: 1px;
                    background: #4e4e4e;
                    position: absolute;
                    left: 0;
                    top: 50%;
                    transform: translateY(-50%);
                }
            }
            .desc {
                display: flex;
                flex-direction: column;
                gap: 20px;
                p {
                    font-size: 16px;
                    line-height: 22px;
                    display: flex;
                    /* margin-bottom: 20px; */
                    color: var(--Foundation-White-Darker, #4e4e4e);
                }
                margin-bottom: 175px;
            }
            .img {
                justify-content: space-between;
                display: flex;
                gap: 780px;
                position: absolute;
                bottom: 175px;
            }
        }
        #con2 {
            background-repeat: no-repeat;
            background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)),
                url('/images/about/story02.png') no-repeat center/cover;
            width: 100vw;
            height: 900px;
            max-width: none;
            margin-left: calc(-50vw + 50%);
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 280px;
            color: var(--w);
            strong {
                text-shadow: 5px 10px 5px rgba(0, 0, 0, 0.8);
                display: block;
                font-family: 'EB Garamond';
                font-size: 40px;
                font-weight: 600;
            }
            em {
                text-shadow: 5px 10px 5px rgba(0, 0, 0, 0.7);
                font-size: 22px;
                font-weight: 500;
                margin-bottom: 60px;
                display: block;
            }
            p {
                font-size: 16px;
                line-height: 25px;
                color: #e0dddd;
            }
        }
        #con3 {
            margin-bottom: 170px;
            .head {
                text-align: center;
                span {
                    color: var(--Foundation-White-Darker, #4e4e4e);
                    font-weight: 400;
                }
            }
            img {
                width: 616px;
                height: 413px;
            }
            em {
                color: var(--foundation-blue-dark-active, #001342);
                font-family: 'EB Garamond', serif;
                line-height: 35px;
                font-weight: 700;
                font-size: 100px;
            }
            span {
                color: var(--foundation-white-dark-active, #656565);
                font-family: 'EB Garamond';
                font-size: 16px;
                font-weight: 600;
                line-height: 35px;
            }
            strong {
                font-size: 40px;
                font-weight: 600;
                line-height: 35px;
            }
            .head {
                span {
                    display: block;
                    margin-top: 140px;
                }
                h3 {
                    font-size: 40px;
                    font-weight: 600;
                    font-family: 'EB Garamond';
                }
                margin-bottom: 150px;
            }
            .list {
                width: 100vw;
                max-width: none;
                margin-left: calc(-50vw + 50%);
                .story_right {
                    /* 01,03*/
                    display: flex;
                    justify-content: end;
                    gap: 210px;
                    .left {
                        position: relative;
                        margin-top: 90px;
                        /* border: 1px solid #000; */
                        width: 684px;
                        em {
                        }
                        span {
                            position: absolute;
                            top: -22px;
                            left: 125px;
                        }
                        strong {
                            margin-left: 20px;
                        }
                        p {
                            margin-top: 60px;
                            font-size: 20px;
                            line-height: 30px;
                            color: var(--foundation-white-dark-active, #656565);
                            position: relative;
                            &::after {
                                content: '';
                                width: 658px;
                                height: 1px;
                                background: #656565;
                                position: absolute;
                                left: 0;
                                top: -35px;
                            }
                        }
                    }
                    .right {
                        img {
                            margin-bottom: 130px;
                        }
                    }
                }
                .story_left {
                    /* 02,04 */
                    display: flex;
                    gap: 210px;
                    .right {
                        position: relative;
                        margin-top: 90px;
                        text-align: right;
                        /* border: 1px solid #000; */
                        width: 684px;
                        em {
                        }
                        span {
                            position: absolute;
                            top: -22px;
                            right: 125px;
                        }
                        strong {
                            margin-right: 20px;
                        }
                        p {
                            margin-top: 60px;
                            font-size: 20px;
                            line-height: 30px;
                            color: var(--foundation-white-dark-active, #656565);
                            position: relative;
                            text-align: right;
                            &::after {
                                content: '';
                                width: 658px;
                                height: 1px;
                                background: #656565;
                                position: absolute;
                                right: 0;
                                top: -35px;
                            }
                        }
                    }
                    .left {
                        img {
                            margin-bottom: 130px;
                        }
                    }
                }
            }
        }
        #con4 {
            display: flex;
            flex-direction: column;
            text-align: center;
            align-items: center;
            margin-bottom: 226px;
            strong {
                font-size: 40px;
                font-weight: 600;
                font-family: 'EB Garamond';
                margin-bottom: 72px;
            }
            ul {
                display: flex;
                gap: 60px;
                li {
                    border: 1px solid #e0e0e0;
                    padding-bottom: 52px;
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
                        background: rgba(0, 0, 0, 0.5);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        opacity: 0;
                        transition: opacity 0.3s ease;
                        p {
                            color: var(--w);
                            font-size: 24px;
                            font-weight: 700;
                        }
                    }
                    &:hover .overlay {
                        opacity: 1;
                    }
                    em {
                        display: block;
                        font-size: 20px;
                        font-weight: 700;
                        margin-top: 52px;
                        margin-bottom: 14px;
                    }
                    p {
                        color: var(--Foundation-White-Darker, #4e4e4e);
                        font-size: 16px;
                        line-height: 30px;
                        position: relative;
                        display: flex;
                        align-items: center;
                        text-align: center;
                        display: block;
                        width: 220px;
                        margin: auto;
                        svg {
                            vertical-align: middle;
                        }
                    }
                }
            }
        }
        #con5 {
            margin-bottom: 125px;
            display: flex;
            gap: 60px;
            .left {
                img {
                    width: 955px;
                }
            }
            .right {
                strong {
                    font-size: 30px;
                    font-weight: 600;
                    display: block;
                    margin-top: 70px;
                    margin-bottom: 65px;
                }
                p {
                    font-size: 18px;
                    font-weight: 500;
                    line-height: 30px;
                    color: var(--foundation-white-dark-active, #656565);
                    margin-bottom: 30px;
                }
                /* .btn {
                    margin-top: 30px;
                    button {
                        width: 215px;
                        height: 55px;
                        background: var(--sub, #00274c);
                        border: none;
                        color: var(--w);
                        font-size: 16px;
                       
                        line-height: 30px;
                    }
                } */
            }
        }
    }
`;
