import styled from 'styled-components';

export const ProductDetailStyle = styled.article`
    .inner {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
    .img-wrap {
        background: var(--background);
        width: 50%;
        height: 886px;
        position: relative;
        img {
            height: 100%;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }
    .right {
        width: 50%;
        position: relative;
        height: 886px;
        overflow-x: hidden;
        scrollbar-width: none;
        .detail {
            width: 100%;
            height: 800px;
            padding: 50px 100px;
            position: relative;
            box-sizing: border-box;
            form {
                margin-left: 400px;
                margin-bottom: 30px;
                width: 400px;
                height: 45px;
                background: var(--foundation-white-light-active);
                padding: 15px 20px;
                box-sizing: border-box;
                position: relative;
                input[type='text'] {
                    background: none;
                    border: none;
                    height: 45px;
                    position: absolute;
                    left: 20px;
                    top: 50%;
                    transform: translateY(-50%);
                    color: var(--foundation-white-darker);
                    font-family: 'Pretendard', sans-serif;
                    font-size: 14px;
                    font-weight: 500;
                }
                i {
                    position: absolute;
                    right: 10px;
                    top: 50%;
                    transform: translateY(-40%);
                    font-size: 24px;
                    color: var(--foundation-white-darker);
                }
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
                }
                button {
                    font-size: 20px;
                    font-weight: 600;
                    border-color: var(--foundation-white-normal);
                }
            }
            .tabs {
                margin-top: 80px;
                position: absolute;
                bottom: 0;
                left: 50%;
                transform: translateX(-50%);
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
    .scrollZone {
        width: 100%;
    }
`;
