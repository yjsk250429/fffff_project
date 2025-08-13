import styled from 'styled-components';

export const DailyMomentsStyle = styled.div`
    .inner {
        height: 1230px;
        padding: 150px 0;
    }
    h2{
        text-align: center;
        position: relative;
        &::after,
        &::before{
            content:'';
            display:block;
            position: absolute;
            width: 504px;
            height: 1px;
            background: var(--foundation-blue-darker);
            top: 50%;
            transform:translateY(-50%);
        }
        &::before{
            left: 0;
        }
        &::after{
            right: 0;
        }
        span{
            font-weight: 400;
        }
    }
    em{
        display:block;
        text-align: center;
        margin-top: 10px;
        margin-bottom: 70px;
    }
    .insta-wrap{
        ul{
            display:flex;
            gap:20px;
            justify-content: center;
            align-items: top;
            li{
                height:672px;
                img{
                   width: 380px; 
                }
                strong{
                    display:block;
                    font-weight: 600;
                    font-size: 24px;
                    margin-top: 20px;
                    margin-bottom: 15px;
                }
                p{
                    white-space: pre-line;
                    color: var(--foundation-white-dark-hover);
                    margin-bottom: 15px;
                    span{
                        display:inline-block;
                        margin-right: 10px;
                        border-radius:50px;
                        background: var(--foundation-yellow-light);
                        color: var(--foundation-white-dark);
                        padding:5px 10px;
                    }
                }
                
            }
        }

    }
`;
