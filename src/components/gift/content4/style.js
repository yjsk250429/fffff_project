import styled from 'styled-components';

export const SheaButterStyle = styled.div`
    .inner {
        margin-top: 150px;
        .img-wrap {
            margin-top: 45px;
            margin-bottom: 170px;
            ul {
                display: flex;
                gap: 40px;
                li {
                    display: flex;
                    flex-direction: column;
                    /* border: 1px solid; */
                    gap: 76px;
                    &:nth-of-type(2) {
                        margin-top: 308px;
                    }
                    img {
                    }
                    p {
                        color: var(--Foundation-White-Dark, #a8a8a8);
                        font-size: 20px;
                        line-height: 30px;
                    }
                }
            }
        }
    }
`;
