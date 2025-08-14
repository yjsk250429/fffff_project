import styled from "styled-components";

export const ProductStyle = styled.div`
    .inner {
        padding: 150px 0;
    }
    .tabs{
        display:flex;
        gap:25px;
        font-size: 24px;
        li{
            color: var(--foundation-white-dark);
            &.on{
                font-weight: 500;
                color: var(--b);
            }
        }
    }
 
`;