import styled from 'styled-components';

export const CartEmptyStyle = styled.div`
    .inner {
        padding: 300px 0;
        text-align: center;
    }
    h2 {
        font-size: 40px;
        font-weight: 600;
        margin-bottom: 30px;
    }
    p {
        button {
            font-family: 'Pretendard', sans-serif;
            background: var(--foundation-yellow-b);
            color: var(--w);
            width: 120px;
            height: 35px;
            font-weight: 500;
            font-size: 16px;
            padding: 0;
        }
    }
`;

export const CartWrapStyle = styled.div`
    .inner {
        padding: 100px 0;
        width: 1600px;
        margin: auto;
    }
    h2 {
        font-size: 40px;
        font-weight: 600;
        margin-bottom: 100px;
        text-align: center;
    }
    .login-info {
        border: 1px solid var(--foundation-yellow-b);
        width: 1600px;
        padding: 25px 40px;
        height: 74px;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 30px;

        strong {
            font-size: 18px;
            font-weight: 600;
            display: flex;
            align-items: center;
            img {
                width: 24px;
                height: 24px;
                display: block;
                margin-right: 8px;
            }
        }
        em {
            color: #777;
            font-size: 16px;
            font-weight: 500;
            display: flex;
            align-items: center;
            img {
                width: 20px;
                height: 20px;
                display: block;
                margin-right: 6px;
            }
        }
    }
    .first {
        width: 1600px;
        display: flex;
        flex-wrap: wrap;
        /* justify-content: space-between; */
    }
`;

export const CartItemStyle = styled.ul`
    li {
        width: 920px;
        height: 150px;
        display: flex;
        align-items: center;
        margin-top: 40px;
        .checkbox-wrap {
            width: 16px;
            height: 16px;
            margin-right: 14px;
            input[type='checkbox'] {
                accent-color: var(--foundation-yellow-b);
                width: 16px;
                height: 16px;
                margin: 0;
                // 체크박스와 텍스트 간격
            }
        }
        .product-image {
            width: 150px;
            height: 150px;
            margin-right: 25px;
            img {
                width: 150px;
                height: 150px;
            }
        }
        .product-info {
            .product-name {
                width: 715px;
                position: relative;
                font-size: 18px;
                font-weight: 500;
                i {
                    position: absolute;
                    right: 0;
                    font-size: 18px;
                    color: #999;
                }
            }
            .product-size {
                font-size: 16px;
                font-weight: 400;
                color: #555;
            }
            .quantity-control {
                width: 715px;
                height: 30px;
                margin-top: 14px;
                display: flex;
                align-items: center;
                position: relative;
                .btn {
                    width: 30px;
                    height: 30px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border: 1px solid #dfdfdf;
                    cursor: pointer;

                    i {
                        display: block;
                        font-size: 14px;
                        line-height: 1;
                        color: #999;
                    }
                }
                .minus {
                    border-right: none;
                }
                .plus {
                    border-left: none;
                }
                strong {
                    width: 30px;
                    height: 30px;
                    font-size: 14px;
                    color: var(--foundation-yellow-b);
                    font-weight: 500;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border: 1px solid #dfdfdf;
                }
                .item-price {
                    position: absolute;
                    right: 0;
                    top: 0;
                }
            }
        }
    }
`;

export const CartListStyle = styled.div`
    .cart-left {
        width: 1030px;
        padding: 50px 55px;
        margin-right: 50px;
        margin-bottom: 30px;
        /* border: 1px solid #dcdcdc; */
        box-sizing: border-box;
        font-size: 16px;
        font-weight: 600;
        position: relative;

        .check-all {
            width: 100%;
            display: flex;
            align-items: center; // 수직 가운데 정렬
            position: relative; // 절대 위치 기준 부모로 설정
            margin-bottom: 20px;

            input[type='checkbox'] {
                accent-color: var(--foundation-yellow-b);
                width: 16px;
                height: 16px;
                margin: 0;
                margin-right: 14px; // 체크박스와 텍스트 간격
            }

            /* '전체' 텍스트와 .delete-wrap을 플렉스 아이템으로 분리하여 배치 */
            & > span {
                flex-grow: 1; // '전체' 텍스트가 가능한 영역 차지
            }

            .delete-wrap {
                position: absolute;
                right: 0;
                display: flex;
                align-items: center;

                p {
                    font-size: 16px;
                    font-weight: 600;
                    position: relative;
                    display: flex;
                    align-items: center;

                    span {
                        display: block;
                        margin-left: 24px;
                        position: relative;

                        &::after {
                            position: absolute;
                            content: '';
                            width: 1px;
                            height: 16px;
                            background: var(--foundation-yellow-b);
                            left: -12px;
                            top: 50%;
                            transform: translateY(-50%);
                        }
                    }
                }
            }
            &::after {
                content: '';
                position: absolute;
                width: 100%;
                height: 1px;
                background: #a8a8a8;
                bottom: -20px;
                left: 0;
            }
        }
    }
`;

