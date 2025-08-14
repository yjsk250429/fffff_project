import styled from 'styled-components';
export const JoinInfoStyle = styled.div`
    .inner {
        height: auto;
        width: 670px;
    }
    input {
        width: 350px;
        height: 45px;
    }
    .txt {
        justify-content: space-between;
        align-items: center;
        display: flex;

        .text-right {
            padding-top: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            span {
                display: block;
                color: red;
                padding-right: 2px;
            }
            strong {
                display: block;
            }
        }
    }
    .txt2 {
        margin-top: 50px;
        h4 {
            margin-bottom: 18px;
            span {
                font-size: 14px;
            }
        }
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
        padding: 10px 0;
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
    .choices {
    }
    .separator {
        margin: 0 8px;
        color: #a8a8a8;
        font-weight: normal;
    }
    h4 {
        margin: 10px 0;
        font-size: 16px;
        font-weight: 500;
        span {
            font-size: 14px;
            font-weight: 500;
            color: #656565;
        }
    }
`;

export const TableStyle = styled.table`
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
        display: block;
        p {
            span {
                color: rgb(185, 185, 185);
            }
        }
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

    td {
        padding: 8px;
        vertical-align: middle;

        input {
            &::placeholder {
                padding: 10px;
                font-family: 'Pretendard', sans-serif;
            }
        }
    }
    .post-input {
        background-color: var(--foundation-white-light-active);
        border: 1px solid #999;
    }

    .addr-input {
        background-color: var(--foundation-white-light-active);
        border: 1px solid #999;
    }
    tr td {
        border-bottom: 1px solid #dcdcdc;
        padding: 12px 16px;
        vertical-align: middle;
    }

    tr {
        &:first-child {
            border-top: 3px solid #656565;
        }
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

    .inline-input {
        .adress {
            display: block;
        }
        p {
            display: flex;
            gap: 5px;
        }
    }

    .inline-input button {
        flex-shrink: 0;
    }

    span {
        color: red;
    }
    .inline-input {
        .adress {
            input {
                &::placeholder {
                    color: #a8a8a8;
                    font-family: 'Pretendard';
                }
            }
        }
        .chk {
            width: 90px;
            height: 40px;
            border: 1px solid #a8a8a8;
            background-color: #fff;
            color: #000;
            font-family: 'Pretendard', sans-serif;
        }
    }

    .tell {
        display: flex;
        gap: 10px;
    }

    .time {
        margin-bottom: 20px;
        display: flex;
        gap: 20px;
        border: none;
        p {
            display: flex;
            gap: 8px;
        }
    }
    .time2 {
        display: flex;
        gap: 10px;
        border: none;
    }
    label {
        display: flex;
        gap: 15px;
    }
`;

export const BtnStyle = styled.div`
    margin-top: 80px;
    display: flex;
    gap: 10px;
    button {
        width: 330px;
        height: 50px;
        cursor: pointer;
        font-family: 'Pretendard', sans-serif;

        &.on {
            background: #000;
            color: #fff;
            border: none;
        }
        &.off {
            background: #fff;
            border: 1px solid rgb(192, 192, 192);
            color: #000;
        }
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
