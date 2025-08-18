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
    }
`;

/* 슬라이더 컨테이너 */
export const SliderStyle = styled.section`
    width: 100%;
    height: 72px;
    border-bottom: 1px solid #e0e0e0;
    overflow: hidden;
`;

/* 무한 루프 애니메이션 - 개선된 버전 */
const marquee = keyframes`
    0%   { transform: translateX(0); }
    100% { transform: translateX(-33.333%); } /* 3개 세트 중 1개 세트만큼 이동 */
`;

export const AutoSliderStyle = styled.div`
    .track {
        display: flex;
        width: fit-content;
        animation: ${marquee} 30s linear infinite; /* 시간을 늘려서 더 부드럽게 */
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
    }

    /* 호버 시 애니메이션 일시정지 */
    /* &:hover .track {
        animation-play-state: paused;
    } */
`;
