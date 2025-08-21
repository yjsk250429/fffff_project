import styled from 'styled-components';
export const JoinInfoStyle = styled.div`
    .inner {
        width: 720px;
        padding:150px 0;
    }
    h2 {
        text-align: center;
        font-size: 40px;
        font-weight: 600;
        margin-bottom: 30px;
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
            margin:0 30px;
            position: relative;
        i{
            color: var(--foundation-white-normal-active);
            position: absolute;
            top: 0;
            left: 50%;
            transform:translateX(-50%);
        }
        }
        &.on {
                color: var(--foundation-white-dark-active);
                font-weight: 500;
            }
        }
    }
`;

export const TableStyle = styled.table`
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 50px;
    tr {
        &:first-child {
            border-top: 3px solid #656565;
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
                color:var(--foundation-white-normal-active);
                font-size: 14px;
            }
        }
        &:first-child {
            background-color: #f6f6f6;
            width: 190px;
        }
        input[type="text"], 
        input[type="password"] {
            border: 1px solid #dcdcdc;
            width: 392px;
            height:35px;
            padding-left: 10px;
            box-sizing: border-box;
            &::placeholder {
                font-family: 'Pretendard', sans-serif;
            }
        }
        i{
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
    }

        .address {
            p{
                margin-bottom: 10px;
                input {
                    border: 1px solid #dcdcdc;
                    &::placeholder {
                        color: #a8a8a8;
                        font-family: 'Pretendard';
                    }
                }
                &:nth-child(1){
                    input{
                        width: 160px;
                    }
                }
                &:nth-child(1),
                &:nth-child(2){
                    input{
                        background-color: var(--foundation-white-light-active);
                    }
                }
                &:last-child{
                   margin-bottom: 0;
                }
            }
        }
        
    .tel {
        input[type="text"]{
            width:80px;
            height: 35px; 
            margin-right: 15px;
        }
        span{
            color: #000;
            margin-right: 15px;
        }
    }
.birthday{
    input[type="text"]{
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
        input[type="radio"]{
            margin-right: 8px;
        }
    }
}
`;

export const BtnStyle = styled.div`
    margin-top: 80px;
    display: flex;
    justify-content:space-between;
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
