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
        margin-bottom: 55px;
    }
    p {
        width: 720px;
        font-size: 18px;
        font-weight: 400;
        line-height: 1.6;
        color: #4e4e4e;
        text-align: end;
        position: absolute;
        top: 305px;
        right: 100px;
    }
    .image-wrap {
        width: 1700px;
        height: 710px;
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
            color: #4e4e4e;
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
                font-family: 'Pretendard', sans-serif;
                font-size: 16px;
                font-weight: 500;
                background: #000;
                color: #fff;
                width: 152px;
                height: 42px;
                line-height: 42px;
                text-align: center;
                padding: 0;
            }
        }
    }
`;
// 예진님 쓰세요
export const CollectionProductStyle = styled.div`
    .inner {
        width: 1700px;
        padding: 100px 0;
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
                position: relative;
                &::after {
                    content: '';
                    display: block;
                    position: absolute;
                    width: 100%;
                    height: 1px;
                    background: #cacaca;
                    left: 0;
                    bottom: 35px;
                }
                .img-wrap {
                    width: 400px;
                    position: relative;
                    img {
                        width: 400px;
                        height: 400px;
                        background: #dcdcdc;
                    }
                    i {
                        font-size: 24px;
                        color: #999;
                        position: absolute;
                        top: 24px;
                        right: 24px;
                    }
                }
                .text-wrap {
                    .product-info {
                        width: 400px;
                        position: relative;
                        strong {
                            display: block;
                            width: 300px;
                            height: 52px;
                            font-size: 22px;
                            line-height: 1.2;
                            font-weight: 600;
                            word-break: keep-all;
                        }
                        span {
                            position: absolute;
                            top: 0;
                            right: 0;
                            font-size: 16px;
                            font-weight: 400;
                            color: #000;
                        }
                        em {
                            display: block;
                            padding-top: 10px;
                            font-size: 16px;
                            font-weight: 400;
                            line-height: 1;
                        }
                    }
                    .price-info {
                        width: 400px;
                        position: relative;
                        margin-top: 20px;
                        span {
                            font-size: 18px;
                            font-weight: 400;
                        }
                        i {
                            font-size: 24px;
                            position: absolute;
                            top: 0;
                            right: 0;
                            transform: translateY(-5px);
                        }
                    }
                }
            }
        }
    }
`;
