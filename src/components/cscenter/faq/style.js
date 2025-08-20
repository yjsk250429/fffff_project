import styled from 'styled-components';

export const FaqMainStyle = styled.div`
    h2 {
        font-size: 40px;
        font-weight: 600;
        padding-bottom: 15px;
        /* margin-top: 30px; */
    }
    em {
        font-size: 20px;
        line-height: 25px;
        display: block;
        margin-bottom: 66px;
    }
`;
export const FaqItemStyle = styled.div`
    width: 1128px;
    margin: auto;
    border-bottom: 1px solid #999;
    &:first-of-type{
        border-top: 1px solid #999;
    }

    .faq-trigger {
        font-family: 'Pretendard', sans-serif;
        border-bottom: 1px solid #ddd;
        width: 100%;
        height: 95px;
        background: transparent;
        border: 0;
        text-align: left;
        padding: 10px 15px;
        /* color: ${(props) => (props.$active ? '#fff' : '#555')}; */
        font-weight: 600;
        display: flex;
        align-items: center;
        cursor: pointer;
        transition: background-color 0.2s linear, color 0.2s linear;
        /* background-color: ${(props) => (props.$active ? '#F6F6F6' : 'transparent')}; */
        border-top: ${(props) => (props.$active ? '2px solid #000' : 'transparent')};
        border-bottom: ${(props) => (props.$active ? ' 1px solid #ddd' : 'transparent')};
        span {
            font-size: 24px;
            font-weight: 600;
            display: block;
            margin-right: 30px;
        }
        p {
            font-size: 20px;
            font-weight: 600;
            display: block;
        }
        svg {
            position: absolute;
            right: 310px;
        }
    }

    .faq-content {
        background-color: #fff;
        overflow: hidden;
        max-height: ${(props) => (props.$open ? props.$height + 'px' : '0')};
        transition: max-height 0.3s ease; /* <- 여기 max-height 적용 */
    }

    .faq-inner {
        padding: 10px 15px;
        color: #333;
        text-align: start;
       padding:20px 74px;
        font-size: 18px;
        word-break:keep-all;
    }
`;