export const CartRightStyle = styled.div`
    .cart-right {
        width: 520px;
        height: 567px;
        padding: 50px 40px 0;
        border: 1px solid var(--foundation-yellow-b);
        box-sizing: border-box;
        position: relative;
        margin-bottom: 30px;

        h3 {
            width: 440px;
            font-size: 30px;
            line-height: 1.3;
            font-weight: 600;
            margin-bottom: 90px;
        }
        strong {
            display: block;
            width: 440px;
            font-size: 22px;
            font-weight: 600;
            margin-bottom: 70px;
            position: relative;
            span {
                position: absolute;
                top: 0;
                right: 0;
            }
            &::after {
                content: '';
                display: block;
                width: 440px;
                height: 1px;
                position: absolute;
                bottom: -35px;
                left: 0;
                background: var(--foundation-yellow-b);
            }
        }
        > p {
            width: 440px;
            font-size: 20px;
            font-weight: 600;
            line-height: 1;
            margin-bottom: 20px;
            color: #999;
            position: relative;
            span {
                position: absolute;
                top: 0;
                right: 0;
                color: var(--foundation-yellow-b);
            }
        }
        .button-wrap {
            display: flex;
            position: absolute;
            justify-content: center;
            align-items: center;
            left: 0;
            bottom: 0px;
            p {
                &:nth-child(1) {
                    button {
                        width: 200px;
                        height: 85px;
                        font-size: 22px;
                        font-weight: 700;
                        color: var(--foundation-yellow-b);
                        border: none;
                        border-top: 1px solid var(--foundation-yellow-b);
                        background: none;
                    }
                }
                &:nth-child(2) {
                    button {
                        width: 319px;
                        height: 85px;
                        background: var(--foundation-yellow-b);
                        color: var(--w);
                        font-size: 22px;
                        font-weight: 700;
                        border: none;
                    }
                }
            }
        }
    }
    .gift-right {
        width: 520px;
        padding: 50px 40px;
        border: 1px solid var(--foundation-yellow-b);
        box-sizing: border-box;
        position: relative;
        h4 {
            width: 440px;
            margin-bottom: 40px;
            font-size: 22px;
            font-weight: 500;
            line-height: 1;
            position: relative;
            &::after {
                content: '';
                display: block;
                width: 100%;
                height: 1px;
                background: #b3b3b3;
                position: absolute;
                left: 0;
                bottom: -20px;
            }
            input[type='checkbox'] {
                accent-color: var(--foundation-yellow-b);
                width: 16px;
                height: 16px;
                margin: 0;
                position: absolute;
                right: 0;
                top: 0;
                transform: translateY(50%);
            }
        }
        img {
            display: block;
            width: 440px;
            height: 142px;
            margin-bottom: 10px;
        }
        p {
            width: 280px;
            font-size: 14px;
            font-weight: 400;
            line-height: 1.4;
            word-break: keep-all;
        }

        .textarea-wrapper {
            max-height: 0;
            opacity: 0;
            transition: all 0.4s ease;
            strong {
                display: block;
                width: 440px;
                font-size: 16px;
                font-weight: 500;
                line-height: 1;
                /* margin-top: 25px; */
                margin-bottom: 10px;
            }
            textarea {
                display: block;
                width: 440px;
                height: 120px;
                border: 1px solid #a8a8a8;
                box-sizing: border-box;
            }
        }
        .textarea-wrapper.show {
            max-height: 440px; /* textarea 높이보다 살짝 크게 */
            opacity: 1;
            padding-top: 25px;
        }
    }
`;

export const CartSampleStyle = styled.div`
    /* border: 1px solid #dcdcdc; */
    width: 1030px;
    padding: 50px 55px;
    box-sizing: border-box;
    position: relative;
    margin-right: 50px;
    strong {
        display: block;
        font-size: 22px;
        font-weight: 600;
        padding-bottom: 40px;
        color: var(--foundation-yellow-b);
        position: relative;
        &::after {
            content: '';
            position: absolute;
            width: 920px;
            height: 1px;
            background: #a8a8a8;
            left: 0;
            bottom: 20px;
        }
    }
    p {
        font-size: 14px;
        font-weight: 400;
        margin-bottom: 30px;
    }
    .sample-left {
        li {
            width: 186px;
            height: 202px;
            /* background: red; */
            position: relative;
            input[type='checkbox'] {
                accent-color: var(--foundation-yellow-b);
                width: 16px;
                height: 16px;
                margin: 0;
                padding: 0;
            }
            img {
                width: 160px;
                height: 160px;
                position: absolute;
                top: 0;
                right: 0;
            }
            p {
                width: 160px;
                font-size: 14px;
                font-weight: 400;
                position: absolute;
                right: 0;
                bottom: 0;
                word-break: keep-all;
                margin: 0;
            }
        }
    }
`;
