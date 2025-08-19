import styled from 'styled-components';

export const DescStyle = styled.ul`
    width: 100%;
    li {
        width: 100%;

        img {
            width: 100%;
        }
    }
`;

export const IngredientStyle = styled.div`
    .inner {
        padding: 100px 40px;
        display: block;
    }
    h3 {
        text-align: center;
        margin-bottom: 30px;
        font-size: 20px;
        font-weight: 600;
    }
    ul {
        display: flex;
        justify-content: space-between;
        margin-bottom: 100px;
        li {
            display: flex;
            img {
                display: block;
                width: 100px;
                height: 100px;
                margin-right: 14px;
            }
            p {
                width: 305px;
                font-size: 14px;
                color: var(--foundation-white-darker);
                strong {
                    display: block;
                    font-weight: 500;
                    font-size: 18px;
                    color: #000;
                }
            }
        }
    }
    dl {
        display: grid;
        grid-template-columns: 120px 1fr; /* 제목은 120px 고정, 내용은 나머지 */
        row-gap: 18px;
        dt {
            font-weight: 500;
        }
        dd {
            font-size: 14px;
            color: var(--foundation-white-darker);
            &:last-child {
                p {
                    margin-bottom: 16px;
                }
            }
        }
    }
`;

export const RecommandListStyle = styled.div`
    .inner {
        width: 1700px;
        height: 850px;
        padding: 150px 140px;
        display: block;
        text-align: center;
    }
    h2 {
        font-size: 30px;
        font-weight: 600;
    }
    li {
        position: relative;
        .img-wrap {
            width: 324px;
            height: 324px;
        }
    }
`;
