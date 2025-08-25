import styled from 'styled-components';

export const LatestStyle = styled.article`
    h2 {
        font-size: 40px;
        font-weight: 600;
        margin-bottom: 10px;
        text-align: center;
        @media (max-width: 390px) {
            font-size: 18px;
            line-height: 1;
            margin-bottom: 8px;
        }
    }
    > em {
        display: block;
        text-align: center;
        font-weight: 500;
        font-size: 20px;
        color: var(--foundation-white-dark);
        margin-bottom: 90px;
        @media (max-width: 390px) {
            font-size: 10px;
            margin-bottom: 45px;
        }
    }
    h3 {
        font-size: 32px;
        font-weight: 500;
        @media (max-width: 390px) {
            display: none;
        }
    }
    .list-wrap {
        width: 1810px;
        height: 600px;
        margin-top: 20px;
        display: flex;
        gap: 30px;
        justify-content: space-between;
        align-items: center;
        position: relative;
        @media (max-width: 390px) {
            height: 295px;
            padding: 0 18px;
            margin-top: 0;
            gap: 9px;
            align-items: start;
        }
        .img-wrap {
            height: 600px;
            width: 390px;
            overflow: hidden;
            position: relative;
            @media (max-width: 390px) {
                width: 174px;
                height: 295px;
            }
            img {
                width: 100%;
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
                top: 0;

                @media (max-width: 390px) {
                    width: 171px;
                    height: 295px;
                }
            }
        }
    }

    .swiper {
        width: 1390px;
        height: 100%;
        @media (max-width: 390px) {
            margin-left: 0;
            margin-right: auto;
            position: relative;
            /* overflow: hidden; */
            list-style: none;
            padding: 0;
            z-index: 1;
            display: block;
        }
    }

    .swiper-slide {
        font-size: 18px;
        @media (max-width: 390px) {
            width: 171px;
            height: 239px;
        }
        .img-wrap {
            background: var(--background);
            width: 100%;
            height: 486px;
            margin-bottom: 15px;
            @media (max-width: 390px) {
                width: 175px;
                height: 239px;
                position: relative;
            }

            img {
                display: block;
                width: 100%;
                @media (max-width: 390px) {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%, -50%)  scale(0.9);

                }
            }
        }
        .text {
            height: 95px;
            text-align: left;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            @media (max-width: 390px) {
                line-height: 1.3;
                height: auto;
            }
            strong {
                font-size: 22px;
                font-weight: 600;
                display: block;
                @media (max-width: 390px) {
                    font-size: 10px;
                }
            }
            span {
                display: block;
                font-weight: 600;
                font-size: 20px;
                color: var(--foundation-white-dark-hover);
                @media (max-width: 390px) {
                    font-size: 10px;
                    font-weight: 500;
                }
            }
            em {
                font-size: 20px;
                font-weight: 600;
                color: var(--b);
                @media (max-width: 390px) {
                    font-size: 10px;
                }
            }
        }
    }
`;
