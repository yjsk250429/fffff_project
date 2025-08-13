import { NatureStyle } from "./style";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import NatureList1 from "./NatureList1";
import NatureList2 from "./NatureList2";
import { useMemo, useState } from "react";
import { useSelector } from "react-redux";

const Nature = () => {
    const [hovered1, setHovered1] = useState(null); // 1~6
    const [hovered2, setHovered2] = useState(null); // 7~12
    const { natures } = useSelector((state)=>state.nature);
  
    const hoveredItem1 = useMemo(
        () => natures.find(n => n.id === hovered1) || null,
        [hovered1, natures]
      );
      const hoveredItem2 = useMemo(
        () => natures.find(n => n.id === hovered2) || null,
        [hovered2, natures]
      );
    return (
        <NatureStyle>
            <div className="inner">
                <h2>Nature’s Finest for Your Skin</h2>
            </div>
                <div className="ingredients">

                <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
        {hoveredItem1 && (
              <img src={hoveredItem1.bgImg} alt={hoveredItem1.title} />
            )}
            <NatureList1 hovered1={hovered1} setHovered1={setHovered1}/>
        </SwiperSlide>
        <SwiperSlide>
        {hoveredItem2 && (
              <img src={hoveredItem2.bgImg} alt={hoveredItem2.title} />
            )}
            <NatureList2 hovered2={hovered2} setHovered2={setHovered2}/>
        </SwiperSlide>

      </Swiper>
                </div>
        </NatureStyle>
    );
};

export default Nature;