import styled from 'styled-components';

export const NoResultStyle = styled.article`
    i {
        font-size: 50px;
        color: var(--foundation-white-normal);
    }
    p {
        font-size: 24px;
        font-weight: 600;
        margin-bottom: 10px;
        &:last-of-type {
            font-size: 18px;
            font-weight: 400;
        }
    }
`;
