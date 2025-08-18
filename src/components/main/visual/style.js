import styled from 'styled-components';

export const VisualStyle = styled.section`
    width: 100%;
    overflow: hidden;
    .inner {
        width: 100%;
        height: 800px;
    }
    video {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
    }
`;
