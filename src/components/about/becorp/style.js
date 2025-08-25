import styled from 'styled-components';

export const Con2Section = styled.section`
    min-height: 1500px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url('/images/about/becorp_bg.png');
    background-position: 0 0;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100vw;
    margin-left: calc(-50vw + 50%);
`;

export const VideoEl = styled.video`
    width: 70%;
    max-width: 1600px;
    height: auto;
    transform: scale(1);
    transform-origin: center center;
    transition: transform 0.5s ease-out;
`;

export const Bcorp_VisualStyle = styled.section`
    .visual {
        width: 100%;
        height: 600px;
        background-image: url('/images/about/Bcrop01.png');
        background-position: 0 0;
        background-size: cover;
        background-repeat: no-repeat;
    }
`;

export const BcorpStyle = styled.article`
overflow:hidden;
    #con1 {
        background-image: url('/images/about/Bcrop02.png');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        width: 100vw;
        margin-left: calc(-50vw + 50%);
        height: 400px;
        text-align: center;
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        strong {
            font-size: 30px;
            font-weight: 600;
            display: block;
            margin-bottom: 55px;
        }
        p {
            font-size: 16px;
            font-weight: 500;
            line-height: 22px;
            color: var(--Foundation-White-Darker, #4e4e4e);
        }
    }
    #con2 {
        display: flex;
        justify-content: center;
    }
    #con3 {
        display: flex;
        gap: 165px;
        justify-content: center;
        margin-bottom: 300px;
        margin-top: 200px;
        .text-wrap {
            width: 655px;
        }
        strong {
            font-size: 40px;
            font-weight: 700;
            display: block;
            margin-bottom: 44px;
            line-height: 1.2;
        }
        p {
            color: var(--Foundation-White-Darker, #4e4e4e);
            margin-bottom: 16px;
            font-weight: 500;
            line-height: 1.4;
        }
        .left {
            text-align: right;
            .text-wrap {
                strong {
                    margin-top: 90px;
                    line-height: 1.2;
                }
                p {
                    color: var(--Foundation-White-Darker, #4e4e4e);
                    margin-bottom: 16px;
                    font-weight: 500;
                    line-height: 1.4;
                }
            }
            .img-wrap {
                margin-top: 104px;
            }
        }
        .right {
            strong {
                margin-top: 60px;
            }
        }
    }
    #con4 {
        text-align: center;
        strong {
            font-size: 30px;
            font-weight: 600;
            display: block;
            margin-bottom: 30px;
        }
        p {
            color: var(--Foundation-White-Darker, #4e4e4e);
            font-size: 16px;
            line-height: 25px;
            margin-bottom: 100px;
        }
        ul {
            display: flex;
            gap: 80px;
            justify-content: center;
            text-align: center;
            li {
                margin-bottom: 122px;
                width: 356px;
                height: 670px;
                img {
                    margin-bottom: 40px;
                }
                .title {
                    font-size: 24px;
                    font-weight: 700;
                    /* margin-top: 40px; */
                }
                .desc {
                    margin-bottom: 16px;
                    width: 315px;
                    margin: auto;
                    padding-bottom: 16px;
                }
            }
        }
    }
`;
