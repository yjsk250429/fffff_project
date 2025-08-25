import styled from 'styled-components';

export const HairMainStyle = styled.div`
    background: var(--background2);
    .inner {
        width: 100%;
        display: flex;
        height: 1020px;
        padding: 93px 0;
        align-items: flex-start;
    }
    .img-wrap {
        width: 1039px;
        height: 600px;
        margin-right: 140px;
        position: relative;
        img {
            position: absolute;
            left: -5%;
            top: -50%;
            transform: scale(0.9);
        }
    }
    .swiper-slide {
        background: #e4ede4;
    }
    @media screen and (max-width: 390px) {
        background: none;
        .inner {
            display: block;
            width: 354px;
            padding: 0;
        }
        .img-wrap {
            width: 100%;
            height: 400px;
            img {
                /* width: 100%; */
                height: 100%;
                top: 0;
                left: 50%;
                transform: translateX(-50%) scale(1.2);
            }
        }
        .text {
            p {
                margin-bottom: 0;
            }
            button {
                bottom: 100px;
                transform: translateX(-50%);
            }
        }
        #container {
            bottom: 140px;
            .scroll {
                bottom: 15px;
            }
        }
    }
`;
