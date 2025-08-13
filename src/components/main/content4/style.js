import styled from 'styled-components';

export const HairMainStyle = styled.div`
    background: var(--background2);
    .inner {
        width: 100%;
        display: flex;
        height: 1000px;
        padding: 93px 0;
        align-items: center;
    }
    .img-wrap {
        width: 1039px;
        height: 600px;
        margin-right: 140px;
        position: relative;
        img{
            position: absolute;
            left: -5%;
            top: -50%;
            transform:scale(0.9)
        }
    }
`;
