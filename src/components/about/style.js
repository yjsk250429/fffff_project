import styled from 'styled-components';
export const Intro_VisualStyle = styled.section`
    .visual {
        width: 100%;
        height: 600px;
        background-image: url('/images/about/story01.png');
        background-position: 0 0;
        background-size: cover;
        background-repeat: no-repeat;
    }
`;
export const Bcorp_VisualStyle = styled.section`
    .visual {
        width: 100%;
        height: 600px;
        background-image: url('/images/about/Bcrop01.png');
        background-position: 0 0;
        background-size: cover;
        background-repeat: no-repeat;
    }
`;
export const Promise_VisualStyle = styled.section`
    .visual {
        width: 100%;
        height: 600px;
        background-image: url('/images/about/promise01.png');
        background-position: 0 0;
        background-size: cover;
        background-repeat: no-repeat;
    }
`;
export const TabBarStyle = styled.ul`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 170px;
    li {
        width: 110px;
        height: 30px;
        cursor: pointer;
        font-size: 20px;
        font-weight: 600;
        text-align: center;
        position: relative;
        &.on {
            &::after {
                content: '';
                display: block;
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
                width: 100%;
                height: 2px;
                background: #000;
            }
        }
    }
`;
