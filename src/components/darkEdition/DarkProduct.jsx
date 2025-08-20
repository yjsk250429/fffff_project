import { CarouselStyle, DarkProductStyle, Item, NavButton, Wrap } from "./style";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useState } from "react";

const DarkProducts =[
    {id:1,
        name:'Night Reset Serum',
        text:'황금빛 이모르뗄과 달빛 문플라워 밤의 에너지를 고스란히 담다',
        img:'/images/dark/con4_01.png',
    },
    {id:2,
        name:'Night Cream',
        text:'푸른 밤의 진정, 블루 탄지와 문플라워의 깊은 보습',
        img:'/images/dark/con4_02.png',
    },
    {id:3,
        name:'Night Body Oil',
        text:' 라벤더와 블루 탄지가 선사하는 전신의 평온한 재생',
        img:'/images/dark/con4_03.png',
    },
    {id:4,
        name:'Aromachologie Candle',
        text:' 라벤더와 문플라워 향, 블루 탄지의 푸른 여운으로 완성되는 밤',
        img:'/images/dark/con4_04.png',
    },
]
const DarkIngr =[
    {id:1,
        flower:'문플라워',
        efficacy:'피부 진정, 수분 공급',
        caption:'달빛 아래에서만 피어나는 문플라워\n당신의 피부를 밤새 감싸 안습니다.',
        img:'/images/dark/con4_05.png'
    },
    {id:2,
        flower:'이모르뗄',
        efficacy:'탄력 강화, 주름 완화, 항산화',
        caption:'한 번 피면 시들지 않는 이모르뗄,\n밤에도 꺼지지 않는 황금빛 생명력',
        img:'/images/dark/con4_08.png'
    },
    {id:3,
        flower:'라벤더',
        efficacy:'피부 진정, 스트레스 완화',
        caption:'라벤더 밭 위로 내려앉은 별빛처럼,\n하루의 긴장을 풀어줍니다.',
        img:'/images/dark/con4_07.png'
    },
    {id:4,
        flower:'블루탄지',
        efficacy:'재생,피부톤 균형,보습',
        caption:'은은한 푸른 향이 피부에 고요한 평온을\n남기고, 하루의 모든 열기를 식혀줍니다.',
        img:'/images/dark/con4_06.png'
    },
]
const PRODUCT_INGR_MAP = {
    1: [1, 2, 3],
    2: [1, 2, 4],
    3: [1, 2, 3],
    4: [1, 4, 3],
  }

  const pickIngr = (prodId) =>
    (PRODUCT_INGR_MAP[prodId] || [1, 2, 3])
      .map((ingId) => DarkIngr.find((d) => d.id === ingId))
      .filter(Boolean);

const DarkProduct = () => {
    const [activeId, setActiveId] = useState(DarkProducts[0].id);
    const activeIngr = pickIngr(activeId);
    const renderSlide = (t) => (
        <SwiperSlide key={t.id}>
          <Item>
            <div className="shadow-effect">
              <img className="img-circle" src={t.img} alt={t.name} />
                <div className="testimonial-name">{t.name}</div>
              <p>{t.text}</p>
            </div>
          </Item>
        </SwiperSlide>
      );
    return (
        <DarkProductStyle>
            <div className="inner">
            <div className="left">
                <ul className="ingr-list" key={activeId}>
                   {
                    activeIngr.map((ing) => (
                   <li key={ing.id}>
                        <p className="txt">
                            <span>{ing.efficacy}</span>
                        <strong>{ing.flower}</strong>
                        <em>{ing.caption}</em>
                            </p>
                            <p className="img">

                        <img src={ing.img} alt={ing.flower} />
                            </p>
                    </li>))
                    }
                </ul>
            </div>
            <div className="right">
            <Wrap className="testimonials">
                <div className="container">
                    <CarouselStyle>
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        loop
                        centeredSlides
                        speed={450}
                        autoplay={{ delay: 4000, disableOnInteraction: false }}
                        navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
                        slidesPerView={3}
                        breakpoints={{
                        0: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1170: { slidesPerView: 3 },
                        }}
                        onInit={(swiper) => setActiveId(DarkProducts[swiper.realIndex].id)}
                        onSlideChange={(swiper) => setActiveId(DarkProducts[swiper.realIndex].id)}
                    >
                        {DarkProducts.map((t) => renderSlide(t))}
                    </Swiper>
                    <p className="btns">
                    <NavButton className="swiper-button-prev"></NavButton>
                    <NavButton className="swiper-button-next"></NavButton>
                    </p>
                    </CarouselStyle>
                </div>
                </Wrap>
            </div>
            </div>
        </DarkProductStyle>
    );
};

export default DarkProduct;