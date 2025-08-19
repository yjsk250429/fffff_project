import styled from 'styled-components';

export const PaymentWrapStyle = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    .payment-left {
        width: 1030px;
        padding: 50px 55px;
        box-sizing: border-box;
        position: relative;
        margin-right: 50px;
        background: #000;
    }
    .payment-right {
        width: 520px;
        padding: 50px 40px;
        box-sizing: border-box;
        position: relative;

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

    .payment-right {
    }
`;
