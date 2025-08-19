import { Swiper, SwiperSlide } from 'swiper/react';
import { ProductBannerStyle } from "./style";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import { Scrollbar, Navigation,  Autoplay } from 'swiper/modules';
import { IoIosArrowRoundForward } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const ProductBanner = () => {
    const navigate = useNavigate();

    const goHand = ()=>{
        navigate('/product/hand');
    };
    const goHair = ()=>{
        navigate('/product/hair');
    };
    const goSkin = ()=>{
        navigate('/product/skin');
    };
    const goBody = ()=>{
        navigate('/product/body');
    };
    const goFragrance = ()=>{
        navigate('/product/fragrance');
    };

    return (
        <ProductBannerStyle>
          <Swiper
        slidesPerView={1}
        spaceBetween={30}
        autoplay={{
            delay: 3000,
            disableOnInteraction: false,
}}
        loop={true}
        navigation={true}
        scrollbar={{ draggable: true,
             hide:true
             }}
        modules={[Scrollbar, Navigation, Autoplay]}
        className="mySwiper"
      >
            
        <SwiperSlide className='bn1' onClick={()=>goHand()}>
        <div className="inner">
            <span>핸드케어</span>
            <strong>전 세계 NO.1 <span>

            시어 버터 핸드크림
            </span>
            </strong>
            <em>극심한 건조를 이기는 시어버터 핸드크림을 만나보세요.</em>
            <p className='more'>View More<i><IoIosArrowRoundForward />
            </i></p>
        </div>
            
        </SwiperSlide>

        <SwiperSlide className='bn2' onClick={()=>goHair()}>
        <div className="inner">
            <span>헤어케어</span>
            <strong>두피 청정 <span>

            아로마콜로지 헤어케어
            </span>
            </strong>
            <em>5가지 오일 함유된 헤어 케어 솔루션을 만나보세요.</em>
            <p className='more'>View More<i><IoIosArrowRoundForward />
            </i></p>
        </div>
            </SwiperSlide>

        <SwiperSlide className='bn3' onClick={()=>goSkin()}>
        <div className="inner">
            <span>스킨케어</span>
            <strong>전 세계 베스트<span>

            이모르뗄 오일 인 세럼
            </span>
            </strong>
            <em>고농축 골든 캡슐로 수분 광채를 채워주는 세럼을 만나보세요.</em>
            <p className='more'>View More<i><IoIosArrowRoundForward />
            </i></p>
        </div>
        </SwiperSlide>
       
      
        <SwiperSlide className='bn4' onClick={()=>goBody()}>
        <div className="inner">
            <span>바디케어</span>
            <strong>여름날을 가득 <span>

            채우는 싱그러운 향기
            </span>
            </strong>
            <em>더운여름 사용하기 좋은 버베나 컬렉션을 만나보세요.</em>
            <p className='more'>View More<i><IoIosArrowRoundForward />
            </i></p>
        </div>
            </SwiperSlide>
        
    <SwiperSlide className='bn5' onClick={()=>goFragrance()}>
        <div className="inner">
            <span>향수&홈 프래그런스</span>
            <strong>록시땅 베스트셀러 <span>

            코쿤 릴랙싱 필로우 미스트
            </span>
            </strong>
            <em>5가지 오일이 함유된 아로마 향을 만나보세요.</em>
            <p className='more'>View More<i><IoIosArrowRoundForward />
            </i></p>
        </div>
        </SwiperSlide>
      </Swiper>



        </ProductBannerStyle>
    );
};

export default ProductBanner;