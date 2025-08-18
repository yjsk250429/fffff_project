import styled from 'styled-components';
export const Intro_VisualStyle = styled.section`
    .visual {
        width: 100%;
        height: 600px;
        background-image: url('/images/about/story01.png');
        background-position: 0 0;
        background-size: cover;
        background-repeat: no-repeat;
    }
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
export const Promise_VisualStyle = styled.section`
    .visual {
        width: 100%;
        height: 600px;
        background-image: url('/images/about/promise01.png');
        background-position: 0 0;
        background-size: cover;
        background-repeat: no-repeat;
    }
`;
export const TabBarStyle = styled.ul`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 170px;
    li {
        width: 110px;
        height: 30px;
        cursor: pointer;
        font-size: 20px;
        font-weight: 600;
        text-align: center;
        position: relative;
        &.on {
            &::after {
                content: '';
                display: block;
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
                width: 100%;
                height: 2px;
                background: #000;
            }
        }
    }
`;

export const IntroStyle = styled.article`
    .inner {
        #con1 {
            margin-top: 175px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            text-align: center;
            align-items: center;
            position: relative;
            em {
                color: var(--point, #002274);
                display: block;
                margin-bottom: 12px;
            }
            strong {
                font-size: 30px;
                font-weight: 600;
                display: block;
                width: 100%;
                margin-bottom: 52px;
                position: relative;
                span {
                    color: var(--point, #002274);
                }
                &::after {
                    content: '';
                    width: 625px;
                    height: 1px;
                    background: #4e4e4e;
                    position: absolute;
                    right: 0;
                    top: 50%;
                    transform: translateY(-50%);
                }
                &::before {
                    content: '';
                    width: 625px;
                    height: 1px;
                    background: #4e4e4e;
                    position: absolute;
                    left: 0;
                    top: 50%;
                    transform: translateY(-50%);
                }
            }
            .desc {
                display: flex;
                flex-direction: column;
                gap: 20px;
                p {
                    font-size: 16px;
                    line-height: 22px;
                    display: flex;
                    /* margin-bottom: 20px; */
                    color: var(--Foundation-White-Darker, #4e4e4e);
                }
                margin-bottom: 175px;
            }
            .img {
                justify-content: space-between;
                display: flex;
                gap: 780px;
                position: absolute;
                bottom: 175px;
            }
        }
        #con2 {
            background-repeat: no-repeat;
            background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)),
                url('/images/about/story02.png') no-repeat center/cover;
            width: 100vw;
            height: 900px;
            max-width: none;
            margin-left: calc(-50vw + 50%);
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 280px;
            color: var(--w);
            strong {
                text-shadow: 5px 10px 5px rgba(0, 0, 0, 0.8);
                display: block;
                font-family: 'EB Garamond';
                font-size: 40px;
                font-weight: 600;
            }
            em {
                text-shadow: 5px 10px 5px rgba(0, 0, 0, 0.7);
                font-size: 22px;
                font-weight: 500;
                margin-bottom: 60px;
                display: block;
            }
            p {
                font-size: 16px;
                line-height: 25px;
                color: #e0dddd;
            }
        }
        #con3 {
            margin-bottom: 170px;
            .head {
                text-align: center;
                span {
                    color: var(--Foundation-White-Darker, #4e4e4e);
                    font-weight: 400;
                }
            }
            img {
                width: 616px;
                height: 413px;
            }
            em {
                color: var(--foundation-blue-dark-active, #001342);
                font-family: 'EB Garamond', serif;
                line-height: 35px;
                font-weight: 700;
                font-size: 100px;
            }
            span {
                color: var(--foundation-white-dark-active, #656565);
                font-family: 'EB Garamond';
                font-size: 16px;
                font-weight: 600;
                line-height: 35px;
            }
            strong {
                font-size: 40px;
                font-weight: 600;
                line-height: 35px;
            }
            .head {
                span {
                    display: block;
                    margin-top: 140px;
                }
                h3 {
                    font-size: 40px;
                    font-weight: 600;
                    font-family: 'EB Garamond';
                }
                margin-bottom: 150px;
            }
            .list {
                width: 100vw;
                max-width: none;
                margin-left: calc(-50vw + 50%);
                .story_right {
                    /* 01,03*/
                    display: flex;
                    justify-content: end;
                    gap: 210px;
                    .left {
                        position: relative;
                        margin-top: 90px;
                        /* border: 1px solid #000; */
                        width: 684px;
                        em {
                        }
                        span {
                            position: absolute;
                            top: -22px;
                            left: 125px;
                        }
                        strong {
                            margin-left: 20px;
                        }
                        p {
                            margin-top: 60px;
                            font-size: 20px;
                            line-height: 30px;
                            color: var(--foundation-white-dark-active, #656565);
                            position: relative;
                            &::after {
                                content: '';
                                width: 658px;
                                height: 1px;
                                background: #656565;
                                position: absolute;
                                left: 0;
                                top: -35px;
                            }
                        }
                    }
                    .right {
                        img {
                            margin-bottom: 130px;
                        }
                    }
                }
                .story_left {
                    /* 02,04 */
                    display: flex;
                    gap: 210px;
                    .right {
                        position: relative;
                        margin-top: 90px;
                        text-align: right;
                        /* border: 1px solid #000; */
                        width: 684px;
                        em {
                        }
                        span {
                            position: absolute;
                            top: -22px;
                            right: 125px;
                        }
                        strong {
                            margin-right: 20px;
                        }
                        p {
                            margin-top: 60px;
                            font-size: 20px;
                            line-height: 30px;
                            color: var(--foundation-white-dark-active, #656565);
                            position: relative;
                            text-align: right;
                            &::after {
                                content: '';
                                width: 658px;
                                height: 1px;
                                background: #656565;
                                position: absolute;
                                right: 0;
                                top: -35px;
                            }
                        }
                    }
                    .left {
                        img {
                            margin-bottom: 130px;
                        }
                    }
                }
            }
        }
        #con4 {
            display: flex;
            flex-direction: column;
            text-align: center;
            align-items: center;
            margin-bottom: 226px;
            strong {
                font-size: 40px;
                font-weight: 600;
                font-family: 'EB Garamond';
                margin-bottom: 72px;
            }
            ul {
                display: flex;
                gap: 60px;
                li {
                    border: 1px solid #e0e0e0;
                    padding-bottom: 52px;
                    position: relative;
                    display: inline-block;
                    cursor: pointer;
                    .img-wrap {
                        position: relative;
                        display: block;
                        width: 100%;
                        height: auto;
                    }
                    img {
                        display: block;
                        width: 100%;
                        height: auto;
                    }
                    .overlay {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        background: rgba(0, 0, 0, 0.5);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        opacity: 0;
                        transition: opacity 0.3s ease;
                        p {
                            color: var(--w);
                            font-size: 24px;
                            font-weight: 700;
                        }
                    }
                    &:hover .overlay {
                        opacity: 1;
                    }
                    em {
                        display: block;
                        font-size: 20px;
                        font-weight: 700;
                        margin-top: 52px;
                        margin-bottom: 14px;
                    }
                    p {
                        color: var(--Foundation-White-Darker, #4e4e4e);
                        font-size: 16px;
                        line-height: 30px;
                        position: relative;
                        display: flex;
                        align-items: center;
                        text-align: center;
                        display: block;
                        width: 220px;
                        margin: auto;
                        svg {
                            vertical-align: middle;
                        }
                    }
                }
            }
        }
        #con5 {
            margin-bottom: 125px;
            display: flex;
            gap: 60px;
            .left {
                img {
                    width: 955px;
                }
            }
            .right {
                strong {
                    font-size: 30px;
                    font-weight: 600;
                    display: block;
                    margin-top: 70px;
                    margin-bottom: 65px;
                }
                p {
                    font-size: 18px;
                    font-weight: 500;
                    line-height: 30px;
                    color: var(--foundation-white-dark-active, #656565);
                }
                .btn {
                    margin-top: 30px;
                    button {
                        width: 215px;
                        height: 55px;
                        background: var(--sub, #00274c);
                        border: none;
                        color: var(--w);
                        font-size: 16px;
                        /* font-weight: 700; */
                        line-height: 30px;
                    }
                }
            }
        }
    }
`;
export const PromiseStyle = styled.article`
    .inner {
        #con1 {
            background: var(--sub, #00274c);
            width: 100vw;
            margin-left: calc(-50vw + 50%);
            height: 1000px;
            display: flex;
            align-items: center;
            justify-content: center;
            ul {
                display: flex;
                flex-wrap: wrap;
                width: 1180px;
                gap: 50px;
                li {
                    position: relative;
                    display: inline-block;
                    cursor: pointer;
                    .img-wrap {
                        position: relative;
                        display: block;
                        width: 100%;
                        height: auto;
                    }
                    img {
                        display: block;
                        width: 100%;
                        height: auto;
                    }
                    .overlay {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        background: rgba(0, 0, 0, 0.7);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        opacity: 0;
                        transition: opacity 0.3s ease;
                        p {
                            color: var(--w);
                            font-size: 16px;
                            font-weight: 700;
                            text-align: center;
                            font-family: 'EB Garamond';
                        }
                    }
                    &:hover .overlay {
                        opacity: 1;
                    }
                }
            }
        }
        #con2 {
            width: 100vw;
            margin-left: calc(-50vw + 50%);
            margin-top: 100px;
            .top {
                display: flex;

                .img-wrap {
                    margin-right: 80px;
                    img {
                    }
                }
                .text-wrap {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;

                    .number {
                        display: block;
                        color: #00274c;
                        font-weight: 700;
                        font-size: 50px;
                    }
                    .subtitle {
                        font-family: 'EB Garamond';
                        font-size: 26px;
                        font-weight: 500;
                        display: block;
                    }
                    .title {
                        font-size: 40px;
                        font-weight: 700;
                        margin-bottom: 130px;
                        display: block;
                    }
                    .desc {
                        color: var(--Foundation-White-Darker, #4e4e4e);
                        font-size: 20px;
                        line-height: 35px;
                        width: 730px;
                    }
                }
            }
            .three-x {
                strong {
                    text-align: center;
                    display: block;
                    font-size: 40px;
                    font-weight: 700;
                    margin-top: 100px;
                }
                ul {
                    display: flex;
                    gap: 60px;
                    justify-content: center;
                    margin-bottom: 240px;
                    li {
                        display: flex;
                        flex-direction: column;
                        width: 380px;
                        margin-top: 64px;
                        border: 1px solid #e0e0e0;
                    }
                    .text {
                        width: 280px;
                        display: flex;
                        flex-direction: column;
                        height: 300px;
                        margin: auto;
                        em {
                            margin-top: 50px;
                            text-align: start;
                            font-size: 26px;
                            font-weight: 700;
                            color: #00274c;
                        }
                        p {
                            margin-top: 20px;
                            color: var(--Foundation-White-Darker, #4e4e4e);
                        }
                    }
                }
            }
        }
        #con3 {
            .top {
                display: flex;
                gap: 50px;
                justify-content: center;
                .img-wrap {
                    margin-bottom: 100px;
                }
                .text-wrap {
                    strong {
                        font-size: 40px;
                        font-weight: 700;
                        color: #594600;
                        display: block;
                        margin-bottom: 20px;
                    }
                    p {
                        font-size: 18px;
                        line-height: 35px;
                        margin-bottom: 35px;
                        .num {
                            font-size: 24px;
                            font-weight: 700;
                            color: var(--Foundation-White-Darker, #4e4e4e);
                            margin-right: 10px;
                        }
                        &:nth-of-type(2),
                        &:nth-of-type(3) {
                            margin-bottom: 15px;
                            font-size: 20px;
                        }
                    }
                    em {
                        color: #594600;
                        font-size: 24px;
                        font-weight: 700;
                        line-height: 35px;
                        display: block;
                        margin-bottom: 15px;
                    }
                }
            }
            .card {
                ul {
                    display: flex;
                    gap: 117px;
                    margin-bottom: 220px;
                    li {
                        width: 474px;
                        height: 595px;
                        border: 1px solid #e0e0e0;
                        box-sizing: border-box;
                        display: flex;
                        flex-direction: column;
                        text-align: center;
                        align-items: center;
                        justify-content: center;
                        margin: auto;
                        gap: 20px;
                        img {
                            width: 312px;
                        }
                        strong {
                            font-size: 30px;
                            font-weight: 600;
                        }
                        p {
                            color: var(--Foundation-White-Darker, #4e4e4e);
                        }
                       
                    }
                }
            }
        }
        #con4 {
            width: 100vw;
            margin-left: calc(-50vw + 50%);
            em {
                color: #00274c;
                font-size: 50px;
                font-weight: 700;
                display: block;
            }
            span {
                font-family: 'EB Garamond';
                font-size: 26px;
                font-weight: 500;
                display: block;
            }
            strong {
                margin-top: 10px;
                display: block;
                font-size: 40px;
                font-weight: 700;
            }
            p {
                margin-top: 110px;
                font-size: 20px;
                line-height: 35px;
                color: var(--Foundation-White-Darker, #4e4e4e);
            }

            .campain_right {
                margin-bottom: 196px;
                display: flex;
                gap: 78px;
                align-items: center;
                justify-content: end;
                .text-wrap {
                    width: 732px;
                }
                .img-wrap {
                }
            }
            .campain_left {
                margin-bottom: 196px;
                display: flex;
                gap: 78px;
                align-items: center;
                .text-wrap {
                    width: 732px;
                }
            }
        }
    }
`;

export const BcorpStyle = styled.article`
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
        margin-bottom: 220px;
        display: flex;
        justify-content: center;
    }
    #con3 {
        display: flex;
        gap: 165px;
        justify-content: center;
        margin-bottom: 300px;
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
