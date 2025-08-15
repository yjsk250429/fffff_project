import styled from 'styled-components';


export const ProductSearchWrap = styled.div`
    margin-bottom: 30px;
    position: relative;
    form {
        display: flex;
        justify-content: space-between;
        p {
            input[type='text'] {
                width: 350px;
                box-sizing: border-box;
                height: 45px;
                padding: 10px;
                border: 1px solid #999;
            }
            /* button {
                width: 100px;
                height: 45px;
                vertical-align: top;
            } */
            select {
                width: 200px;
                height: 45px;
                box-sizing: border-box;
                padding: 10px;
                border: 1px solid #999;
            }
            span {
                margin-left: 15px;
                cursor: pointer;
            }
        }
    }
`;

export const ProductListWrap = styled.article`
margin-top: 62px;
    &.product-wrap {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 32px;
        article {
            a{
                cursor: default;
            }
            width: 400px;
            /* box-sizing: border-box; */
            margin-bottom: 60px;
            .img-wrap {
                width: 100%;
                height: 400px;
                cursor: pointer;
                width: 100%;
                background: var(--background);
                position: relative;
                img {
                    width: 100%;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform:translate(-50%, -50%) scale(0.9);
                }
                i{
                    position: absolute;
                    top: 16px;
                    right: 16px;
                    font-size: 24px;
                }
            }
            .text-wrap{
                width: 100%;
           
                .product-info{
                    padding-top: 25px;
                    height: 111px;
                    position: relative;
                    strong{
                        display:block;
                        width: 300px;
                        font-size: 22px;
                        font-weight: 600;
                        margin-bottom: 36px;
                        word-break:keep-all;
                    }
                    span{
                            font-size: 16px;
                            font-weight: 400;
                            position: absolute;
                            top: 25px;
                            right: 0;
                            cursor: pointer;
                        }
                    }
                    em{
                        position: absolute;
                        bottom: 0;
                    }
                }
                .text-wrap{
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
                        font-size: 18px;
                    }
                    i{
                        font-size: 24px;
                        position: absolute;
                        top: 5px;
                        right: 0;      
                        cursor: pointer;   
                    }
                }
            }}
        }
        
`;
