import styled from 'styled-components';

export const HandMainStyle = styled.div`
    background: var(--foundation-blue-light);
    .inner {
        width: 100%;
        display: flex;
        height: 1000px;
        padding: 93px 0;
        
        align-items: flex-start;
    }
    .text{
        margin-left: 324px;
    }
    .img-wrap {
        width: 1018px;
        height: 600px;
        overflow: hidden;
        position: relative;
        img{
            position: absolute;
            left: 0;
            top: -70%;
        }
    }

`;

export const Container = styled.div`
  position: absolute;
  left: 0;
  bottom:0;
`;

export const ContainerInner = styled.div`

`;

export const SliderWrap = styled.div`
  margin: 0 auto 0 0;
  width: 1205px;
  height: 200px;
  overflow: visible;

  .swiper{
    height: 200px;
  }

  .swiper-wrapper {
    width: 305px;
    cursor: grab;
  }
  .swiper-slide {
    width: 305px;
    height: 200px;
    background: var(--foundation-blue-light-hover);
    position: relative;
    &:first-child{
      img{
        position: absolute;
        left: 50%;
      top: 50%;
      transform:translate(-50%, -50%) scale(1.4);
      }
    }
    img{
      height: 100%;
      position: absolute;
      left: 50%;
      top: 50%;
      transform:translate(-50%, -50%);
    }
  }


  .swiper-scrollbar{
    display:none;
  }
  .slider__listItem{
    margin-right: 10px;
  }
`;

export const Scroll = styled.div`
height: 2px;
  position: relative;
  left: 1300px;
  bottom: 46.5px;
  margin-top: calc(40em / 16);
  width: 20%;
  overflow: hidden;
  border-radius:0;
  transform:scaleX(-1);
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    display: block;
    margin: auto 0;
    width: 100%;
    height: 100%;
    background-color: var(--foundation-white-normal-hover);
  }

  /* Swiper의 실제 드래그 핸들 */
  & .swiper-scrollbar-drag {
    position: relative;
    top: 0;
    left: 0;
    z-index: 2;
    height: 100%;
    background-color:#000;
    border-radius: 0;
    transform-origin: right center;
    will-change: transform;
    cursor: grab;

  }
`;

export const ScrollGrowbar = styled.div`

  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  display: block;
  height: 100%;
  background: #000;
`;
