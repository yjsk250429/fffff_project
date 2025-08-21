import styled from 'styled-components';
export const PaymentStyle = styled.div`
    width: 1600px;
    padding: 100px 0;
    margin: auto;
    h2 {
        text-align: center;

        font-size: 40px;
        font-weight: 600;
        margin-bottom: 100px;
    }
    // export const PaymentStyle = styled.div
`;
//     /* border: 1px solid #dcdcdc; */
//     width: 1030px;
//     padding: 50px 55px;
//     box-sizing: border-box;
//     position: relative;
//     margin-right: 50px;
//     background: #000;
// `;

export const PaymentCompleteStyle = styled.div`
    width: 1700px;
    padding: 100px 0;
    margin: auto;
    h2 {
        font-size: 40px;
        font-weight: 600;
        margin-bottom: 20px;
        text-align: center;
    }
    .completed-info {
        width: 830px;
        padding: 75px;
        box-sizing: border-box;
        border: 1px solid #a8a8a8;
        margin: auto;
        h3 {
            width: 100%;
            color: var(--foundation-white-darker);
            font-size: 30px;
            font-weight: 500;
            text-align: center;
            margin-bottom: 120px;
            position: relative;
            span {
                color: var(--red);
            }
            &::after {
                content: '';
                display: block;
                position: absolute;
                width: 100%;
                height: 1px;
                background: var(--foundation-white-darker);
                bottom: -60px;
            }
        }
        .info-wrap {
            li {
                p {
                    span {
                    }
                }
            }
        }
    }
    p {
        margin: auto;
        margin-top: 100px;
        display: flex;
        gap: 10px;
    }
`;
