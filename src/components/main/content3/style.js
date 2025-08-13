import styled from 'styled-components';

export const HandMainStyle = styled.div`
    background: var(--foundation-blue-light);
    .inner {
        width: 100%;
        display: flex;
        height: 1000px;
        padding: 93px 0;
        align-items: flex-start;
    }
    .text{
        margin: 0 160px 0 324px;
    }
    .img-wrap {
        width: 1018px;
        height: 600px;
        overflow: hidden;
        position: relative;
        img{
            position: absolute;
            left: 0;
            top: -70%;
        }
    }

`;
