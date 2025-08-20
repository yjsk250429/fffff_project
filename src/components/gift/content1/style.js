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
        margin-top: 165px;
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
                cursor: pointer;
                text-align: center;
                a{

                .img{
                    width: 370px;
                    height: 495px;
                    overflow:hidden;
                    margin-bottom: 15px;
                    img {
                        transition:0.6s
                    }
                    &:hover{
                        img{
                            transform:scale(1.1);
                        }
                    }
                }
                p {
                    font-size: 20px;
                    font-weight: 500;
                }
            }
        }
    }
`;
