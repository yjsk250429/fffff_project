import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const LastestList = ({ category }) => {
    const { products } = useSelector((state) => state.product);
    const { option } = products;
    const selectedOption = option?.length > 1 ? option[1] : option?.length === 1 ? option[0] : null;

    const price = selectedOption?.price ?? '';
    const size = selectedOption?.size ?? '';

    let list = products.filter((product) => product.isNew === true);
    if (category) {
        list = list.filter((item) => item.category === category);
    }
    list = [...list].sort((a, b) => b.id - a.id);

    return (
        <Swiper
            speed={400}
            slidesPerView={3.5}
            spaceBetween={15}
            navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }}
            breakpoints={{
                0: {
                    slidesPerView: 1,
                },
                391: {
                    slidesPerView: 3.5,
                },
            }}
        >
            {list.map((item) => (
                <SwiperSlide key={item.id}>
                    <Link to={`/product/${item.category}/${item.id}`}>
                        <div className="img-wrap">
                            <img src={item.image} alt={item.title} />
                        </div>
                        <div className="text">
                            <strong>{item.title}</strong>
                            <span>
                                {' '}
                                {typeof item.option[0].size === 'number' &&
                                    `${item.option[0].size} ${item.unit}`}
                            </span>
                            <em>
                                {item.option[0].price
                                    .toString()
                                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                원
                            </em>
                        </div>
                    </Link>
                </SwiperSlide>
            ))}
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
        </Swiper>
    );
};

export default LastestList;
