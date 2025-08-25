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
        display: block !important;
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
        display: block !important;
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
                background: var(--background);
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

export const ReviewStyle = styled.article`
.inner{
    padding-top: 50px;
    display:block !important;
    width: 1700px;
}
    h2{
        text-align: center;
        margin-bottom: 40px;
        font-weight: 600;
        font-size: 40px;
    }
    .review-wrap{
        border-top: 1px solid #000;
        padding-top: 10px;
        padding-bottom: 150px;
        .controls{
            display:flex;
            width: 100%;
            flex-wrap: wrap;
            justify-content: space-between;
            .totalRate{
                margin-right: 1270px;
                margin-bottom: 50px;
                font-size: 20px;
            }
            .sorts{
                display:flex;
                gap: 20px;
                span{
                    cursor: pointer;
                    font-size: 18px;
                    &.on{
                        font-weight: 600;
                    }
                    &:first-child{
                        position: relative;
                        &::after{
                            content:'';
                            display:block;
                            width: 2px;
                            height: 15px;
                            background: var(--foundation-white-normal-hover);
                            position: absolute;
                            right: -12px;
                            top: 4px;
                            /* transform:translateY(-50%); */
                        }
                    }
                }
            }
            .filterBtns{
                margin-bottom: 40px;
                button{
                    margin-right: 4px;
                    padding:0;
                    line-height: 35px;
                }
            }
        }
        .write{
            text-align:end;
            margin-right: 30px;
        }
    }
`;

export const ReviewListStyle = styled.ul`
display:flex;
flex-wrap: wrap;
justify-content:space-between;
    li{
        display:flex;
        margin-bottom: 60px;
        .img-wrap{
            width: 180px;
            height: 180px;
            margin-right: 16px;
            background: var(--background);
        }
        .text-wrap{
            padding:10px 0;
            box-sizing: border-box;
            width: 600px;
            .rate{
                display:flex;
                justify-content:space-between;
                span{
                    &:last-child{
                        color: var(--foundation-white-dark);
                    }
                }
            }
            .content{
                margin: 16px 0;
                height: 80px;
                color: var(--foundation-white-darker);
            }
            .thumbs{
                display:flex;
                justify-content:space-between;
                font-size: 14px;
                strong{
                    color: var(--foundation-white-dark);
                }
                span{
                    display:block;
                    position: relative;
                    color: var(--foundation-white-darker);
                    i{
                        cursor: pointer;
                        font-size: 16px;
                        color: #000;
                        position: absolute; 
                        top: 50%;
                        transform:translateY(-38%);
                        right: 20px;
                    }
                }
            }

        }
    }
`;