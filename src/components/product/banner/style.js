import styled from "styled-components";

export const ProductBannerStyle = styled.section`
height: 600px;
.swiper {
  width: 100%;
  height: 100%;
}
    .swiper-slide {
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        background-position: 0 0;
        background-repeat: no-repeat;
        background-size: cover;
    &.bn1{
        background-image: url('/images/banner/list_banner0.jpg');
    }
    &.bn2{
        background-image: url('/images/banner/list_banner4.jpg');
        
    }
    &.bn3{
        background-image: url('/images/banner/list_banner2.jpg');
        
    }
    &.bn4{
        background-image: url('/images/banner/list_banner1.jpg');
        
    }
    &.bn5{
        background-image: url('/images/banner/list_banner3.jpg');
        
    }
    .inner{
        color: var(--w);
        padding-left:190px;
    }
    span{font-size: 26px;
        display:block;
        margin-bottom: 10px;
    }
    strong{
        font-size: 60px;
        line-height: 65px;
        font-weight: 700;
        span{
            font-size: 60px;
            font-weight: 500;
        }
    }
    em{
        font-size: 20px;
        margin-top: 20px;
        margin-bottom: 80px;
        display:block;
    }
    .more{
        width: 110px;
        position: relative;
        color: var(--w);
        i{
            font-size:24px;
            position: absolute;
            top:-2px;
            right: 0px;
        }
    }

}
.swiper-scrollbar.swiper-scrollbar-horizontal{
    width: 1314px;
    height: 5px;
    left: 50%;
    transform:translateX(-50%);
    bottom: 70px;
    background: none;
    border: 1px solid var(--w);
    border-radius:0;
}
.swiper-scrollbar-drag{
    background: var(--w);
    border-radius:0;
}
.swiper-button-prev,
.swiper-button-next
{
    color:var(--w);
    transform:scale(0.8);
}

.swiper-button-prev{
    left: 120px;
}
.swiper-button-next{
    right: 120px;
    
}

`;