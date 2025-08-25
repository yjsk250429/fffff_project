import styled from 'styled-components';

export const ProductDetailStyle = styled.article`
    .inner {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items:flex-start;
    }
    .img-wrap {
        flex: 1;
        >.sticky-img{
            background: var(--background);
            height: 886px;
            display:flex;
            justify-content: center;
            align-items: center;
            position:sticky;
            top: 150px;
        }
        img {
            width: 100%;
            height: 100%;
            display:block;
        }
    }
    .right {
        flex: 1;
        position: relative;
        .detail {
            width: 100%;
            position: relative;
            .top{
                padding: 50px 74px;
                box-sizing: border-box;
          
            form {
                margin-left: 400px;
               
            }
            em {
                display: block;
                margin-top: 70px;
                font-weight: 500;
            }
            h2 {
                font-weight: 700;
                font-size: 30px;
                margin-bottom: 30px;
            }
            strong {
                display: block;
                font-weight: 500;
                font-size: 28px;
                margin-bottom: 26px;
            }
            span {
                font-weight: 600;
                font-size: 18px;
            }
            .size {
                margin-top: 12px;
                margin-bottom: 26px;
                display: flex;
                gap: 10px;
                li {
                    width: 70px;
                    height: 32px;
                    border: 1px solid var(--sub);
                    border-radius: 50px;
                    text-align: center;
                    font-weight: 500;
                    line-height: 32px;
                    cursor: pointer;
                    &.on {
                        background: var(--sub);
                        color: #fff;
                    }
                }
            }
            span {
                display: block;
                &:last-of-type {
                    margin-bottom: 76px;
                }
            }
            p {
                position: relative;
                display: flex;
                justify-content: space-between;
                align-items: center;
                i {
                    font-size: 32px;
                    margin-top: 10px;
                    cursor: pointer;
                    &.active{
                        color: red;
                    }
                }
                button {
                    font-size: 20px;
                    font-weight: 600;
                    border-color: var(--foundation-white-normal);
                }
            }
        }
            .tabs {
                margin-top: 80px;
                position:sticky;
                width: 100%;
                height: 85px;
                display: flex;
                justify-content: space-around;
                box-shadow: 0px 7px 7px 0px rgba(0, 0, 0, 0.1);
                li {
                    height: 85px;
                    line-height: 85px;
                    font-size: 18px;
                    font-weight: 500;
                    color: var(--foundation-white-dark-hover);
                    cursor: pointer;
                    &.on {
                        color: #000;
                    }
                }
            }
        }
    }

`;
