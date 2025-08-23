import styled from 'styled-components';

export const NatureStyle = styled.div`
    .inner {
        padding-top: 100px;
    }
    h2 {
        text-align: center;
        position: relative;
        &::after,
        &::before {
            content: '';
            display: block;
            position: absolute;
            width: 504px;
            height: 1px;
            background: var(--foundation-blue-darker);
            top: 50%;
            transform: translateY(-50%);
        }
        &::before {
            left: 0;
        }
        &::after {
            right: 0;
        }
    }
    .ingredients {
        .swiper {
            margin-top: 60px;
            width: 100%;
            height: 760px;
        }

        .swiper-slide {
            text-align: center;
            font-size: 18px;
            background: var(--background);
            display: flex;
            justify-content: center;
            align-items: center;
            border: none;
        }

        .swiper-slide img {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
            position: absolute;
        }
        .swiper-pagination {
            bottom: 45px;
            span {
                margin: 0;
                background: var(--foundation-blue-light-active);
            }
        }
        .swiper-pagination-bullet {
        }

        .swiper-pagination-bullet,
        .swiper-pagination-bullet.swiper-pagination-bullet-active {
            border-radius: 0;
            width: 50px;
            height: 5px;
            margin: 0px;
        }
        .swiper-pagination-bullet.swiper-pagination-bullet-active {
            background: var(--sub);
        }
    }
    @media screen and (max-width: 390px) {
        .inner {
            padding-top: 0;
            width: 100%;
        }
        h2 {
            font-size: 22px !important;
            &::before,
            &::after {
                display: none;
            }
        }
        .ingredients {
            .swiper {
                height: 395px;
                margin-top: 30px;
                .swiper-pagination-bullet,
                .swiper-pagination-bullet.swiper-pagination-bullet-active {
                    width: 80px;
                    height: 2px;
                }
            }
        }
    }
`;

export const NatureListStyle = styled.ul`
    display: flex;
    gap: 180px;
    flex-wrap: wrap;
    width: 900px;
    @media screen and (max-width: 390px) {
        width: 280px;
        gap: 50px;
        margin-top: -40px;
    }
`;
export const NatureItemStyle = styled.li`
    border-radius: 100px;
    background: var(--sub);
    width: 180px;
    height: 180px;
    text-align: center;
    position: relative;
    padding: 36px 45px;
    box-sizing: border-box;
    cursor: pointer;
    .img-wrap {
        width: 60px;
        height: 60px;
        margin: auto;
        position: relative;
        img {
            /* height: 56px; */
            position: absolute;
            left: 50%;
            top: 0;
            /* top: 50%; */
            transform: translateX(-50%);
        }
    }
    p {
        margin-top: 15px;
        color: var(--w);
    }
    @media screen and (max-width: 390px) {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        padding: 10px;
        .img-wrap {
            width: 20px;
            height: 20px;
            img {
            }
        }
        p {
            margin-top: 6px;
            font-size: 8px;
        }
    }
`;
