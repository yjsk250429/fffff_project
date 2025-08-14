import styled from 'styled-components';

export const LoginStyle = styled.div`
    .inner {
        display: grid;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 800px;
        width: 100%;
    }
    form {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        gap: 50px;
        margin-bottom: 150px;
    }
    .number-input {
        margin-bottom: 30px;
        display: grid;
        gap: 10px;
    }
    .login-input {
        display: grid;
        gap: 10px;
    }

    h2 {
        text-align: center;
        font-size: 40px;
        font-weight: 700;
        margin: 50px 0;
    }
    h3 {
        text-align: center;
        font-size: 20px;
        color: #4e4e4e;
        margin-bottom: 30px;
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
    }
    .left,
    .right {
        display: grid;
        gap: 15px;
        margin-top: 18px;
    }

    p {
        gap: 15px;
        label {
            display: block;
            width: 110px;
            gap: 15px;
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
    }
    .sns-login::before,
    .sns-login::after {
        content: '';
        position: absolute;
        top: 70.5%;
        width: 90px;
        height: 0.5px;
        background-color: #999;
        transform: translateY(-50%);
    }

    .sns-login::before {
        left: 28.5%;
    }

    .sns-login::after {
        right: 53.5%;
    }
    .icon {
        display: flex;
        gap: 20px;
    }

    .divider {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 500px;
        font-size: 18px;
        font-family: 'EB Garamond', serif;
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
`;
export const LogoutStyle = styled.div``;
export const JoinStyle = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding-top: 80px;
    background: #fff;
    .inner {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 800px;
        width: 720px;
    }
    h2 {
        text-align: center;
        font-size: 40px;
        font-weight: 700;
        margin: 50px 0;
    }

    .step-indicator {
        text-align: center;
        align-items: center;
        font-weight: 500;
        margin-top: 10px;
        margin-bottom: 50px;
    }
    .step {
        &.step1 {
            color: #656565;
            font-size: 16px;
            font-weight: 500;
        }
        &.step2 {
            color: #a8a8a8;
            font-size: 16px;
            font-weight: 400;
        }
        &.step3 {
            color: #a8a8a8;
            font-size: 16px;
            font-weight: 400;
        }
    }
    p {
        margin-bottom: 20px;
    }
    .separator {
        margin: 0 8px;
        color: #a8a8a8;
        font-weight: normal;
    }
    label {
        display: block;
        font-size: 18px;
        margin-bottom: 15px;
        cursor: pointer;
    }
    .choice {
        text-indent: 2%;
        font-size: 16px;
        font-weight: 300;
    }
    .allagree {
        font-size: 22px;
        font-weight: 500;
        padding: 10px 0;
        border-bottom: 1px solid #a8a8a8;
    }
    .all {
        text-align: left;
    }
    .all label {
        display: flex;
        align-items: center;
        gap: 8px;
    }

    input[type='checkbox'] {
        transform: scale(1.5);
        transform-origin: center center;
        vertical-align: middle;
    }
    .btns {
        display: flex;
        gap: 15px;
    }
    button {
        margin-top: 50px;
        width: 354px;
        height: 50px;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        font-family: 'Pretendard', sans-serif;
    }

    button.on {
        background: #000;
        color: #fff;
        border: none;
    }
    button.off {
        background: #fff;
        border: 1px solid rgb(192, 192, 192);
        color: #000;
    }
`;
