import styled from 'styled-components';
export const DarkPackageStyle = styled.article`
    .inner {
        height: 1500px;
        text-align: center;
        padding-top: 158px;
    }
    em {
        display: block;
        font-size: 20px;
        &:first-of-type {
            margin-bottom: 40px;
            color: #fff;
            opacity: 0.2;
            font-family: 'EB Garamond', serif;
        }
    }
    h3 {
        margin-top: 20px;
        font-weight: 500;
        font-size: 26px;
        margin-bottom: 70px;
        span {
            color: var(--hover-header);
            font-size: 28px;
        }
    }
    img {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 47px;
        z-index: 10;
        transition:0.6s ease;
        &:hover{
            transform:translateX(-50%) scale(1.05);
            filter: drop-shadow(0 0 1px var(--foundation-yellow-light-hover));

        }
    }
    p {
        font-family: 'EB Garamond', serif;
        position: absolute;
        text-align: left;
        top: 700px;
        left: 210px;
        font-size: 130px;
        font-weight: 500;
        letter-spacing: 1.2px;
        opacity: 0.07;
        z-index: 0;
        span {
            margin-left: 150px;
        }
    }

  
`;

export const DarkCardsStyle = styled.article`
    .inner {
        text-align: center;
        padding: 146px 0;
    }
    h2 {
        color: var(--hover-header);
        font-size: 40px;
        font-weight: 500;
        margin-bottom: 30px;
        span {
            font-family: 'EB Garamond', serif;
            color: var(--hover-header);
        }
    }
    p {
        font-size: 20px;
        font-weight: 500;
        margin-bottom: 143px;
    }
    em {
        font-size: 14px;
        color: #ada5a5;
    }
`;
export const DarkCollectionStyle = styled.article`
position: relative;
    .bg {
      width: 100%;
        position: absolute;
        top: 0;
        video{
            width: 100%;
            height: 100%;
            object-fit: cover;
            display:block;
        }
          /* 
        background-image: url('images/dark/con3_01.png');
        background-repeat: no-repeat;
        background-position: 0 0;
        background-size: cover; */
    }
    .inner {
        height: 1000px;
        text-align: center;
        padding: 113px 0;
    }
    h2 {
        color: var(--hover-header);
        font-size: 40px;
        font-weight: 500;
        font-family: 'EB Garamond', serif;
        margin-bottom: 105px;
        position: relative;
        &::after {
            content: '';
            display: block;
            width: 1px;
            height: 63px;
            background: var(--hover-header);
            position: absolute;
            top: 65px;
            left: 50%;
            transform: translateX(-50%);
        }
    }
    p {
        line-height: 50px;
        font-size: 20px;
        color: #d5d5d5;
    }
    img {
        margin-top: 125px;
    }
`;


