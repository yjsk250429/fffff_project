import styled from 'styled-components';

export const EventWrap = styled.div`
overflow:hidden;
`;

export const EventVisualStyle = styled.section`
    .visual {
        width: 100%;
        height: 600px;
        background-image: url('/images/event/event_banner.png');
        background-position: 0 0;
        background-size: cover;
        background-repeat: no-repeat;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        p {
            color: var(--w, #fff);
            font-size: 20px;
            margin-bottom: 30px;
        }
        strong {
            display: block;
            color: var(--w, #fff);
            font-family: 'EB Garamond';
            text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
            font-weight: 500;
            font-size: 40px;
        }
        img {
        }
    }
`;
