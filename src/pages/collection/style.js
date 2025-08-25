import styled from 'styled-components';

export const CollectionWrap = styled.div`
overflow:hidden;
`;

export const CollectionVisualStyle = styled.section`
    .visual {
        width: 100%;
        height: 600px;
        background-image: url(/images/collection/collection_visual.jpg);
        background-position: 0 0;
        background-size: cover;
        background-repeat: no-repeat;
    }
`;

export const CollectionLineupStyle = styled.ul`
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 65px;
    background: #594600;
    li {
        color: #fff;
        font-size: 18px;
        font-weight: 400;
        transition: 0.3s;
        cursor: pointer;
        &:hover {
            color: #ca9f00;
        }
    }
`;
