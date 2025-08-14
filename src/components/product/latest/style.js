import styled from "styled-components";

export const LatestStyle = styled.article`
text-align: center;
h2{
    font-size: 40px;
    font-weight: 600;
    margin-bottom: 10px;
}
em{
    font-weight: 500;
    font-size: 20px;
    color: var(--foundation-white-dark);
}
.list-wrap{
    width: 1810px;
    height: 600px;
    margin-top: 94px;
    margin-bottom: 290px;
    display:flex;
    gap: 30px;
    justify-content: space-between;
    align-items: center;
    position: relative;
    .img-wrap{
        height: 600px;
        width: 390px;
        overflow: hidden;
        position: relative;
        img{
            position: absolute;
            left: 50%;
            transform:translateX(-50%);
            top: 0;
        }
    }
}

.swiper {
  width: 1390px;
  height: 100%;
}

.swiper-slide {
  font-size: 18px;
  .img-wrap{
    background: var(--background);
    width: 100%;
    height: 486px;
    margin-bottom: 15px;
    img{
        display:block;
        width: 100%;
    }
  }
  .text{
    text-align:left;
    strong{
        font-size: 22px;
        font-weight: 600;
        display:block;
    }
    span{
        display:block;
        font-weight: 600;
        font-size: 20px;
        color: var(--foundation-white-dark-hover);
    }
    em{
        font-size: 20px;
        font-weight: 600;
        color: var(--b);
    }
  }
}
`;
