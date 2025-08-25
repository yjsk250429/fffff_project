import styled from 'styled-components';

export const MyPageMainStyle = styled.div`
    padding: 50px 0 0px;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    width: 1400px;
    margin: auto;
    h3 {
        margin-top: 30px;
        font-size: 45px;
        font-weight: 500;
        line-height: 1;
        text-align: center;
    }
`;
export const TabStyle = styled.ul`
    display: flex;
    margin-bottom: 135px;
    justify-content: center;
    li {
        font-size: 20px;
        font-weight: 600;
        margin-right: 60px;
        margin-top: 80px;
        padding: 0 10px;
        cursor: pointer;
        &:nth-of-type(2) {
            border-bottom: 2px solid var(--Foundation-Yellow-B, #000);
        }
        &:nth-of-type(4) {
            margin-right: 0;
        }
    }
`;
export const OrderStatusStyle = styled.div`
    width: 100%;
    .text-wrap {
        strong {
            font-size: 24px;
            font-weight: 600;
            line-height: 22px;
            display: block;
            margin-bottom: 16px;
            span {
                font-size: 16px;
                font-weight: 400;
                color: var(--Foundation-White-Darker, #4e4e4e);
                padding-left: 5px;
            }
        }
    }
    ul {
        background: var(--foundation-white-light-hover, #fafafa);
        li {
            padding: 67.207px 306.632px 65.84px 305.763px;
            display: flex;
            gap: 65px;
            align-items: center;
            p {
                text-align: center;
                display: flex;
                flex-direction: column;
                font-size: 20px;
                width: 122px;
                span {
                    font-size: 46px;
                }
            }
            svg {
                width: 50px;
                height: 50px;
            }
        }
    }
`;
export const OrderListStyle = styled.div`
    margin-top: 100px;

    strong {
        font-size: 24px;
        font-weight: 600;
        margin-bottom: 16px;
        display: block;
        span {
            font-size: 16px;
            font-weight: 400;
            line-height: 22px;
            color: var(--Foundation-White-Darker, #4e4e4e);
            padding-left: 8px;
        }
    }
    ul {
        background: var(--foundation-white-light-hover, #fafafa);
        padding: 27px 25px;
        margin-bottom: 250px;
    }
`;
export const OrderListItemStyle = styled.li`
    padding: 31.629px 41.82px 32.721px 40.43px;
    background: #fff;
    margin-bottom: 10px;
    em {
        font-size: 22px;
        font-weight: 600;
        line-height: 22px;
    }

    .list {
        display: flex;

        img {
            width: 148px;
            margin-right: 8px;
        }
        .text-wrap {
            .num {
                color: var(--Foundation-White-Dark, #a8a8a8);
                font-size: 14px;
                span {
                    color: var(--red, #f00);
                }
            }
            strong {
                font-size: 22px;
                font-weight: 400;
                line-height: 34px;
            }
            .price {
                font-weight: 700;
                font-size: 18px;
            }
            .more {
                color: var(--point, #002274);
                font-size: 18px;
                margin-top: 18px;
                align-items: center;
                display: flex;
                cursor: pointer;
            }
        }
    }
    .btn {
        display: flex;
        gap: 28px;
        margin-top: 16px;
    }
`;
