import styled from 'styled-components';

export const PaymentWrapStyle = styled.div`
    width: 1600px;
    display: flex;
    justify-content: space-between;

    .payment-left {
        width: 1030px;
        padding: 50px 55px;
        margin-right: 50px;
        box-sizing: border-box;
        table {
            width: 920px;
            border-collapse: collapse;
            table-layout: fixed;

            /* colgroup 스타일 강제 적용 */
            col:first-child {
                width: 175px !important;
            }
            col:last-child {
                width: 745px !important;
            }

            tbody {
                width: 100%;

                /* first-line 스타일링 - 클래스 선택자 사용 */
                tr.first-line td {
                    width: 100%;
                    height: 46px;
                    font-size: 22px;
                    font-weight: 600;
                    text-align: left;
                    border-bottom: 1px solid #dcdcdc;
                }

                tr:not(.first-line) {
                    td {
                        padding: 24px 0;
                        font-size: 16px;
                        vertical-align: top;
                        border-bottom: 1px solid #f0f0f0;

                        &:first-child {
                            width: 175px;
                            font-size: 16px;
                            font-weight: 600;
                            box-sizing: border-box;
                        }

                        &:last-child {
                            width: calc(745px - 32px); /* padding 고려 */
                            box-sizing: border-box;
                        }
                    }
                }

                tr td.inline-input {
                    padding-right: 16px;

                    p {
                        margin-bottom: 12px;
                        display: flex;
                        align-items: center;
                        gap: 6px;

                        &:last-child {
                            margin-bottom: 0;
                        }

                        input[type='text'] {
                            width: 300px;
                            height: 40px;
                            padding: 0 10px;
                            border: 1px solid #dcdcdc;
                            font-size: 14px;
                            box-sizing: border-box;
                        }

                        button {
                            height: 40px;
                            padding: 0 16px;
                            border: 1px solid #000;
                            background: #fff;
                            font-size: 14px;
                            cursor: pointer;
                            white-space: nowrap;
                            box-sizing: border-box;
                        }

                        input[type='checkbox'] {
                            width: 16px;
                            height: 16px;
                            accent-color: #000;
                            margin: 0;
                            padding: 0;
                        }

                        label {
                            font-size: 14px;
                            font-weight: 400;
                            white-space: nowrap;
                            flex-shrink: 0; /* 라벨 크기 고정 */
                        }
                    }

                    select {
                        width: 400px;
                        height: 40px;
                        /* padding: 10px; */
                        border: 1px solid #dcdcdc;
                        font-size: 14px;
                        color: #a8a8a8;
                    }
                }
            }
        }
        .payment-items {
            width: 100%;
            padding-top: 50px;

            .title {
                width: 100%;
                height: 26px;
                font-size: 22px;
                font-weight: 600;
                margin-bottom: 60px;
                position: relative;
                cursor: pointer; /* 클릭 가능 표시 */

                &::after {
                    content: '';
                    display: block;
                    width: 100%;
                    height: 1px;
                    background: #a8a8a8;
                    position: absolute;
                    left: 0;
                    bottom: -20px;
                }

                i {
                    position: absolute;
                    font-size: 24px;
                    right: 0;
                    top: 0;
                    transition: transform 0.3s ease; /* 회전 애니메이션 */
                    display: inline-flex; /* flex로 잡으면 transform-origin이 정확히 중앙 */
                    align-items: center;
                    justify-content: center;
                    transform-origin: center; /* 회전 중심을 아이콘 중앙으로 지정 */
                }
            }

            ul {
                width: 100%;
                overflow: hidden; /* 슬라이드 애니메이션 시 잘림 방지 */
                padding: 0;
                margin: 0;
                list-style: none;
            }
        }

        .payment-discount {
            width: 100%;
            padding-top: 50px;
            .title {
                width: 100%;
                height: 26px;
                font-size: 22px;
                font-weight: 600;
                margin-bottom: 60px;
                position: relative;
                &::after {
                    content: '';
                    display: block;
                    width: 100%;
                    height: 1px;
                    background: #a8a8a8;
                    position: absolute;
                    left: 0;
                    bottom: -20px;
                }
            }
            .input-wrap {
                width: 100%;
                height: 40px;
                display: flex;
                gap: 10px;
                p {
                    width: 160px;
                    height: 40px;
                    line-height: 40px;
                    font-size: 18px;
                    font-weight: 400;
                }
                input[type='text'] {
                    width: 300px;
                    height: 40px;
                    border: 1px solid #dcdcdc;
                    font-size: 14px;
                    box-sizing: border-box;
                    text-indent: 10px;
                }
                button {
                    width: 80px;
                    background: #000;
                    color: #fff;
                    font-family: 'Pretendard', sans-serif;
                    font-size: 14px;
                }
            }
        }
        .payment-tools {
            width: 100%;
            padding-top: 50px;
            .title {
                width: 100%;
                height: 26px;
                font-size: 22px;
                font-weight: 600;
                margin-bottom: 60px;
                position: relative;
                &::after {
                    content: '';
                    display: block;
                    width: 100%;
                    height: 1px;
                    background: #a8a8a8;
                    position: absolute;
                    left: 0;
                    bottom: -20px;
                }
            }
            .tool-list {
                height: 18px;
                display: flex;
                align-items: center;
                input[type='radio'] {
                    width: 16px;
                    height: 16px;
                    accent-color: #000;
                    margin-right: 8px;
                    margin-left: 0;
                }
                label {
                    font-size: 18px;
                    font-weight: 400;
                    margin-right: 30px;
                }
            }
        }
    }
    .payment-right {
        width: 520px;
        height: 620px;
        padding: 50px 40px 0;
        border: 1px solid var(--foundation-yellow-b);
        box-sizing: border-box;
        position: relative;

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
            bottom: 0;
            width: 100%;

            p {
                margin: 0; /* p 태그 기본 margin 제거 */

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
                        cursor: pointer;
                    }
                }

                &:nth-child(2) {
                    button {
                        width: 320px; /* 319px → 320px로 정확한 계산 */
                        height: 85px;
                        background: var(--foundation-yellow-b);
                        color: var(--w);
                        font-size: 22px;
                        font-weight: 700;
                        border: none;
                        cursor: pointer;
                    }
                }
            }
        }
    }
`;

export const PaymentProductItemStyle = styled.li`
    display: flex;
    gap: 25px;
    margin-bottom: 40px;
    .product-image {
        width: 150px;
        img {
            width: 150px;
            height: 150px;
        }
    }
    .product-info {
        width: 745px;

        position: relative;
        .product-name {
            font-size: 18px;
            font-weight: 500;
        }
        .product-size {
            font-size: 16px;
            font-weight: 400;
            color: #444;
        }
        .item-price {
            position: absolute;
            right: 0;
            top: 0;
            font-size: 18px;
            font-weight: 700;
            span {
                font-size: 16px;
                font-weight: 500;
            }
        }
    }
`;