export const CardListStyle = styled.div`
    display: flex;
    gap: 86px;
    justify-content: center;
    align-items: center;
    margin-bottom: 72px;
    .wrap {
        position: relative;
        width: 250px;
        height: 350px;
        cursor: pointer;
        transition: -webkit-transform 0.6s ease-in;
        -webkit-transform-style: preserve-3d;
        &:hover {
            -webkit-transform: rotateY(180deg);
        }
        
        div {
            width: 100%;
            height: 100%;
            border-radius: 10px;
            background-position: 50% 50%;
            background-size: 250px;
            background-repeat: no-repeat;
            text-align: center;
            position: absolute;
            -webkit-backface-visibility: hidden;
            background: linear-gradient(
                180deg,
                rgba(29, 43, 112, 0) 0%,
                rgba(30, 41, 99, 0.5) 50%,
               #0b1238 100%
                );
                
                &.side-a {
                    z-index: 100;
                    padding: 136px 0;
                    box-sizing: border-box;
                    p {
                        font-family: 'EB Garamond', serif;
                        font-size: 30px;
                        font-weight: 500;
                    }
                }
                &.side-b {
                    padding: 40px 0;
                    box-sizing: border-box;
                    text-align: center;
                    -webkit-transform: rotateY(-180deg);
                    img {
                        display: block;
                    margin: auto;
                    height: 190px;
                }
                span {
                    display: block;
                    margin-top: 15px;
                    font-size: 16px;
                    font-family: 'EB Garamond', serif;
                    color: var(--hover-header);
                }
                strong {
                    display: block;
                    font-size: 20px;
                    margin-top: 5px;
                }
            }
        }
    }
    `;

    export const DarkProductStyle = styled.article`
        background: #000;
        .inner {
            height: 900px;
            display: flex;
            justify-content: space-around;
            align-items: center;
        }
        .left {
            .ingr-list{
                margin-left: 100px;
                li{
                    width: 460px;
                    height: 125px;
                    border-left: 2px solid var(--hover-header);
                    padding-left: 25px;
                    box-sizing: border-box;
                    position: relative;
                    display:flex;
                    justify-content:space-between;
                    margin-bottom: 43px;
                    opacity: 0;
                    will-change: opacity, transform;
                    &:nth-child(1) {
                        animation: slideInFromRight 1s ease forwards;
                        animation-delay: 0ms;
                    }
                    &:nth-child(2){
                        border-right: 2px solid var(--hover-header);
                        border-left:none;
                        text-align:right;
                        flex-direction: row-reverse;
                        padding-left:0;
                        padding-right:25px;
                        animation: slideInFromLeft 0.6s ease forwards;
                        animation-delay: 240ms;
                    }
                    &:last-child{
                        margin-bottom: 0;
                        animation: slideInFromRight 0.6s ease forwards;
                        animation-delay: 480ms;
                    }
                    @keyframes slideInFromRight {
                        from { opacity: 0; transform: translateX(50px); }
                        to   { opacity: 1; transform: translateX(0); }
                    }
                    @keyframes slideInFromLeft {
                        from { opacity: 0; transform: translateX(-50px); }
                        to   { opacity: 1; transform: translateX(0); }
                    }
                    .txt{
                    width: 260px;
                        span{
                            font-size: 14px;
                            color: var(--foundation-white-dark);
                        }
                        strong{
                            display:block;
                            font-size: 24px;
                            font-weight: 600;
                            margin-bottom: 12px;
                        }
                        em{   font-size: 14px;
                            color: var(--foundation-white-dark);
                            /* word-break:keep-all; */
                            white-space: pre-line;
                        }
                        }
                        .img{
                            width: 147px;
                            position: relative;
                            img{
                                position: absolute;
                                right: 0;
                                top: 50%;
                                transform:translateY(-50%);
                                width: 100%;
                            }
                            }
                        }
            }
        }

    `;

export const Wrap = styled.section`
.container {
  width: 838px;
  position: relative;
}
`;

export const Item = styled.div`
text-align: center;
opacity: 0.2;
transform: scale3d(0.8, 0.8, 1);
transition: all 0.3s ease-in-out;

.shadow-effect {
  text-align: center;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.1),
    0 15px 12px rgba(0, 0, 0, 0.02);
img{
    height: 400px;
}
  p {
    font-size: 18px;
    width: 250px;
    word-break:keep-all;
    margin-top: 16px;
  }
}

.img-circle {
  display: block;
  margin:auto;
  transform-style: preserve-3d;
}

.testimonial-name {
    font-family: "EB Garamond", serif;
  text-align: center;
  color: var(--hover-header);
  font-size: 30px;
}
`;

export const CarouselStyle = styled.div`
.swiper {

}
.swiper-slide {
  display: flex;
  justify-content: center;
}
.swiper-slide ${Item} .shadow-effect .desc,
.swiper-slide ${Item} .shadow-effect .testimonial-name
 {
    display: none;
  }
  .swiper-slide-active ${Item} .shadow-effect .desc,
  .swiper-slide-duplicate-active ${Item} .shadow-effect .desc,
  .swiper-slide-active ${Item} .shadow-effect .testimonial-name,
  .swiper-slide-duplicate-active ${Item} .shadow-effect .testimonial-name
   {
    display: block;
  }
.swiper-slide-active ${Item},
.swiper-slide-duplicate-active ${Item}
 {
  opacity: 1;
  transform: scale3d(1, 1, 1);
}
.btns{
}
`;

export const NavButton = styled.button`
  color: #fff;
  background: none;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 1px solid #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: absolute;
  &::after {
    font-size: 18px;
    line-height: 100%;
    margin: auto;
  }
  &.swiper-button-prev{
    left: 0px;
  }
  &.swiper-button-next{
    right: 0px;
  }
`;