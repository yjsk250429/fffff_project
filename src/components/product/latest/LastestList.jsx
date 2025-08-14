
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Mousewheel } from 'swiper/modules';

const LastestList = () => {
    return (
        <Swiper
        modules={[ Mousewheel]}
        speed={400}
        slidesPerView={3.5}
        spaceBetween={15}
        mousewheel={{ invert: false }}
      >
        <SwiperSlide>
            <div className="img-wrap">
            <img src="/images/products/item1.webp" alt="" />
            </div>
            <div className="text">
                <strong>시어 버베나 핸드워시 & 핸드로션 듀오</strong>
                <span>300ml</span>
                <em>80,000원</em>
            </div>
        </SwiperSlide>
        <SwiperSlide>

        </SwiperSlide>
        <SwiperSlide>
        </SwiperSlide>
        <SwiperSlide>

        </SwiperSlide>
        <SwiperSlide>

        </SwiperSlide>

      </Swiper>
    );
};

export default LastestList;