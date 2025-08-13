import styled from "styled-components";

export const BestProductStyle = styled.div`
        background-image: url('images/Bg_Best_product.png');
        background-repeat: no-repeat;
        background-position: 0px 90px;
    .inner{
        display:flex;
        height: 944px;
        padding:250px 0;
    }
    .text{
        height: 424px;
        margin-right: 124px;
  
        h2{
          font-family: 'Pretendard', sans-serif;
            font-size: 50px;
            font-weight: 600;
            margin-top: 88px;
            margin-bottom: 22px;
        }
        p{
            font-weight: 500;
            line-height: 25px;
            width: 450px;
            word-break: keep-all;
            color:#4E4E4E;
        }
    }
    `;
    export const BestListStyle = styled.div`
    width:1235px;
    height: 569px;
    position:absolute;
    right: -121px;
    overflow:hidden;

`;
export const Page = styled.div`
  height: 424px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

`;

export const RecipeContainer = styled.div`
  width: 1235px;
`;


export const SwiperWrap = styled.div`
  width:100%;
  height: 100%;

  .swiper { overflow: visible; }
  .swiper-scrollbar {
    --swiper-scrollbar-bottom: 0;
    --swiper-scrollbar-drag-bg-color: #4E4E4E;
    --swiper-scrollbar-size: 2px;
  }
  .swiper-slide {
    margin-right: 15px; 
    width: 347px;     
  }

`;

export const Post = styled.article`
width: 347px;
  margin-bottom: 20px;
  cursor: pointer;
`;

export const PostImgWrap = styled.div`
  width: 347px;
  height:353.63px;
position: relative;
  background: #F9F5F0;
  margin-bottom: 15px;
.post-img{
 opacity:1;
}
`;

export const PostImg = styled.img`
  width: 347px;
  height:353.63px;
  opacity:0;
  position: absolute;
  transition:0.6s;
`;
export const PostName = styled.h2`
  font-size: 16px;
  font-weight: 600;
  text-align:center;
`;

export const PostAuthor = styled.p`
  font-size: 14px;
  color:#4E4E4E;
  text-align:center;
`;
