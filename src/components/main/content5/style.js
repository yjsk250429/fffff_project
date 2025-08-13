import styled from 'styled-components';

export const SloganStyle = styled.div`
    .inner {
        display: flex;
        height: 900px;
        padding: 100px 0;
        align-items: center;
    }
    .text{
        text-align: center;
        margin-right: 200px;
        margin-left: 50px;
        position: relative;
        h2{
            font-size: 28px !important;
            font-weight: 800 !important;
            color: var(--foundation-yellow-dark-hover);
            margin:auto;
            margin-bottom:64px !important;
            width: 380px;
            word-break: keep-all;
            &::before,
            &::after{
                content:'';
                display:block;
                background-image: url(/images/main/quote1.png);
                background-repeat: no-repeat;
                background-position: 0 0;
                width: 24.5px;
                height: 17px;
                position: absolute;
                top: -20px;
            }
            &::before{
                left: 0px;
            }
            &::after{
                right: 0px;
                background-image: url(/images/main/quote2.png);
            }
            
        }
        strong{
            display:block;
            margin-bottom: 10px;
            font-weight: 700;
        font-size: 18px;
        &::after{
            content:'';
            display:block;
            width: 1px;
            height: 35px;
            position: absolute;
            left: 50%;
            transform:translateX(-50%);
            top: 104px;
            background: var(--foundation-yellow-dark-hover);
        }
        
        }
      
    }
    .video-wrap {
        width: 1000px;
        height: 702px;
    }
    video {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
    }
`;
