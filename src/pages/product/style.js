import styled from "styled-components";

export const ProductStyle = styled.div`
    .inner {
    }
    .tabs{
        margin-top: 180px;
        display:flex;
        gap:30px;
        font-size: 24px;
        li{
            color: var(--foundation-white-dark);
            cursor: pointer;
            &.on{
                font-weight: 500;
                color: var(--b);
            }
        }
    }
    .sort{
        position: absolute;
        right: 0;
        top:0;
        label{
            opacity:0;
        }
        select {
        width: 180px;     
        height: 45px;  
        padding: 10px 15px;
        font-size: 18px;
        border: 1px solid #000;
        font-family: 'Pretendard', sans-serif;
        appearance: none;  
        -webkit-appearance: none; 
        -moz-appearance: none;  
        background-image: url('/images/dropdownArrow.png'); 
        background-repeat: no-repeat;
        background-position: right 15px center;
        background-size: 16px;
    }
}
 
`;