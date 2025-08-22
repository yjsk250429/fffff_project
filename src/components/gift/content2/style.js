import styled from 'styled-components';

export const GiftListStyle = styled.div`
    margin-top: 68px;
    h3 {
        text-align: center;
        display: block;
        font-size: 40px;
        font-weight: 600;
        margin-bottom: 30px;
    }
    @media (max-width: 390px) {
        h3 {
            font-size: 20px;
            margin-bottom: 26px;
        }
    }
`;
export const GiftTabStyle = styled.ul`
    display: flex;
    justify-content: center;
    margin: auto;
    gap: 45px;
    font-size: 25px;
    li {
        display: flex;
        color: var(--Foundation-White-Dark, #a8a8a8);
        cursor: pointer;
        margin-bottom: 50px;
        &.on {
            color: var(--Foundation-Blue-Darker, #000f33);
            font-weight: 700;
        }
    }
    @media (max-width: 390px) {
        gap: 16px;
        li {
            font-size: 12px;
        }
    }
`;

export const GiftContentStyle = styled.div`
    height: 805px;
    background: var(--Foundation-Blue-Dark, #001d39);
    display: flex;
    .left {
        img {
        }
        margin-right: 176px;
    }
    .right {
        margin-top: 112px;
        .title {
            color: var(--w, #fff);
            font-size: 50px;
            font-weight: 500;
        }
        .tags {
            display: flex;
            gap: 30px;
            color: var(--Foundation-White-Dark, #a8a8a8);
            font-size: 25px;
        }
        .grid {
            display: flex;
            margin-top: 70px;
        }
    }
    .btn {
        margin-top: 50px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        button {
            background: transparent;
            border: none;
            cursor: pointer;
        }
        p {
            color: var(--w, #fff);
            text-align: center;
        }
    }
    @media (max-width: 390px) {
        flex-direction: column;
        width: 90.7692vw;
        margin: auto;
        height: 616px;
        .left {
            img {
                width: 90.7692vw;
                height: 250px;
                object-fit: cover;
                margin-bottom: 28px;
            }
        }

        .right {
            margin: 0 13px;
            .title {
                font-size: 20px;
                margin-top: 28px;
            }
            .tags {
                font-size: 10px;
                gap: 15px;
            }
            .grid {
                margin-top: 33px;
                gap: 8px;
            }
        }
    }
`;
export const GiftItemStyle = styled.li`
    cursor: pointer;
    border: 1px solid #000;
    display: flex;
    flex-direction: column;
    margin-right: 26px;
    background: var(--w, #fff);
    width: 254px;
    height: 254px;
    line-height: 1;

    img {
    }
    strong {
        color: var(--w, #fff);
        font-size: 20px;
        font-weight: 500;
        display: block;
        margin-top: 10px;
    }
    em {
        color: var(--Foundation-White-Dark, #a8a8a8);
        font-size: 18px;
        letter-spacing: -0.36px;
    }
    p {
        color: var(--w, #fff);
        font-size: 18px;
    }
    @media (max-width: 390px) {
        width: 26.1538vw;
        height: 101px;
        /* margin-right: 10px; */
        gap: 10px;
        margin: auto;
        img {
            width: 26.1538vw;
            height: 101px;
        }
        strong {
            font-size: 14px;
        }
        em {
            font-size: 8px;
        }
        p {
            font-size: 10px;
        }
    }
`;
