import styled from 'styled-components';

export const ProductBannerStyle = styled.section`
    height: 600px;
    @media (max-width: 390px) {
        height: 400px;
        background-position: center center;
    }
    .inner {
        padding: 130px 0;
        @media (max-width: 390px) {
            padding: 0 35px;
        }
    }
    .swiper {
        width: 100%;
        height: 100%;
        @media (max-width: 390px) {
            height: 400px;
        }
    }
    .swiper-slide {
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        background-position: 0 0;
        background-repeat: no-repeat;
        background-size: cover;
        @media (max-width: 390px) {
            width: 171px;
            /* height: 400px; */
            background-position: center center;
        }
        &.bn1 {
            background-image: url('/images/banner/list_banner0.jpg');
        }
        &.bn2 {
            background-image: url('/images/banner/list_banner4.jpg');
        }
        &.bn3 {
            background-image: url('/images/banner/list_banner2.jpg');
        }
        &.bn4 {
            background-image: url('/images/banner/list_banner1.jpg');
        }
        &.bn5 {
            background-image: url('/images/banner/list_banner3.jpg');
        }
        .inner {
            color: var(--w);
            padding-left: 190px;
            @media (max-width: 390px) {
                padding-top: 230px;
                padding-left: 86px;
            }
        }
        span {
            font-size: 26px;
            display: block;
            margin-bottom: 10px;
            @media (max-width: 390px) {
                font-size: 10px;
                font-weight: 400;
                line-height: 1;
                margin-bottom: 5px;
            }
        }
        strong {
            font-size: 60px;
            line-height: 65px;
            font-weight: 700;
            @media (max-width: 390px) {
                font-size: 14px;
                font-weight: 700;
                line-height: 1.2;
            }
            span {
                font-size: 60px;
                font-weight: 500;
                @media (max-width: 390px) {
                    font-size: 14px;
                    font-weight: 600;
                }
            }
        }
        em {
            font-size: 20px;
            margin-top: 20px;
            margin-bottom: 80px;
            display: block;
            @media (max-width: 390px) {
                margin-top: 10px;
                font-size: 10px;
                font-weight: 400;
            }
        }
        .more {
            width: 110px;
            position: relative;
            color: var(--w);
            i {
                font-size: 24px;
                position: absolute;
                top: -2px;
                right: 0px;
                @media (max-width: 390px) {
                    font-size: 11px;
                }
            }
            @media (max-width: 390px) {
                display: none;
            }
        }
    }
    .swiper-scrollbar.swiper-scrollbar-horizontal {
        width: 1314px;
        height: 5px;
        left: 50%;
        transform: translateX(-50%);
        bottom: 70px;
        background: none;
        border: 1px solid var(--w);
        border-radius: 0;
        @media (max-width: 390px) {
            width: 290px;
            height: 1.5px;
            bottom: 30px;
            overflow: hidden;
        }
    }
    .swiper-scrollbar-drag {
        background: var(--w);
        border-radius: 0;
    }
    .swiper-button-prev,
    .swiper-button-next {
        color: var(--w);
        transform: scale(0.8);
        @media (max-width: 390px) {
            transform: scale(0.25);
        }
    }

    .swiper-button-prev {
        left: 120px;
        @media (max-width: 390px) {
            left: 35px;
        }
    }
    .swiper-button-next {
        right: 120px;
        @media (max-width: 390px) {
            right: 35px;
        }
    }
`;
