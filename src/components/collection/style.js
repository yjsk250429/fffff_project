import styled from 'styled-components';

export const CollectionIntroStyle = styled.div`
    position: relative;
    padding: 100px;
    h2 {
        font-family: 'EB Garamond', serif;
        font-size: 150px;
        line-height: 1;
        letter-spacing: -2px;
        color: #e0e0e0;
        color: var(--foundation-white-normal);
        margin-bottom: 55px;
    }
    p {
        width: 720px;
        font-size: 18px;
        font-weight: 400;
        line-height: 1.6;
        color: var(--foundation-white-darker);
        text-align: end;
        position: absolute;
        top: 305px;
        right: 100px;
    }
    .image-wrap {
        width: 1700px;
        height: 710px;
        overflow: hidden;
        display: flex;
        justify-content: space-between;
        li {
            background-position: 0 bottom;
            background-size: contain;
            background-repeat: no-repeat;
            vertical-align: end;
            &:nth-child(1) {
                width: 533px;
                background-image: url('/images/collection/collection_sub1.jpg');
            }
            &:nth-child(2) {
                width: 540px;
                background-image: url('/images/collection/collection_sub2.jpg');
            }
            &:nth-child(3) {
                width: 540px;
                background-image: url('/images/collection/collection_sub3.jpg');
            }
        }
    }
`;

export const CollectionListStyle = styled.ul`
    width: 100%;
    height: 800px;
    display: flex;
    flex-wrap: wrap;
`;

export const CollectionItemStyle = styled.li`
    width: 100%;
    height: 800px;
    display: flex;
    justify-content: space-between;
    .main {
        width: 768px;
        height: 100%;
        img {
            width: 768px;
            height: 100%;
        }
    }
    .description {
        width: 1152px;
        height: 100%;
        padding: 70px 151px;
        box-sizing: border-box;

        strong {
            display: block;
            font-size: 30px;
            font-weight: 600;
            text-align: center;
            margin-bottom: 42px;
        }
        em {
            display: block;
            color: var(--foundation-white-darker);
            width: 847px;
            font-size: 16px;
            font-weight: 400;
            line-height: 1.6;
            word-break: keep-all;
            margin-bottom: 42px;
        }
        ul {
            width: 847px;
            height: 331px;
            display: flex;
            gap: 26px;
            margin-bottom: 90px;
            li {
                width: 265px;
                height: 331px;
                img {
                    width: 265px;
                    height: 331px;
                    object-fit: cover;
                }
            }
        }
        .button-wrap {
            width: 847px;
            text-align: center;
            button {
                /* font-family: 'Pretendard', sans-serif;
                font-size: 16px;
                font-weight: 500;
                background-color: var(--b);
                color: var(--w);
                border: none;
                width: 152px;
                height: 42px;
                line-height: 42px;
                text-align: center;
                padding: 0; */
            }
        }
    }
`;

export const CollectionProductStyle = styled.div`
    .inner {
        width: 1700px;
        padding: 100px 0;
    }
    h2 {
        text-align: center;
        line-height: 1;
        font-size: 30px;
        font-weight: 600;
        margin-bottom: 50px;
    }
    ul {
        width: 1702px;
        display: flex;
        flex-wrap: wrap;
        gap: 34px;
        li {
            width: 400px;
            margin-bottom: 40px;
            a {
                cursor: default;
            }
            width: 400px;
            margin-bottom: 60px;
            .img-wrap {
                width: 100%;
                height: 400px;
                cursor: pointer;
                width: 100%;
                background: var(--background);
                position: relative;
                img {
                    width: 100%;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%) scale(0.9);
                }
                i {
                    position: absolute;
                    top: 16px;
                    right: 16px;
                    font-size: 24px;
                }
            }
            .text-wrap {
                width: 100%;

                .product-info {
                    padding-top: 20px;
                    height: 90px;
                    position: relative;
                    strong {
                        display: block;
                        width: 300px;
                        height: 55px;
                        font-size: 22px;
                        line-height: 1.3;
                        font-weight: 600;
                        /* margin-bottom: 36px; */
                        word-break: keep-all;
                    }
                    span {
                        font-size: 16px;
                        font-weight: 400;
                        position: absolute;
                        top: 25px;
                        right: 0;
                        cursor: pointer;
                    }
                    em {
                        line-height: 1;
                        position: absolute;
                        bottom: 0;
                    }
                }
                .price-info {
                    width: 100%;
                    line-height: 35px;
                    border-top: 1px solid var(--foundation-white-normal);
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-top: 10px;
                    position: relative;
                    span {
                        font-size: 18px;
                    }
                    i {
                        font-size: 24px;
                        position: absolute;
                        top: 5px;
                        right: 0;
                        cursor: pointer;
                    }
                }
            }
        }
    }
`;
