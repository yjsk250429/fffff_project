import styled from 'styled-components';

export const LoginStyle = styled.div`
    .inner {
        display: grid;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        /* height: 800px; */
        width: 100%;
    }
    form {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        gap: 50px;
        margin-bottom: 150px;
        @media (max-width: 390px) {
            flex-direction: column;
            gap: 0px;
        }
    }
    .number-input {
        margin-bottom: 30px;
        display: grid;
        gap: 10px;
        @media (max-width: 390px) {
            gap: 6px;
        }
    }
    .login-input {
        display: grid;
        gap: 10px;
        @media (max-width: 390px) {
            gap: 6px;
        }
    }

    h2 {
        text-align: center;
        font-size: 40px;
        font-weight: 700;
        margin: 50px 0;
        @media (max-width: 390px) {
            font-size: 20px;
            margin: 80px 0 0;
            font-weight: 600;
        }
    }
    h3 {
        text-align: center;
        font-size: 20px;
        color: #4e4e4e;
        margin-bottom: 30px;
        @media (max-width: 390px) {
            font-size: 14px;
            font-weight: 500;
            margin-bottom: 20px;
            margin-top: 40px;
        }
    }
    .save-find {
        display: flex;
        gap: 89px;

        label {
            font-size: 14px;
            display: flex;
            align-items: center;
            gap: 8px;
            input {
                width: auto;
            }
        }
        span {
            display: flex;
            align-items: center;
            font-size: 14px;
            color: #999;
        }
        @media (max-width: 390px) {
            gap: 130px;
            label {
                font-size: 10px;
                gap: 5px;
                font-weight: 500;
                margin-top: 14px;
                margin-bottom: 38px;
                input {
                    height: 12px;
                }
            }
            span {
                align-items: normal;
                margin-top: 14px;
                font-size: 10px;
            }
        }
    }
    input {
        width: 350px;
        height: 50px;
        box-sizing: border-box;
        border: 1px solid #999;
        font-family: 'Pretendard', sans-serif;
        &::placeholder {
            color: rgb(192, 192, 192);
            font-size: 16px;
            font-weight: 400;
            padding: 0 10px;
            line-height: 22px;
        }
        @media (max-width: 390px) {
            height: 30px;
            border: 1px solid var(--Foundation-White-Normal, #e0e0e0);
            &::placeholder {
                font-size: 10px;
            }
        }
    }
    .left,
    .right {
        display: grid;
        gap: 15px;
        margin-top: 18px;
        @media (max-width: 390px) {
            display: block;
        }
    }

    p {
        gap: 15px;
        label {
            display: block;
            width: 110px;
        }
    }

    span {
        display: block;
        color: #000;
        font-size: 14px;
        margin-bottom: 5px;
        cursor: pointer;
    }

    &:last-child {
        text-align: center;
        button {
            width: 350px;
            height: 40px;
            background: #000;
            color: #fff;
            border: 1px solid #000;
            font-size: 16px;
            font-family: 'Pretendard', sans-serif;
            cursor: pointer;
        }
    }
    .sns-login {
        color: #a8a8a8;
        font-size: 16px;
        margin-top: 50px;
        position: relative;
        @media (max-width: 390px) {
            margin-top: 80px;
            font-size: 12px;
            position: relative;
        }
    }
    .sns-login::before,
    .sns-login::after {
        content: '';
        position: absolute;
        top: 50%;
        width: 90px;
        height: 0.5px;
        background-color: #999;
        transform: translateY(-50%);
        @media (max-width: 390px) {
            top: 50%;
            transform: translateY(-50%);
        }
    }

    .sns-login::before {
        left: 0;
        @media (max-width: 390px) {
            left: 0px;
        }
    }

    .sns-login::after {
        right: 0;
        @media (max-width: 390px) {
            left: 260px;
        }
    }
    .icon {
        display: flex;
        gap: 20px;
        @media (max-width: 390px) {
            margin-top: 28px;
            justify-content: center;
            img {
                width: 10.7692vw !important;
                height: 42px !important;
            }
        }
    }

    .divider {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 500px;
        font-size: 18px;
        font-family: 'EB Garamond', serif;
        @media (max-width: 390px) {
            display: none;
        }
    }

    .divider::before,
    .divider::after {
        content: '';
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        width: 0.5px;
        flex: 1;
        height: 180px;
        background-color: #999;
        @media (max-width: 390px) {
            display: none;
        }
    }
    .divider::before {
        top: 20%;
    }
    .divider::after {
        bottom: 20%;
    }
    .btn1 {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    .btn1 button {
        width: 350px;
        height: 50px;
        cursor: pointer;
    }
    .btn1 button.on {
        width: 350px;
        height: 50px;
        background: #000;
        color: #fff;
    }

    .btn1 button.off {
        width: 350px;
        height: 50px;
        background: #fff;
        border: 1px solid rgb(192, 192, 192);
        color: #000;
        @media (max-width: 390px) {
            border: 1px solid #e0e0e0;
        }
    }

    .btn2 button {
        width: 350px;
        height: 50px;
        background: #000;
        color: #fff;
        border: none;
        cursor: pointer;
        margin-top: 20px;
    }
    @media (max-width: 390px) {
        .btn1 button.off,
        .btn1 button.on {
            height: 40px;
            font-size: 12px;
        }
    }
`;

export const JoinStyle = styled.div`
    .inner {
        height: 870px;
        width: 720px;
        padding: 150px 0;
        @media (max-width: 390px) {
            width: 100%;
            padding: 80px 18px 120px;
            height: auto;
            .required {
            }
        }
    }
    h2 {
        text-align: center;
        font-size: 40px;
        font-weight: 700;
        margin-bottom: 30px;
        @media (max-width: 390px) {
            font-size: 20px;
        }
    }

    .step-indicator {
        text-align: center;
        font-weight: 500;
        margin-bottom: 54px;

        span {
            color: var(--foundation-white-dark);
            font-size: 16px;
            font-weight: 400;
            &:nth-child(even) {
                margin: 0 30px;
                position: relative;
                i {
                    color: var(--foundation-white-normal-active);
                    position: absolute;
                    top: 0;
                    left: 50%;
                    transform: translateX(-50%);
                }
            }
            &.on {
                color: var(--foundation-white-dark-active);
                font-weight: 500;
            }
        }
        @media (max-width: 390px) {
            span {
                font-size: 12px;
            }
        }
    }
    p {
        margin-bottom: 20px;
        span {
            display: block;
            text-indent: 34px;
            font-size: 14px;
            color: var(--foundation-white-dark-active);
            text-decoration: underline;
        }
        &.optional {
            margin-bottom: 100px;
        }
        label {
            display: block;
            font-size: 16px;
            margin-bottom: 15px;
            cursor: pointer;
            position: relative;
            input[type='checkbox'] {
                transform: scale(1.5);
                vertical-align: middle;
                margin-right: 20px;
            }
            &.allagree {
                font-size: 22px;
                font-weight: 600;
                padding-bottom: 15px;
                border-bottom: 1px solid #a8a8a8;
                display: flex;
                align-items: center;
                gap: 8px;
            }
            &.choice {
                text-indent: 34px;
                font-size: 14px;
                color: var(--foundation-white-dark-active);
                text-decoration: underline;
            }

            i {
                position: absolute;
                right: 8px;
                font-size: 14px;
            }
            @media (max-width: 390px) {
                &.allagree {
                    font-size: 16px;
                    gap: 10px;
                    input[type='checkbox'] {
                        margin-right: 0;
                    }
                }
            }
        }
    }

    .btns {
        display: flex;
        gap: 15px;
    }
`;
