import styled from 'styled-components';

export const PaginationStyle = styled.div`
    div {
        display:flex;
        justify-content: center;
        text-align: center;
        margin-top: 3px;
        margin-bottom: 150px;
        p{
            button {
            width: 30px;
            height: 30px;
            border: none;
            background: none;
            margin-right: 5px;
            font-size: 18px;
            cursor: pointer;
            &.on {
            color: #000;
            text-decoration:underline;
            }
            }
            &:first-child {
                button{

                    position: relative;
                    img{
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform:translate(-50%, -50%) rotate(90deg);
                    }
                }
            }
            &:last-child {
                button{
                    position: relative;
                    img{
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform:translate(-50%, -50%) rotate(-90deg);
                    }
                }
            }
          
        }
        }
    
`;
