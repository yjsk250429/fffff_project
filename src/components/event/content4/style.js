import styled from 'styled-components';

export const NoticeStyle = styled.div`
    display: flex;
    flex-direction: column;
    margin: 123px 485px;
    .title {
        margin-top: 40px;
        color: var(--Foundation-White-Darker, #4e4e4e);
        font-size: 20px;
        font-weight: 600;
        display: flex;
        align-items: center;
        gap: 15px;
        margin-bottom: 30px;
    }
    .desc {
        display: flex;
        flex-direction: column;
        /* align-self: center; */
        gap: 10px;
        p {
            font-size: 20px;
            color: var(--Foundation-White-Darker, #4e4e4e);
        }
    }
`;
export const Event3Style = styled.div`
    margin-top: 280px;
`;
export const EventListStyle = styled.div``;
export const No1Style = styled.div`
    display: flex;
    justify-content: end;
    gap: 207px;
    margin-bottom: 120px;
    img {
        width: 616px;
    }
    .text-wrap {
        width: 660px;
        justify-content: center;
        .title {
            border-bottom: 1px solid var(--foundation-white-dark-active, #656565);
            position: relative;
            padding-bottom: 24px;
            em {
                color: var(--foundation-blue-dark-active, #001342);
                font-family: 'EB Garamond';
                font-weight: 700;
                font-size: 100px;
                line-height: 35px;
                position: absolute;
                left: 0;
                bottom: 45%;
            }
            span {
                color: var(--foundation-white-dark-active, #656565);
                font-family: 'EB Garamond';
                font-size: 16px;
                line-height: 35px;
                font-weight: 500;
                display: block;
                margin-left: 128px;
            }
            strong {
                font-size: 40px;
                font-weight: 700;
                display: block;
                margin-left: 128px;
                line-height: 1;
            }
        }
        display: flex;
        flex-direction: column;
        gap: 30px;
        p {
            color: var(--foundation-white-dark-active, #656565);
            font-size: 24px;
        }
        .desc {
            p {
                display: flex;
                align-items: center;
                color: #b7b5b5;
                font-size: 16px;
                line-height: 26px;
            }
        }
    }
`;
export const No2Style = styled.div`
    display: flex;
    justify-content: start;
    gap: 207px;
    margin-bottom: 120px;

    .text-wrap {
        width: 660px;
        justify-content: center;
        text-align: end;
        .title {
            border-bottom: 1px solid var(--foundation-white-dark-active, #656565);
            position: relative;
            padding-bottom: 24px;
            em {
                color: var(--foundation-blue-dark-active, #001342);
                font-family: 'EB Garamond';
                font-weight: 700;
                font-size: 100px;
                line-height: 35px;
                position: absolute;
                right: 0;
                bottom: 45%;
            }
            span {
                color: var(--foundation-white-dark-active, #656565);
                font-family: 'EB Garamond';
                font-size: 16px;
                line-height: 35px;
                font-weight: 500;
                display: block;
                margin-right: 128px;
            }
            strong {
                font-size: 40px;
                font-weight: 700;
                display: block;
                margin-right: 128px;
                line-height: 1;
            }
        }
        display: flex;
        flex-direction: column;
        gap: 30px;
        p {
            color: var(--foundation-white-dark-active, #656565);
            font-size: 24px;
        }
        .desc {
            p {
                display: flex;
                align-items: center;
                color: #b7b5b5;
                font-size: 16px;
                line-height: 26px;
                justify-content: end;
            }
        }
    }
`;
