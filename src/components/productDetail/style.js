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
background: #FDFDFD;
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
        margin-bottom: 60px;
    }
    ul{
        display:flex;
        flex-wrap: wrap;
        justify-content:space-between;
        gap:20px;
        li {
            width: 340px;
            height: 340px;
            margin-bottom: 60px;
            a{
                cursor: default;

            }
            .img-wrap {
                width: 100%;
                height: 100%;
                cursor: pointer;
                position: relative;
                img {
                width: 100%;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%) scale(0.9);
                }
                i {
                position: absolute;
                top: 16px;
                right: 16px;
                font-size: 24px;
                &.active{
                    color: red;
                }
                }
            }
            }
            .text-wrap {
        width: 100%;
        .product-info {
            padding-top: 15px;
            height: 85px;
            position: relative;
            text-align: left;
            strong {
                display: block;
                width: 250px;
                line-height: 1.2;
                font-size: 20px;
                font-weight: 600;
                margin-bottom: 36px;
                word-break: keep-all;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                overflow: hidden;
                text-overflow: ellipsis;
                -webkit-line-clamp: 2;
            }
            span {
                font-size: 14px;
                font-weight: 400;
                position: absolute;
                top: 15px;
                right: 0;
                cursor: pointer;
            }
        }
        em {
            position: absolute;
            bottom: 0;
        }
    }

        .price-info {
            width: 100%;
            line-height: 35px;
            border-top: 1px solid var(--foundation-white-normal);
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 10px;
            position: relative;
            span {
                font-size: 16px;
            }
            i {
                font-size: 20px;
                position: absolute;
                top: 5px;
                right: 0;
                cursor: pointer;
                &.active{
                    color:var(--foundation-yellow-dark) ;
                }
            }
        }
        }
    
`;
