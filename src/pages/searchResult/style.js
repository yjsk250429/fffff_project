import styled from 'styled-components';

export const SearchResultStyle = styled.section`
    .inner {
        padding: 150px 0;
        text-align: center;
    }
    h3 {
        font-size: 40px;
        font-weight: 600;
        margin-bottom: 8px;
    }
    em {
        font-size: 18px;
        color: var(--foundation-blue-point);
    }
    form {
        margin: 32px auto;
    }
    ul {
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        gap: 32px;
        text-align: left;
        li {
            em {
                color: #000;
            }
        }
    }
`;
