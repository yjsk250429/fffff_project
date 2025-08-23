import styled from 'styled-components';

export const SloganStyle = styled.div`
    .inner {
        display: flex;
        height: 900px;
        padding: 100px 0;
        align-items: center;
    }
    .text {
        text-align: center;
        margin-right: 200px;
        margin-left: 50px;
        position: relative;
        display: grid;
        place-items: center;
        h2 {
            font-size: 28px !important;
            font-weight: 800 !important;
            color: var(--foundation-yellow-dark-hover);
            margin: auto;
            margin-bottom: 17px !important;
            width: 380px;
            word-break: keep-all;

            &::before,
            &::after {
                content: '';
                display: block;
                background-image: url(/images/main/quote1.png);
                background-repeat: no-repeat;
                background-size: cover;
                background-position: 0 0;
                width: 24.5px;
                height: 17px;
                position: absolute;
                top: -20px;
            }
            &::before {
                left: 0px;
            }
            &::after {
                right: 0px;
                background-image: url(/images/main/quote2.png);
            }
        }
        span {
            display: block;
            width: 1px;
            height: 35px;
            margin-bottom: 17px;
            background: var(--foundation-yellow-dark-hover);
        }
        strong {
            display: block;
            margin-bottom: 10px;
            font-weight: 700;
            font-size: 18px;
        }
    }
    .video-wrap {
        width: 1000px;
        height: 702px;
    }
    video {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
    }
    @media screen and (max-width: 390px) {
        .inner {
            width: 354px;
            padding: 0;
            flex-direction: column-reverse;
            justify-content: start;
            align-items: start;
        }
        .text {
            width: 310px !important;
            margin: auto;
            h2 {
                font-size: 20px !important;
                width: 270px;
                &::before,
                &::after {
                    width: 11px;
                    height: 7px;
                }
            }
            strong {
                font-size: 12px;
            }
            p {
                font-size: 10px;
                line-height: 18px;
            }
            button {
                position: absolute;
                bottom: 65px;
                background: #fff;
                color: #000;
                width: 157px;
            }
        }
        .video-wrap {
            width: 354px;
            height: 400px;
            margin-bottom: 50px;
        }
    }
`;
