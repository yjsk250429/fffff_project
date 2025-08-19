import styled from 'styled-components';

export const CustomerLIstStyle = styled.div``;

export const CustomerAddStyle = styled.div`
    /* border: 1px solid #999; */
    width: 985px;
    margin: auto;
    h2 {
        font-size: 40px;
        font-weight: 600;
        padding-bottom: 24px;
    }
    em {
        color: var(--foundation-white-dark-active, #656565);
        line-height: 25px;
        display: block;
        margin-bottom: 66px;
    }
    p {
        display: flex;
        justify-content: end;
        span {
            color: red;
            padding-right: 7px;
            padding-top: 4px;
        }
    }
    .btn {
        display: flex;
        justify-content: end;
    }
`;
export const CustomerAddItemStyle = styled.table`
    /* width: 964px; */
    border-collapse: collapse;
    margin: 20px 0 30px;

    tbody {
        tr {
            &:nth-of-type(1) {
                border-top: 3px solid #000;
            }
            td {
                border-bottom: 1px solid #dcdcdc;
                vertical-align: middle;
                &:first-child {
                    width: 190px;
                    height: 62px;
                    line-height: 62px;
                    text-align: start;
                    padding-left: 16px;
                    font-weight: 500;
                    background: #f6f6f6;
                }
                span {
                    color: var(--red, #f00);
                    padding-left: 4px;
                }
            }
        }
        input,
        select,
        textarea {
            /* display: flex; */
            width: calc(100% - 20px);
            height: 40px;
            margin-left: 20px;
            border: 1px solid #dcdcdc;
            box-sizing: border-box;
            outline: none;
        }
        textarea[name='content'] {
            height: 140px;
            margin: 20px;
            box-sizing: border-box;
            resize: none;
        }

        select[name='inquiryType'] {
            width: 156px;
            justify-content: start;
            display: flex;
        }
        .email-wrap {
            display: flex;
            align-items: center;
            gap: 20px;

            input {
                flex: 1;
                &:nth-of-type(1) {
                    margin-left: 20px;
                }
            }
            .domain-select {
                width: 200px;
            }
            input,
            .domain-select {
                width: 227px;
                flex: 0 0 auto;
                margin-left: 0;
                height: 40px;
            }
            .at {
                color: #000;
                font-size: 18px;
                font-weight: 500;
                flex: 0 0 auto;
            }
        }
        .btn {
            display: flex;
            justify-content: start;
            padding: 10px 0 10px 10px;
        }
    }
`;

export const CustomerDetailStyle = styled.div``;
