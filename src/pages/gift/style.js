import styled, { keyframes } from 'styled-components';

/* 배너 */
export const GiftVisualStyle = styled.section`
    .visual {
        width: 100%;
        height: 600px;
        background-image: url('/images/gift/gift_banner.png');
        background-position: 0 0;
        background-size: cover;
        background-repeat: no-repeat;

        @media (max-width: 390px) {
            height: 400px;
            background-position: center center;
        }
    }
`;

export const SliderStyle = styled.section`
    width: 100%;
    height: 72px;
    border-bottom: 1px solid #e0e0e0;
    overflow: hidden;
    @media (max-width: 390px) {
        height: 44px;
    }
`;

const marquee = keyframes`
    0%   { transform: translateX(0); }
    100% { transform: translateX(-33.333%); } 
`;

export const AutoSliderStyle = styled.div`
    .track {
        display: flex;
        width: fit-content;
        animation: ${marquee} 30s linear infinite;
        @media (max-width: 390px) {
            animation: ${marquee} 25s linear infinite;
        }
    }

    .item {
        font-family: 'EB Garamond', 'Pretendard Variable', 'Pretendard', system-ui, -apple-system,
            serif;
        font-size: 20px;
        padding: 0 60px;
        white-space: nowrap;
        display: flex;
        align-items: center;
        height: 72px;
        flex-shrink: 0;
        @media (max-width: 390px) {
            height: 44px;
            font-size: 12px;
            line-height: 72px;
            padding: 0 30px;
        }
    }

    /* 호버 시 애니메이션 일시정지 */
    /* &:hover .track {
        animation-play-state: paused;
    } */
`;
