import styled from 'styled-components';

export const WishEmptyStyle = styled.section`
    .inner {
        padding: 300px 0;
        text-align: center;
    }
    h2 {
        font-size: 40px;
        font-weight: 600;
        margin-bottom: 20px;
    }
    em {
        display: block;
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 30px;
    }
`;

export const WishListStyle = styled.div`
    width: 1600px;
    padding: 100px 0;
    margin: auto;
    h2 {
        font-size: 40px;
        font-weight: 500;
        text-align: center;
        margin-bottom: 50px;
    }
    .wishlist {
        width: 1030px;
        padding: 50px 55px;
        border: 1px solid #999;
        box-sizing: border-box;
        font-size: 16px;
        font-weight: 600;
        position: relative;
        margin: auto;
    }
`;

export const WishtItemStyle = styled.ul`
    li {
        width: 920px;
        height: 150px;
        display: flex;
        align-items: center;
        margin-top: 40px;
        .checkbox-wrap {
            width: 16px;
            height: 16px;
            margin-right: 14px;
            input[type='checkbox'] {
                accent-color: var(--foundation-yellow-b);
                width: 16px;
                height: 16px;
                margin: 0;
                // 체크박스와 텍스트 간격
            }
        }
        .product-image {
            width: 150px;
            height: 150px;
            margin-right: 25px;
            img {
                width: 150px;
                height: 150px;
            }
        }
        .product-info {
            .product-name {
                width: 715px;
                position: relative;
                font-size: 18px;
                font-weight: 500;
                i {
                    position: absolute;
                    right: 0;
                    font-size: 18px;
                    color: #999;
                }
            }
            .product-size {
                font-size: 16px;
                font-weight: 400;
                color: #555;
            }
            .quantity-control {
                width: 715px;
                height: 30px;
                margin-top: 14px;
                display: flex;
                align-items: center;
                position: relative;
                .btn {
                    color: #594600;
                    width: 121px;
                    height: 30px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 14px;
                    font-weight: 500;
                    border: 1px solid var(--foundation-yellow-darker);
                    cursor: pointer;
                }
                .item-price {
                    position: absolute;
                    color: var(--foundation-yellow-b);
                    width: 100px;
                    text-align: end;
                    font-size: 18px;
                    font-weight: 700;
                    right: 0;
                    top: 0;
                    border: none;
                }
            }
        }
    }
`;
