import styled from 'styled-components';

export const ProductStyle = styled.div`
overflow:hidden;
    .inner {
        padding-top: 100px;
        @media (max-width: 390px) {
            width: 390px;
            padding-top: 45px;
        }
    }

    .controls {
        position: relative;
        @media (max-width: 390px) {
        }
        .tabs {
            margin-top: 180px;
            display: flex;
            gap: 30px;
            font-size: 24px;
            @media (max-width: 390px) {
                margin-top: 100px;
                padding: 0 18px;
                font-size: 18px;
                gap: 10px;
            }
            li {
                color: var(--foundation-white-dark);
                cursor: pointer;

                @media (max-width: 390px) {
                    display: none;
                }
                &.on {
                    font-weight: 500;
                    color: var(--b);
                }
            }
        }
        h4 {
            display: none;
            @media (max-width: 390px) {
                padding: 0 18px;
                box-sizing: border-box;
                text-align: center;
                display: block;
                font-size: 18px;
                line-height: 1;
                font-weight: 700;
                position: relative;
                margin-bottom: 35px;
                i {
                    margin-left: 4px;
                    font-size: 18px;
                }
            }
        }
        p {
            display: none;
            @media (max-width: 390px) {
                font-size: 14px;
                font-weight: 500;
                display: block;
                margin-left: 18px;
            }
        }
        .sort {
            position: absolute;
            right: 0;
            top: 0;
            @media (max-width: 390px) {
                right: 18px;
                top: 53px;
            }
            label {
                opacity: 0;
            }
            select {
                width: 180px;
                height: 45px;
                padding: 10px 15px;
                font-size: 18px;
                border: 1px solid #000;
                font-family: 'Pretendard', sans-serif;
                appearance: none;
                -webkit-appearance: none;
                -moz-appearance: none;
                background-image: url('/images/dropdownArrow.png');
                background-repeat: no-repeat;
                background-position: right 15px center;
                background-size: 16px;
                @media (max-width: 390px) {
                    width: 90px;
                    height: 20px;
                    padding: 0 5px;
                    box-sizing: border-box;
                    font-size: 12px;
                    font-weight: 400;
                    background-size: 10px;
                    background-position: right 5px center;
                }
            }
        }
    }
`;
