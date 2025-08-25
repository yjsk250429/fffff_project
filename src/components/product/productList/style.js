import styled from 'styled-components';

export const ProductSearchWrap = styled.div`
    margin-top: 30px;
    form {
        display: flex;
        justify-content: space-between;
        @media (max-width: 390px) {
            align-items: start;
        }

        .search {
            height: 24px;
            width: 235px;
            position: relative;
            @media (max-width: 390px) {
                height: 16px;
            }
            i {
                position: absolute;
                font-size: 24px;
                left: 0;
                top: 50%;
                transform: translateY(-50%);
                @media (max-width: 390px) {
                    font-size: 16px;
                    top: 0;
                    transform: translateY(0);
                    width: 16px;
                    height: 16px;
                }
            }
            input[type='text'] {
                position: absolute;
                top: 50%;
                right: 0;
                transform: translateY(-50%);
                margin-left: 30px;
                width: 200px;
                height: 24px;
                border: none;
                border-bottom: 1px solid #000;
                padding: 15px 0;
                box-sizing: border-box;
                font-size: 18px;
                @media (max-width: 390px) {
                    width: 80px;
                    left: 0;
                    top: 0;
                    height: 16px;
                    font-size: 16px;
                    margin-left: 23px;
                }
                &:focus {
                    outline: none;
                }
            }
        }
        .filter {
            position: relative;
        }
        button {
            cursor: pointer;
            border: none;
            background: none;
            font-size: 24px;
            font-weight: 500;
            font-family: 'Pretendard', sans-serif;
            @media (max-width: 390px) {
                position: absolute;
                right: 18px;
                width: 60px;
                text-align: end;
                height: 16px;
                font-size: 14px;
                font-weight: 400;
            }
        }

        .option {
            border: 1px solid #000;
            width: 250px;
            height: 860px;
            padding: 30px;
            box-sizing: border-box;
            position: absolute;
            right: 0;
            top: 36px;
            z-index: 10;
            background: var(--w);
            display: none;
            &.on {
                display: block;
            }
            ul {
                margin-bottom: 20px;
                li {
                    margin-bottom: 4px;
                    &:first-child {
                        font-size: 18px;
                        margin-bottom: 8px;
                    }
                    input[type='checkbox'] {
                        margin-right: 8px;
                    }
                }
            }
        }
    }
`;

export const ProductListWrap = styled.article`
    margin-top: 60px;
    @media (max-width: 390px) {
        width: 390px;
        padding: 0 18px;
        box-sizing: border-box;
        margin-top: 35px;
    }
    &.product-wrap {
        ul {
            display: flex;
            justify-content: flex-start;
            flex-wrap: wrap;
            gap: 32px;
            @media (max-width: 390px) {
                gap: 10px;
            }
        }
        &.empty {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 500px;
            p {
                font-size: 30px;
            }
        }
    }
`;
export const ProductItemStyle = styled.li`
    @media (max-width: 390px) {
        width: 170px;
        height: 280px;
    }
    a {
        cursor: default;
    }
    width: 400px;
    margin-bottom: 60px;
    .img-wrap {
        width: 100%;
        height: 400px;
        cursor: pointer;
        background: var(--background);
        position: relative;

        @media (max-width: 390px) {
            width: 170px;
            height: 240px;
        }
        img {
            width: 100%;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) scale(0.9);
            @media (max-width: 390px) {
                transform: translate(-50%, -50%) scale(1);
            }
        }
        i {
            position: absolute;
            top: 16px;
            right: 16px;
            font-size: 24px;
            transition: 0.2s;
            &.active {
                color: red;
            }
            @media (max-width: 390px) {
                font-size: 15px;
                top: 8px;
                right: 8px;
            }
        }
    }
    .text-wrap {
        width: 100%;
        .product-info {
            padding-top: 25px;
            height: 111px;
            position: relative;
            @media (max-width: 390px) {
                padding-top: 10px;
                height: auto;
            }
            strong {
                display: block;
                width: 300px;
                font-size: 22px;
                font-weight: 600;
                margin-bottom: 36px;
                word-break: keep-all;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                overflow: hidden;
                text-overflow: ellipsis;
                -webkit-line-clamp: 2;
                @media (max-width: 390px) {
                    width: 170px;
                    font-size: 12px;
                    font-weight: 600;
                    margin-bottom: 5px;
                    -webkit-line-clamp: 1;
                }
            }
            span {
                font-size: 16px;
                font-weight: 400;
                position: absolute;
                top: 25px;
                right: 0;
                cursor: pointer;
                @media (max-width: 390px) {
                    display: none;
                }
            }
        }
        em {
            position: absolute;
            bottom: 0;
            @media (max-width: 390px) {
                display: none;
            }
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
        @media (max-width: 390px) {
            margin-top: 10px;
            line-height: 25px;
        }
        span {
            font-size: 18px;
            @media (max-width: 390px) {
                font-size: 10px;
                font-weight: 500;
            }
        }
        i {
            font-size: 24px;
            position: absolute;
            top: 5px;
            right: 0;
            cursor: pointer;
            transition: 0.2s;
            &.active {
                color: var(--foundation-yellow-dark);
            }
            @media (max-width: 390px) {
                font-size: 15px;
                top: 3px;
            }
        }
    }
`;
