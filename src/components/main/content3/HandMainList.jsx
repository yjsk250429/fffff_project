import { Container, ContainerInner, Scroll, ScrollGrowbar, SliderWrap } from './style';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const HandMainList = () => {
    const [isMobile, setIsMobile] = useState(false);
    const scrollbarRef = useRef(null);
    const growbarRef = useRef(null);
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 390);
        };

        handleResize(); // 초기 실행
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const scrollbarWidthRef = useRef(0);
    const dragWidthRef = useRef(0);

    const measure = () => {
        const sb = scrollbarRef.current;
        if (!sb) return;
        scrollbarWidthRef.current = sb.clientWidth;

        const drag = sb.querySelector('.swiper-scrollbar-drag');
        dragWidthRef.current = drag ? drag.clientWidth : 0;
    };

    const setGrowbarWidth = (progress) => {
        const growbar = growbarRef.current;
        if (!growbar) return;

        const w =
            (scrollbarWidthRef.current - dragWidthRef.current) * progress + dragWidthRef.current;

        gsap.to(growbar, { width: w, duration: 0.2, ease: 'power2.out' });
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

    const { products } = useSelector((state) => state.product);
    const bestArr = [110, 79, 87, 59, 57];

    const bodyBest = products.filter((best) => bestArr.includes(best.id));

    return (
        <Container>
            <ContainerInner>
                <SliderWrap className="slider">
                    <Swiper
                        dir={isMobile ? 'ltr' : 'rtl'}
                        modules={[Scrollbar, Mousewheel]}
                        spaceBetween={0}
                        grabCursor
                        slidesPerView={3.5}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                            },
                            391: {
                                slidesPerView: 3.5,
                            },
                        }}
                        mousewheel={{ invert: false }}
                        onBeforeInit={(swiper) => {
                            swiper.params.scrollbar = swiper.params.scrollbar || {};
                            swiper.params.scrollbar.el = scrollbarRef.current;
                        }}
                        onSwiper={handleSwiperInit}
                        onResize={handleResize}
                        onProgress={handleProgress}
                        scrollbar={{ draggable: true }}
                    >
                        <SwiperSlide>
                            <img src="/images/main/con3-0.png" alt="texture" />
                        </SwiperSlide>
                        {bodyBest.map((best) => (
                            <SwiperSlide className="slider__listItem" key={best.id}>
                                <Link to={`/product/${best.category}/${best.id}`}>
                                    <img src={best.image} alt={best.title} />
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </SliderWrap>

                <Scroll className="scroll swiper-scrollbar" ref={scrollbarRef}>
                    <ScrollGrowbar id="js-slider__scrollGrowbar" ref={growbarRef} />
                </Scroll>

                <p className="num">
                    <span>01</span>
                    <span>05</span>
                </p>
            </ContainerInner>
        </Container>
    );
};

export default HandMainList;
