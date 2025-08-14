import styled from 'styled-components';

export const Gift_3setStyle = styled.div`
    height: 1100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */
    box-sizing: border-box;
    position: relative;
    text-align: center;
    strong {
        font-size: 30px;
        font-weight: 600;
        display: block;
        margin-top: 100px;
    }
    ul {
        li {
            position: absolute;
            &::after {
                content: '';
                width: 1px;
                height: 84px;
                background: #000;
                position: absolute;
                bottom: -100px;
            }
            &:nth-of-type(1) {
                left: 630px;
                top: 275px;
            }
            &:nth-of-type(2) {
                bottom: 100px;
                left: 845px;

                &::after {
                    content: '';
                    width: 1px;
                    height: 84px;
                    background: #000;
                    position: absolute;
                    top: -100px;
                }
            }
            &:nth-of-type(3) {
                top: 275px;
                right: 610px;
                height: 106px;
                &::after {
                    height: 106px;
                    bottom: -140px;
                }
            }
        }
    }
    img {
        margin-top: 260px;
        width: 752px;
        height: 463px;
    }
`;
export const Gift_3setItemStyle = styled.li`
    em {
        color: var(--sub, #00274c);
        font-size: 24px;
        font-weight: 500;
        display: block;
        margin-bottom: 14px;
        line-height: 1;
    }
    p {
        font-size: 14px;
        line-height: 1.2;

        span {
            display: block;
            &:nth-child(2n) {
                text-align: center;
            }
        }
    }
`;
