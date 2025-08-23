import styled from 'styled-components';

export const DailyMomentsStyle = styled.div`
    .inner {
        height: 1230px;
        padding: 150px 0;
    }
    h2 {
        text-align: center;
        position: relative;
        &::after,
        &::before {
            content: '';
            display: block;
            position: absolute;
            width: 504px;
            height: 1px;
            background: var(--foundation-blue-darker);
            top: 50%;
            transform: translateY(-50%);
        }
        &::before {
            left: 0;
        }
        &::after {
            right: 0;
        }
        span {
            font-weight: 400;
        }
    }
    em {
        display: block;
        text-align: center;
        margin-top: 10px;
        margin-bottom: 70px;
        font-size: 22px;
    }
    .insta-wrap {
        ul {
            display: flex;
            gap: 20px;
            justify-content: center;
            align-items: top;
            li {
                &:nth-child(odd) {
                    .img-wrap {
                        height: 470px;
                    }
                }
                &:nth-child(even) {
                    .img-wrap {
                        height: 380px;
                        img {
                            height: 100%;
                        }
                    }
                }
                &:nth-child(3) {
                    .img-wrap {
                        img {
                            top: -30px;
                        }
                    }
                }
                .img-wrap {
                    cursor: pointer;
                    width: 380px;
                    position: relative;
                    overflow: hidden;
                    img {
                        position: absolute;
                        width: 380px;
                        transition: 1s ease;
                        &:hover {
                            transform: scale(1.1);
                        }
                    }
                }
                strong {
                    display: block;
                    font-weight: 600;
                    font-size: 24px;
                    margin-top: 20px;
                    margin-bottom: 15px;
                }
                p {
                    white-space: pre-line;
                    color: var(--foundation-white-dark-hover);
                    margin-bottom: 15px;
                    span {
                        display: inline-block;
                        margin-right: 10px;
                        border-radius: 50px;
                        background: var(--foundation-yellow-light);
                        color: var(--foundation-white-dark);
                        padding: 4px 10px;
                    }
                }
            }
        }
    }
    @media screen and (max-width: 390px) {
        .inner {
            width: 354px;
            height: 1000px;
            padding-top: 100px;
        }
        h2 {
            font-size: 22px !important;
            span {
                font-size: 20px;
            }
            &::after,
            &::before {
                display: none;
            }
        }
        em {
            font-size: 12px;
            margin-bottom: 28px;
        }
        .insta-wrap {
            ul {
                width: 354px;
                flex-wrap: wrap;
                gap: 18px;
                li {
                    width: 168px;
                    margin-bottom: 20px;
                    &:nth-child(1) {
                        p {
                            span {
                                &:nth-child(3),
                                &:nth-child(4) {
                                    display: none;
                                }
                            }
                        }
                    }
                    &:nth-child(2) {
                        p {
                            span {
                                &:nth-child(2),
                                &:nth-child(3) {
                                    display: none;
                                }
                            }
                        }
                    }
                    &:nth-child(3) {
                        position: absolute;
                        right: 0;
                        bottom: 50px;
                        .img-wrap {
                            img {
                                top: 0;
                            }
                        }
                        p {
                            span {
                                &:nth-child(2) {
                                    display: none;
                                }
                            }
                        }
                    }
                    &:nth-child(4) {
                        position: absolute;
                        left: 0;
                        bottom: 102px;
                    }
                    &:nth-child(odd) {
                        .img-wrap {
                            width: 100%;
                            height: 236px;
                            img {
                                height: 100%;
                            }
                        }
                    }
                    &:nth-child(even) {
                        .img-wrap {
                            width: 100%;
                            height: 176px;
                        }
                    }
                    .img-wrap {
                        img {
                            width: 100%;
                            top: 0;
                            left: 50%;
                            transform: translateX(-50%);
                        }
                    }
                    strong {
                        font-size: 16px;
                        margin-bottom: 6px;
                        margin-top: 10px;
                    }
                    p {
                        font-size: 9px;
                        span {
                            margin-right: 6px;
                        }
                    }
                }
            }
        }
    }
`;
