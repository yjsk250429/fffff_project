import { useMemo, useState} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Scrollbar } from "swiper/modules";
import {
  SwiperWrap,
  Post,
  PostImg,
  PostName,
  PostAuthor,
  PostImgWrap
} from './style';
import "swiper/css";
import "swiper/css/scrollbar";
import { Link } from "react-router-dom";

const POSTS = [
  {
    id: "post1",
    path:'/hand/57',
    title: "시어 버터 핸드크림",
    author: "부드럽게 감싸는 깊고 풍부한 보습의 손길",
    image: "/images/main/item0.png",
    subImg: "/images/main/con-5&item0-1.png",
  },
  {
    id: "post2",
    path:'/body/131',
    title: "시어 버터 바디 케어",
    author: "깊은 영양으로 피부를 감싸는 매끄러운 피부",
    image: "/images/main/item1.png",
    subImg: "/images/main/item1-1.png",
  },
  {
    id: "post3",
    path:'/body/136',
    title: "리미티드 버베나 샤워 젤 ",
    author: "상쾌함을 선하하는 시트러스 허브 향",
    image: "/images/main/item2.png",
    subImg: "/images/main/item2-1.png",
  },
  {
    id: "post4",
    path:'/body/121',
    title: "아몬드 샤워 오일",
    author: "달콤한 아몬드 향의 촉촉한 여운",
    image: "/images/main/item3.png",
    subImg: "/images/main/item3-1.png",
  },
  {
    id: "post5",
    path:'/hair/26',
    title: "인텐시브 리페어 샴푸",
    author: "두피와 모발에 깊은 영양 선사",
    image: "/images/main/item4.png",
    subImg: "/images/main/item4-1.png",
  },
  {
    id: "post6",
    path:'/skin/195',
    title: "이모르뗄 오버나이트 리셋 오일 인 세럼",
    author: "피부 장벽을 강화시켜 최적의 유수분 밸런스로 케어",
    image: "/images/main/item5.png",
    subImg: "/images/main/item5-1.png",
  },
  {
    id: "post7",
    path:'/fragrance/216',
    title: "코쿤 드 세레니떼 릴랙싱 필로우 미스트",
    author: "편안하고 아늑한 숙면을 위한 리렉싱 스프레이",
    image: "/images/main/item6.png",
    subImg: "/images/main/item6-1.jpg",
  },
];


const PostCard = ({ post, isHovered }) => {
  return (
    <Post>
      <PostImgWrap className="img-wrap">
        
     <PostImg className={isHovered ? 'post-img' : ''} src={post.subImg} alt="product" />
     <PostImg className={isHovered ? '' : 'post-img'} src={post.image} alt="product" />
      </PostImgWrap>

        <div className="post-detail">
          <PostName className="post-name">{post.title}</PostName>
          <PostAuthor className="post-author">{post.author}</PostAuthor>
        </div>
    
    </Post>
  );
};

const BestProductList = () => {
  const slides = useMemo(() => POSTS, []);
  const [hovered, setHovered] = useState(null);

  return (

          <SwiperWrap>
            <Swiper
              modules={[Scrollbar, Mousewheel]}
              speed={400}
              mousewheel={{ invert: false }}
              scrollbar={{ draggable: true }}
              slidesPerView="auto"
              spaceBetween={0}
            >
              {slides.map((post) => (
                <SwiperSlide key={post.id} onMouseEnter={()=>setHovered(post.id)} onMouseLeave={()=>setHovered(null)} >
                  <Link to={post.path}>
                  <PostCard post={post} isHovered={hovered === post.id} />
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </SwiperWrap>

  );
};

export default BestProductList;
