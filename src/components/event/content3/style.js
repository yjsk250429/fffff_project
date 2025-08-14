import styled from 'styled-components';

export const ExclusiveSetStyle = styled.div`
    margin-top: 150px;
    text-align: center;
    strong {
        font-size: 40px;
        font-weight: 700;
        margin-bottom: 20px;
        display: block;
        span {
            font-weight: 300;
        }
    }
    em {
        display: block;
        color: var(--Foundation-White-Darker, #4e4e4e);
        font-size: 20px;
        line-height: 30px;
    }
    ul {
        display: flex;
        justify-content: center;
        gap: 57px;
    }
`;

export const ExclusiveSetItemStyle = styled.li`
    img {
        width: 400px;
    }
    p {
        font-weight: 600;
        font-size: 20px;
        color: var(--Foundation-Yellow-Darker, #594600);
        text-align: center;
    }
`;
