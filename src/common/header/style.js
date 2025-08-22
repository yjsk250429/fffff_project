import styled from 'styled-components';

export const HeaderStyle = styled.header`
    background: var(--bg-header, #fff);
    .inner {
        height: 150px;
        padding: 25px 0 40px 0;
        transition: 0.3s;
    }
    .bottom {
        display: flex;
        align-items: center;
        margin-top: 20px;
    }
    h1 {
        margin-right: 100px;
    }
`;

export const SmallUtilStyle = styled.ul`
    display: flex;
    justify-content: end;
    gap: 20px;
    li {
        position: relative;
        font-size: 14px;
        color: var(--text-header);
        a {
            color: var(--text-header);
        }
        &:nth-child(1) {
            cursor: pointer;
            margin-right: 8px;
            span {
                margin-right: 4px;
            }
            i {
                position: absolute;
                top: 1px;
                font-size: 16px;
                color: var(--text-header);
            }
        }
        &:nth-child(2) {
            &::after {
                content: '';
                display: block;
                width: 2px;
                height: 12px;
                background: #b0bcc8;
                position: absolute;
                right: -12px;
                top: 50%;
                transform: translateY(-50%);
            }
        }
    }
`;
export const BigUtilStyle = styled.ul`
    display: flex;
    gap: 20px;
    position: absolute;
    right: 0;
    li {
        position: relative;

        i {
            font-size: 28px;
            cursor: pointer;
            color: var(--text-header);
        }

        p {
            right: -5px;
            top: 0;
        }
    }
`;

export const NavStyle = styled.nav`
    .gnb {
        display: flex;
        gap: 50px;
        > li {
            position: relative;
            &::after {
                content: '';
                display: block;
                width: 0;
                height: 2px;
                background: var(--text-header, #00274c);
                position: absolute;
                bottom: 0;
                left: 50%;
                transform: translateX(-50%);
                transition: 0.3s;
            }
            &:hover::after {
                width: 100%;
            }
            &:last-child {
                font-family: 'EB Garamond', serif;
                font-style: italic;
            }
        }
        span {
            font-size: 18px;
            /* font-weight: 300; */
            cursor: pointer;
            color: var(--text-header);
        }
        a {
            font-size: 18px;
            /* font-weight: 300; */
            color: var(--text-header);
        }
    }
    .submenu1 {
        display: flex;
        gap: 35px;
        position: absolute;
        width: 1530px;
        height: 0px;
        padding: 30px 0 0 380px;
        border-top: 1px solid var(--bg-header, #dcdcdc);
        left: -380px;
        top: 72px;
        transition: 0.2s;
        li {
            display: none;
            a {
                color: var(--text-header, #656565);
            }
            &:hover {
                a {
                    color: var(--hover-header, #00274c);
                    font-weight: 600;
                }
            }
        }
        &.on {
            height: 60px;
            padding: 30px 0 0 380px;
            z-index: 100;
            background: var(--bg-header, #fff);
            li {
                display: block;
            }
        }
    }
    .submenu2 {
        display: flex;
        gap: 35px;
        position: absolute;
        width: 1043px;
        height: 0px;
        padding: 30px 0 0 872px;
        border-top: 1px solid var(--bg-header, #dcdcdc);
        left: -872px;
        top: 72px;
        transition: 0.2s;
        li {
            display: none;
            a {
                color: var(--text-header, #656565);
            }
            &:hover {
                a {
                    color: var(--hover-header, #00274c);
                    font-weight: 600;
                }
            }
        }
        &.on {
            height: 60px;
            padding: 30px 0 0 872px;
            z-index: 100;
            background: var(--bg-header, #fff);
            li {
                display: block;
            }
        }
    }
`;
