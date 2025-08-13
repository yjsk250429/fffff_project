import styled from 'styled-components';

export const BestGiftStyle = styled.div`
    .inner {
        display: flex;
        gap: 144px;
        margin-top: 110px;
        justify-content: center;
    }
    .text-wrap {
        width: 222px;
        display: flex;
        flex-direction: column;
        /* justify-content: center; */
        margin-top: 80px;
        em {
            color: var(--Foundation-White-Darker, #4e4e4e);
            font-size: 16px;
            display: block;
        }
        strong {
            display: block;
            font-size: 46px;
            font-weight: 600;
            margin-bottom: 37px;
            line-height: 1;
        }
        p {
            margin-bottom: 122px;
            color: var(--Foundation-White-Darker, #4e4e4e);
            font-size: 16px;
            line-height: 30px;
        }
        .btn {
            button {
                width: 160px;
                height: 48px;
                box-sizing: border-box;
                font-size: 18px;
                /* font-weight: 700; */
                color: #fff;
                background: var(--Foundation-Yellow-B, #000);
                border: none;
            }
        }
    }
    .img-wrap {
        .list {
            display: flex;
            gap: 36px;
            li {
                text-align: center;
                img {
                    /* margin-bottom: 15px; */
                }
                .title {
                    font-size: 20px;
                    font-weight: 500;
                }
            }
        }
    }
`;
