import styled from 'styled-components';


export const ProductSearchWrap = styled.div`
margin-top: 30px;
    form {
        display:flex;
        justify-content:space-between;
        .search {
            height: 24px;
            width: 235px;
            position: relative;
            i{
                position: absolute;
                font-size: 24px;
                left: 0;
                top: 50%;
                transform:translateY(-50%);
            }
            input[type="text"]{
                position: absolute;
                top: 50%;
                right: 0;
                transform:translateY(-50%);
                margin-left: 30px;
                width: 200px;
                height: 24px;
                border: none;
                border-bottom: 1px solid #000;
                padding:15px 0;
                box-sizing: border-box;
                font-size: 18px;
                &:focus{
                    outline:none;
                }
            }
          
        }
        .filter{
            position: relative;
            button{
                cursor: pointer;
                border: none;
                background: none;
                font-size: 24px;
                font-weight: 500;
                font-family: 'Pretendard', sans-serif;
            }
        }
   
    .option{
        border: 1px solid #000;
        width: 250px;
        height: 860px;
        padding:30px;
        box-sizing: border-box;
        position: absolute;
        right: 0;
        top: 36px;
        z-index:10;
        background: var(--w);
        display:none;
        &.on{
            display:block;
        }
        ul{
            margin-bottom: 20px;
            li{
                margin-bottom: 4px;
                &:first-child{
                    font-size: 18px;
                    margin-bottom: 8px;
                }
                input[type="checkbox"]{
                    margin-right: 8px;
                }
            }
        }
    }
}
`;

export const ProductListWrap = styled.article`
margin-top: 60px;
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
                        display: -webkit-box;     
                        -webkit-box-orient: vertical;
                        overflow: hidden;       
                        text-overflow: ellipsis; 
                        -webkit-line-clamp: 2;  
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
