import styled from 'styled-components';

export const GiftVisualStyle = styled.section`
    .visual {
        width: 100%;
        height: 600px;
        /* background-image: url();
    background-position: 0 0;
    background-size: cover;
    background-repeat: no-repeat; */
        background: pink;
    }
`;

export const SliderStyle = styled.section`
    width: 100%;
    height: 72px;
    border-bottom: 1px solid #e0e0e0;
`;
export const AutoSliderStyle = styled.div`
    .marquee {
        position: relative;
        width: 100vw;
        max-width: 100%;
        height: 200px;
        overflow-x: hidden;
    }

    .track {
        position: absolute;
        white-space: nowrap;
        will-change: transform;
        animation: marquee 30s linear infinite;
    }

    @keyframes marquee {
        from {
            transform: translateX(0);
        }
        to {
            transform: translateX(-70%);
        }
    }
    .content {
        ul {
            display: flex;
            gap: 100px;
            justify-content: center;
            align-items: center;
            width: 1920px;
            height: 72px;

            li {
              font-family: 'EB Garamond', 'Pretendard Variable', 'Pretendard', system-ui, -apple-system, serif;
                width: 100px;
                font-size: 20px;
            }
        }
    }
`;
