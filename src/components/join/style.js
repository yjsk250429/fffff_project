import styled from 'styled-components';
export const JoinInfoStyle = styled.div`
    .inner {
        height: auto;
        width: 720px;
    }
    input {
        width: 350px;
        height: 40px;
    }
    .txt {
        justify-content: space-between;
        display: flex;
        border-bottom: 3px solid #656565;
    }
    h2 {
        text-align: center;
        font-size: 40px;
        font-weight: 600;
        margin: 150px 0 50px 0;
    }
    h3 {
        font-size: 20px;
        font-weight: 500;
        padding: 10px;
    }
    strong {
        font-size: 14px;
        font-weight: 300;
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
            color: #a8a8a8;
            font-size: 16px;
            font-weight: 400;
        }
        &.step2 {
            color: #656565;
            font-size: 16px;
            font-weight: 500;
        }

        &.step3 {
            color: #a8a8a8;
            font-size: 16px;
            font-weight: 400;
        }
    }
    .separator {
        margin: 0 8px;
        color: #a8a8a8;
        font-weight: normal;
    }
    table {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 50px;
    }
    .sub {
        color: #656565;
        font-size: 14px;
    }
    .pass {
    }
    td {
        &:first-child {
            background-color: #f6f6f6;
        }
        text-align: left;
        padding: 0 20px;
        white-space: nowrap;
        vertical-align: middle;
        border-bottom: 1px solid #999;
    }
    input:focus {
        border-color: #0078d4;
    }
    td {
        padding: 8px;
        vertical-align: middle;

        input {
            width: 300px;
            height: 40px;

            &::placeholder {
                padding: 10px;
                font-family: 'Pretendard', sans-serif;
            }
        }
    }
    tr td {
        border-bottom: 1px solid #999;
        padding: 12px 16px;
        vertical-align: middle;
    }

    tr {
        &:nth-child(5) {
            td {
                &:last-child {
                    p {
                        display: flex;
                        margin-bottom: 10px;
                    }
                }
            }
        }
    }

    .inline-input input {
        flex: 1;
    }

    .inline-input button {
        flex-shrink: 0;
    }
    .input-btn {
        display: flex;
    }
    span {
        color: red;
    }
    .inline-input {
        .chk {
            width: 90px;
            height: 40px;
            border: 1px solid #a8a8a8;
            background-color: #fff;
            color: #000;
            font-family: 'Pretendard', sans-serif;
        }
    }
    .btns {
        display: flex;
        gap: 15px;
    }

    button {
        width: 354px;
        height: 50px;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        font-family: 'Pretendard', sans-serif;
    }

    button.on {
        margin-top: 50px;
        background: #000;
        color: #fff;
        border: none;
    }
    button.off {
        margin-top: 50px;
        background: #fff;
        border: 1px solid rgb(192, 192, 192);
        color: #000;
    }
`;

export const JoinCompleteStyle = styled.div`
    .inner {
        height: auto;
        width: 720px;
    }
    h2 {
        text-align: center;
        font-size: 40px;
        font-weight: 600;
        margin: 150px 0 50px 0;
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
            color: #a8a8a8;
            font-size: 16px;
            font-weight: 400;
        }
        &.step2 {
            color: #a8a8a8;
            font-size: 16px;
            font-weight: 400;
        }

        &.step3 {
            color: #656565;
            font-size: 16px;
            font-weight: 500;
        }
    }
    .separator {
        margin: 0 8px;
        color: #a8a8a8;
        font-weight: normal;
    }
    .chk {
        text-align: center;
        a {
            img {
                display: inline-block;
                margin-bottom: 30px;
            }
        }
    }
    h3 {
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 30px;
    }
    strong {
        font-size: 14px;
        font-weight: 500;
        color: #999999;

        span {
            font-size: 16px;
            font-weight: 600;
            color: #4e4e4e;
        }
    }
    .btns {
        display: flex;
        gap: 15px;
        margin-bottom: 150px;
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
