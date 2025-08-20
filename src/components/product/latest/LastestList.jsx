
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Mousewheel } from 'swiper/modules';
import { useSelector } from 'react-redux';

const LastestList = ({category}) => {
  const {products} = useSelector((state)=>state.product);
  const { id, label, title, unit, description, image, option, rating } = products;
  const selectedOption = option?.length > 1 ? option[1] : option?.length === 1 ? option[0] : null;

  const price = selectedOption?.price ?? '';
  const size = selectedOption?.size ?? '';

  let list = products.filter((product)=> product.isNew === true);
  if(category){
    list = list.filter((item)=>item.category === category);
  }
  list = [...list].sort((a, b) => b.id - a.id);

    return (
        <Swiper
        modules={[ Mousewheel]}
        speed={400}
        slidesPerView={3.5}
        spaceBetween={15}
        mousewheel={{ invert: false }}
      >
        {
          list.map((item)=>(
          <SwiperSlide key={item.id}>
            <div className="img-wrap">
            <img src={item.image} alt={item.title} />
            </div>
            <div className="text">
                <strong>{item.title}</strong>
                {/* <span>{item.option[0].size}{item.unit}</span> */}
                <span> {typeof item.option[0].size === 'number' && `${item.option[0].size} ${item.unit}`}</span>
                <em>{item.option[0].price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</em>
            </div>
        </SwiperSlide>
          ))
        }

      </Swiper>
    );
};

export default LastestList;