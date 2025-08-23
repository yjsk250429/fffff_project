import styled from 'styled-components';

export const BestProductStyle = styled.div`
    position: relative;
    .bg {
        position: absolute;
        top: 90px;
        left: 0;
        height: 944px;
    }
    .inner {
        display: flex;
        height: 944px;
        padding: 250px 0;
    }
    .text {
        height: 424px;
        margin-right: 124px;
        margin-top: 90px !important;
        h2 {
            font-size: 50px !important;
        }
        p {
            font-weight: 500;
            line-height: 25px;
            width: 450px;
            word-break: keep-all;
            color: var(--foundation-white-darker);
            margin-bottom: 50px;
        }
    }
    @media screen and (max-width: 390px) {
        .bg {
            top: 0;
            left: 18px;
            height: 60px;
            img {
                width: 300px;
            }
        }
        .inner {
            width: 354px;
            height: 720px;
            display: block;
            padding: 43px 0 55px 0;
        }
        .text {
            margin-top: 0 !important;
            h2 {
                font-size: 20px !important;
                margin-bottom: 12px;
            }
            p {
                font-size: 12px;
                width: 313px;
                line-height: 20px;
            }
            button {
                bottom: 55px;
            }
        }
    }
`;
export const BestListStyle = styled.div`
    width: 1235px;
    height: 569px;
    position: absolute;
    right: -121px;
    overflow: hidden;
    @media screen and (max-width: 390px) {
        left: 0;
        top: 175px;
    }
`;

export const SwiperWrap = styled.div`
    width: 100%;
    height: 100%;

    .swiper {
        overflow: visible;
    }
    .swiper-scrollbar {
        --swiper-scrollbar-bottom: 0;
        --swiper-scrollbar-drag-bg-color: var(--foundation-white-darker);
        --swiper-scrollbar-size: 1px;
    }
    .swiper-slide {
        margin-right: 15px;
        width: 347px;
    }
    @media screen and (max-width: 390px) {
        .swiper-scrollbar {
            width: 250px;
            height: 2px;
            margin-left: 50px;
        }
    }
`;

export const Post = styled.article`
    width: 347px;
    margin-bottom: 20px;
    cursor: pointer;
`;

export const PostImgWrap = styled.div`
    width: 347px;
    height: 353.63px;
    position: relative;
    background: var(--background);
    margin-bottom: 15px;
    .post-img {
        opacity: 1;
    }
`;

export const PostImg = styled.img`
    width: 347px;
    height: 353.63px;
    opacity: 0;
    position: absolute;
    transition: 0.6s;
`;
export const PostName = styled.h2`
    font-size: 16px !important;
    font-weight: 600;
    text-align: center;
`;

export const PostAuthor = styled.p`
    font-size: 14px;
    color: var(--foundation-white-darker);
    text-align: center;
`;
