import styled from 'styled-components';

export const CustomerListStyle = styled.div`
    margin: 0px 260px 100px;
    .customerTable {
        width: 100%;
        font-size: 18px;
        caption {
            font-size: 40px;
            font-weight: 600;
            margin-bottom: 60px;
        }
        .number {
            width: 80px;
        }
        .type {
            width: 190px;
        }
        .title {
            width: auto;
        }
        .name {
            width: 138px;
        }
        .date {
            width: 138px;
        }
        th,
        td {
            height: 57px;
            vertical-align: middle;
            border-bottom: 1px solid var(--foundation-white-normal-hover, #cacaca);
        }
        th {
            background: #f6f6f6;
            border-top: 1.5px solid #000;
        }
        td {
            &:nth-of-type(2) {
                text-align: center;
            }
            &:nth-of-type(3) {
                text-align: left;
                padding-left: 30px;
            }
        }
    }
    p {
        display: flex;
        justify-content: end;
        Button {
            margin-top: 100px;
        }
    }
`;

export const CustomerAddStyle = styled.div`
    /* border: 1px solid #999; */
    padding-bottom: 115px;
    width: 985px;
    margin: auto;
    h2 {
        font-size: 40px;
        font-weight: 600;
        padding-bottom: 24px;
        margin-top: 30px;
        text-align: center;
    }
    em {
        color: var(--foundation-white-dark-active, #656565);
        line-height: 25px;
        display: block;
        margin-bottom: 66px;
        text-align: center;
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
        gap: 8px;
    }
`;
export const CustomerAddItemStyle = styled.table`
    /* width: 964px; */
    border-collapse: collapse;
    margin: 20px 0 30px;
    border-top: 3px solid #000;

    tbody {
        tr {
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
            width: 140px;
            justify-content: start;
            display: flex;
            appearance: none;
            -webkit-appearance: none;
            -moz-appearance: none;
            padding-right: 24px;
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
                padding-left: 10px;
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
export const SelectWrapper = styled.div`
    position: relative;
    display: inline-block;
    width: 156px;
    display: flex;
    select {
        width: 100%;
        padding: 0 32px 0 10px;
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
    }

    .icon {
        position: absolute;
        right: 14px;
        top: 50%;
        transform: translateY(-50%);
        pointer-events: none;
        color: #333;
        font-size: 14px;
    }
`;
export const DomainSelectWrapper = styled(SelectWrapper)`
    width: 227px;
`;
export const CustomerDetailStyle = styled.div``;
export const CustomerItemStyle = styled.tr`
    td {
        &:nth-of-type(3),
        &:nth-of-type(4) {
            color: var(--Foundation-White-Darker, #4e4e4e);
        }
    }
`;
