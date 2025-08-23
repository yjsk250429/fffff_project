import styled from 'styled-components';

export const MainContentStyle = styled.section`
    .inner {
    }
    h2 {
        font-size: 40px;
        font-weight: 600;
        font-family: 'EB Garamond', 'Pretendard Variable', 'Pretendard', system-ui, -apple-system,
            serif;
    }
    .img-wrap {
        overflow: hidden;
    }
    .text {
        width: 467px;
        margin-top: 115px;
        h2 {
            font-size: 40px;
            font-weight: 600;
            font-family: 'EB Garamond', 'Pretendard Variable', 'Pretendard', system-ui,
                -apple-system, serif;
            margin-bottom: 20px;
        }
        em {
            display: block;
            font-size: 24px;
            font-weight: 500;
            margin-bottom: 40px;
            color: var(--foundation-white-darker);
        }
        p {
            line-height: 25px;
            margin-bottom: 130px;
            font-size: 18px;
            color: var(--foundation-white-darker);
        }
    }
    @media screen and (max-width: 390px) {
        .text {
            margin-top: 20px;
            h2 {
                font-size: 22px;
                margin-bottom: 16px;
            }
            em {
                font-size: 16px;
                margin-bottom: 30px;
            }
            p {
                font-size: 12px;
            }
            button {
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
                width: 130px;
                height: 30px;
                line-height: 30px;
                font-size: 14px;
                border-color: var(--foundation-white-dark);
                padding: 0;
            }
        }
    }
`;
