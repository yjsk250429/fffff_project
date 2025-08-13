
import { Container, ContainerInner, Scroll, ScrollGrowbar, SliderWrap } from "./style";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";

const BodyMainList = () => {
  const scrollbarRef = useRef(null);
  const growbarRef = useRef(null);

  const scrollbarWidthRef = useRef(0);
  const dragWidthRef = useRef(0);

  const measure = () => {
    const sb = scrollbarRef.current;
    if (!sb) return;
    scrollbarWidthRef.current = sb.clientWidth;

    const drag = sb.querySelector(".swiper-scrollbar-drag");
    dragWidthRef.current = drag ? drag.clientWidth : 0;
  };

  const setGrowbarWidth = (progress) => {
    const growbar = growbarRef.current;
    if (!growbar) return;

    const w =
      (scrollbarWidthRef.current - dragWidthRef.current) * progress +
      dragWidthRef.current;

    gsap.to(growbar, { width: w, duration: 0.2, ease: "power2.out" });
  };

  const handleSwiperInit = () => {
    // Swiper가 초기화된 뒤에야 drag 엘리먼트가 생김
    measure();
    setGrowbarWidth(0);
  };

  const handleResize = () => {
    measure();
    // 진행도는 progress 이벤트로 다시 들어옴 → 일단 drag 너비로 리셋
    setGrowbarWidth(0);
  };

  const handleProgress = (_swiper, progress) => {
    // progress: 0 ~ 1
    if (scrollbarWidthRef.current === 0) measure();
    setGrowbarWidth(progress);
  };

  useEffect(() => {
    // 초기 렌더 타이밍 이슈 대비
    const id = requestAnimationFrame(() => {
      measure();
      setGrowbarWidth(0);
    });
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <Container>
      <ContainerInner>
        <SliderWrap className="slider">
          <Swiper
            modules={[Scrollbar, Mousewheel]}
            spaceBetween={10}
            grabCursor
            slidesPerView={3.5}
            mousewheel={{ invert: false }}
            // JSX에서 ref가 첫 렌더에 null일 수 있으므로 onBeforeInit에서 안전하게 주입
            onBeforeInit={(swiper) => {
              swiper.params.scrollbar = swiper.params.scrollbar || {};
              swiper.params.scrollbar.el = scrollbarRef.current;
            }}
            onSwiper={handleSwiperInit}
            onResize={handleResize}
            onProgress={handleProgress}
            scrollbar={{ draggable: true }}
          >
            <SwiperSlide className="slider__listItem" />
            <SwiperSlide className="slider__listItem" />
            <SwiperSlide className="slider__listItem" />
            <SwiperSlide className="slider__listItem" />
            <SwiperSlide className="slider__listItem" />
            <SwiperSlide className="slider__listItem" />
          </Swiper>
        </SliderWrap>

        <Scroll className="scroll swiper-scrollbar" ref={scrollbarRef}>
          <ScrollGrowbar id="js-slider__scrollGrowbar" ref={growbarRef} />
        </Scroll>
      </ContainerInner>
    </Container>
  );
};

export default BodyMainList;
