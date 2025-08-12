import styled from 'styled-components';

export const BodyMainStyle = styled.div`
    background: var(--background);
    .inner {
        width: 100%;
        display: flex;
        height: 1000px;
        padding: 93px 0;    
        align-items: center;
    }
    .img-wrap {
        width: 1039px;
        margin-right: 140px;
        position: relative;
        img{
            position: absolute;
            left: 0;
            top: -50%;
        }
    }
   
`;
