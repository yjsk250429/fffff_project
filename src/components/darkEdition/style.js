import styled from 'styled-components';
export const DarkPackageStyle = styled.article`
    .inner{
        height: 1500px;
        text-align: center;
        padding-top:158px;
    }
    em{ 
        display:block;
        font-size: 20px;
        &:first-of-type{
            margin-bottom: 40px;
            color: #fff;
            opacity:0.2;
            font-family: 'EB Garamond', serif;
        }
    }
    h3{margin-top: 20px;
    font-weight: 500;
    font-size: 26px;
    margin-bottom: 70px;
    span{
        color: var(--hover-header);
        font-size: 28px;
    }}
    img{
        position: absolute;
        left: 50%;
        transform:translateX(-50%);
        bottom: 47px;
        z-index:10;
    }
    p{
        font-family: 'EB Garamond', serif;
        position: absolute;
        text-align: left;
        top: 700px;
        left:210px;
        font-size: 130px;
        font-weight: 500;
        letter-spacing: 1.2px;
        opacity:0.07;
        z-index:0;
        span{
            margin-left:150px;
        }
    }
`;

export const DarkCardsStyle = styled.article`
    .inner{
    text-align: center;
    padding:146px 0;
    }
    h2{
        color: var(--hover-header);
        font-size: 40px;
        font-weight: 500;
        margin-bottom: 30px;
        span{
            font-family: 'EB Garamond', serif;
            color: var(--hover-header);

        }
    }
    p{
        font-size: 20px;
        font-weight: 500;
        margin-bottom: 143px;
    }
    em{
        font-size: 14px;
        color: #ada5a5;
    }
`;
export const DarkCollectionStyle = styled.article`
.bg{
    width: 100%;
    height: 1000px;
    position: absolute;
    background-image: url('images/dark/con3_01.png');
    background-repeat: no-repeat;
    background-position: 0 0;
    background-size: cover;
}
    .inner{
        height: 1000px;
        text-align: center;
        padding-top: 113px;
    }
    h2{
        color: var(--hover-header);
        font-size: 40px;
        font-weight: 500;
        font-family: 'EB Garamond', serif;
        margin-bottom: 105px;
        position: relative;
        &::after{
            content:'';
            display:block;
            width: 1px;
            height: 63px;
            background: var(--hover-header);
            position: absolute;
            top: 65px;
            left: 50%;
            transform:translateX(-50%)
        }
    }
    p{
        line-height: 50px;
        font-size: 20px;
        color: #d5d5d5;
    }
    img{
        margin-top: 125px;
    }
`;

export const DarkProductStyle = styled.article`
background: #000;
.inner{
    height: 900px;
    display:flex;
    justify-content:space-between;
}
.left{}
.right{}
`;