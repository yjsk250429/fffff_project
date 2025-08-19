import styled from 'styled-components';

export const DarkStyle = styled.section`
    background: var(--bg-header);
    h2, h3, h4, em, p, strong, span{
        color: #fff;
    }
`;

export const DarkTitleStyle = styled.article`
    .inner {
        padding:218px 0 145px 0;
        height: 800px;
        text-align: center;
    }
        em{
            font-weight: 500;
            font-size: 20px;
        }
        strong{
            font-weight: 600;
            display:block;
            margin-top: 12px;
            margin-bottom: 77px;
            font-size: 30px;
            line-height: 40px;
        }
        h2{
            font-family: 'EB Garamond', serif;
            color:var(--hover-header);
            font-size: 100px;
            margin-bottom: 113px;
        }
        .more{}
`;

