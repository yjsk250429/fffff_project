import styled from 'styled-components';

export const BodyMainStyle = styled.div`
    background: var(--background);
    .inner {
        width: 100%;
        display: flex;
        height: 1000px;
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
            left: 0;
            top: -50%;
        }
    }
    @media screen and (max-width: 390px) {
        background: none;
        .inner {
            display: block;
            width: 354px;
            padding: 32px 0 15px 0;
        }
        .img-wrap {
            width: 100%;
            height: 400px;
            img {
                width: 100%;
                top: 0;
            }
        }
        .text {
            button {
                bottom: 42px;
                transform: translateX(-50%);
            }
        }
    }
`;
export const Container = styled.div`
    position: absolute;
    right: 0;
    bottom: 0;
    @media screen and (max-width: 390px) {
        left: 0;
        bottom: 98px;
    }
`;

export const ContainerInner = styled.div`
    position: relative;
    .num {
        font-family: 'EB Garamond', serif;
        font-size: 14px;
        font-weight: 600;
        position: absolute;
        bottom: 71px;
        left: -310px;
        color: #000;
        span {
            &:first-child {
                margin-right: 220px;
            }
        }
    }
    @media screen and (max-width: 390px) {
        .num {
            display: none;
        }
    }
`;

export const SliderWrap = styled.div`
    margin: 0 auto 0 0;
    width: 1205px;
    height: 200px;
    overflow: visible;
    @media screen and (max-width: 390px) {
        width: 354px;
    }

    .swiper {
        height: 200px;
    }

    .swiper-wrapper {
        width: 305px;
        cursor: grab;
    }
    .swiper-slide {
        width: 305px;
        height: 200px;
        background: #e9e2da;
        position: relative;
        &:first-child {
            img {
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%) scale(1.3);
            }
        }
        img {
            height: 100%;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
        }
    }
    .swiper-scrollbar {
        display: none;
    }
    .slider__listItem {
        margin-right: 10px;
    }
`;

export const Scroll = styled.div`
    height: 1px;
    position: relative;
    left: -274px;
    bottom: 80px;
    margin-top: calc(40em / 16);
    width: 15%;
    overflow: hidden;
    border-radius: 0;
    &::before {
        content: '';
        position: absolute;
        inset: 0;
        display: block;
        margin: auto 0;
        width: 100%;
        height: 100%;
        background-color: var(--foundation-white-normal-hover);
    }

    /* Swiper의 실제 드래그 핸들 */
    & .swiper-scrollbar-drag {
        position: relative;
        top: 0;
        left: 0;
        z-index: 2;
        height: 100%;
        background-color: #000;
        border-radius: 0;
        transform-origin: right center;
        will-change: transform;
        cursor: grab;
    }
    @media screen and (max-width: 390px) {
        left: 50%;
        transform: translateX(-50%);
        bottom: 0px;
        width: 250px;
        height: 2px;
    }
`;

export const ScrollGrowbar = styled.div`
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    display: block;
    height: 100%;
    background: #000;
`;
