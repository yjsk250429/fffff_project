import styled from 'styled-components';

export const BtnStyle = styled.div`
    margin-top: 80px;
    display: flex;
    justify-content: space-between;
    @media (max-width: 390px) {
        margin-top: 68px;
        justify-content: center;
        gap: 17px;
    }
`;

export const JoinInfoStyle = styled.div`
    .inner {
        /* width: 720px; */
        max-width: 720px;
        width: 100%;
        padding: 150px 0;
        @media (max-width: 390px) {
            width: 90.7692vw;
            padding: 80px 0px 120px;
        }
    }
    h2 {
        text-align: center;
        font-size: 40px;
        font-weight: 600;
        margin-bottom: 30px;
        @media (max-width: 390px) {
            font-size: 20px;
        }
    }
    .txt {
        display: flex;
        justify-content: space-between;
        align-items: center;
        h3 {
            font-size: 20px;
            font-weight: 500;
            padding: 10px 0;
        }

        .text-right {
            padding-top: 10px;
            display: flex;
            gap: 8px;
            strong {
                font-size: 14px;
                font-weight: 300;
            }
            span {
                display: block;
                color: red;
            }
        }
        @media (max-width: 390px) {
            h3 {
                font-size: 14px;
            }
            .text-right {
                strong {
                    font-size: 12px;
                }
                span {
                    font-size: 14px;
                }
            }
        }
    }
    .txt2 {
        h4 {
            font-size: 16px;
            font-weight: 500;
            margin-bottom: 18px;
            span {
                font-size: 14px;
                font-weight: 500;
                color: #656565;
            }
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
                &:nth-child(even) {
                    margin: 0 16px;
                }
            }
        }
    }

    .msg {
        margin-top: 6px;
        font-size: 12px; /* PC 기본 */
    }
    .msg.ok {
        color: #2e7d32;
    }
    .msg.error {
        color: #d32f2f;
    }
    .msg.neutral {
        color: #6b7280;
    }

    /* 📱 모바일에서는 10px */
    @media (max-width: 390px) {
        .msg {
            font-size: 10px !important;
            position: absolute;
            top: 23px;
        }
    }

    /* 모바일에서 BtnStyle 내부의 버튼만 크기 조절 */
    @media (max-width: 390px) {
        ${BtnStyle} {
            p > button {
                width: 39.7436vw !important;
                height: 40px !important;
            }
        }
    }
`;

export const TableStyle = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 50px;
    @media (max-width: 390px) {
        table,
        tbody,
        tr,
        td {
            display: block;
            width: 100%;
        }
    }

    tr {
        &:first-child {
            border-top: 3px solid #656565;
        }
        @media (max-width: 390px) {
            &:first-child {
                border-top: 1px solid #656565;
            }
        }
    }

    td {
        border-bottom: 1px solid #dcdcdc;
        padding: 12px 16px;
        box-sizing: border-box;
        vertical-align: middle;

        span {
            color: red;
        }
        p {
            position: relative;
            span {
                color: var(--foundation-white-normal-active);
                font-size: 14px;
            }
        }
        &:first-child {
            background-color: #f6f6f6;
            width: 190px;
        }
        input[type='text'],
        input[type='password'] {
            border: 1px solid #dcdcdc;
            width: 392px;
            height: 35px;
            padding-left: 10px;
            box-sizing: border-box;
            &::placeholder {
                font-family: 'Pretendard', sans-serif;
            }
            @media (max-width: 390px) {
                width: 100%;
                height: 30px;
            }
        }
        i {
            cursor: pointer;
            position: absolute;
            font-size: 20px;
            right: 65px;
            top: 4px;
        }
        .chk {
            width: 90px;
            height: 40px;
            border: 1px solid #dcdcdc;
            background: none;
            color: #000;
            font-family: 'Pretendard', sans-serif;
            cursor: pointer;
            margin-left: 10px;
        }
        @media (max-width: 390px) {
            font-size: 12px;
            font-weight: 500;
            border: none;
            padding: 0;

            p {
                display: flex;
                span {
                    font-size: 10px;
                }
            }
            &:first-child {
                background-color: #fff;
                margin: 15px 0 7px;
            }
            i {
                display: none;
            }
            .chk {
                width: 80px;
                height: 30px;
                margin-left: 5px;
                font-size: 10px;
            }
        }
    }

    .address {
        p {
            margin-bottom: 10px;
            input {
                border: 1px solid #dcdcdc;
                &::placeholder {
                    color: #a8a8a8;
                    font-family: 'Pretendard';
                }
            }
            &:nth-child(1) {
                input {
                    width: 160px;
                }
            }
            &:nth-child(1),
            &:nth-child(2) {
                input {
                    background-color: var(--foundation-white-light-active);
                }
            }
            &:last-child {
                margin-bottom: 0;
            }
        }
    }

    .tel {
        input[type='text'] {
            width: 80px;
            height: 35px;
            margin-right: 15px;
        }
        span {
            color: #000;
            margin-right: 15px;
        }
        @media (max-width: 390px) {
            input[type='text'] {
                width: 24.359vw;
                height: 30px;
                margin-right: 0;
            }
            span {
                margin-right: 0;
                padding: 0 14px;
            }
        }
    }
    .birthday {
        input[type='text'] {
            width: 105px;
            height: 35px;
            margin-right: 8px;
        }
        .date {
            margin-bottom: 20px;
            display: flex;
            gap: 20px;
            border: none;
            p {
                display: flex;
                gap: 8px;
            }
        }
        .moon {
            display: flex;
            gap: 25px;
            input[type='radio'] {
                margin-right: 8px;
            }
        }
        @media (max-width: 390px) {
            input[type='text'] {
                width: 24.1026vw;
                height: 30px;
            }
            .date {
                gap: 10px;
                margin-bottom: 16px;
                label {
                    display: inline-flex;
                    align-items: center;
                }
            }
            .moon {
                gap: 16px;
            }
        }
    }
`;

export const JoinCompleteStyle = styled.div`
    .inner {
        height: auto;
        width: 720px;
        @media (max-width: 390px) {
            width: 100%;
        }
    }
    h2 {
        text-align: center;
        font-size: 40px;
        font-weight: 600;
        margin: 150px 0 50px 0;
        @media (max-width: 390px) {
            margin: 80px 0 30px 0;
            font-size: 20px;
        }
    }
    .step-indicator {
        text-align: center;
        align-items: center;
        font-weight: 500;
        margin-top: 10px;
        margin-bottom: 50px;
        @media (max-width: 390px) {
            margin-bottom: 70px;
        }
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
        @media (max-width: 390px) {
            &.step1 {
                font-size: 12px;
            }
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
        @media (max-width: 390px) {
            img {
                width: 12.0513vw;
                margin-bottom: 40px !important;
            }
        }
    }
    h3 {
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 30px;
        @media (max-width: 390px) {
            font-size: 18px;
        }
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
        @media (max-width: 390px) {
            font-size: 16px;
        }
    }

    .btns {
        display: flex;
        gap: 15px;
        margin-bottom: 150px;
        @media (max-width: 390px) {
            justify-content: center;
            margin-bottom: 120px;
        }
    }
    p > button {
        margin-top: 50px;
        width: 354px !important;
        height: 50px !important;
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
    @media (max-width: 390px) {
        p > button {
            width: 155px !important;
            height: 40px !important;
            margin-top: 68px;
        }
    }
`;
