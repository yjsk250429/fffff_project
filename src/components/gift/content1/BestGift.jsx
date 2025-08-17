import { BestGiftStyle } from './style';
import { Link } from 'react-router-dom';

const bestGiftArr = [
    {
        id: 1,
        path: '/hair/6',
        image: '/images/gift/gift_con1_0.png',
        title: '헤어 세럼 듀오',
    },
    {
        id: 2,
        path: '/body/143',
        image: '/images/gift/gift_con1_1.png',
        title: '아몬드 바디 듀오 리추얼',
    },
    {
        id: 3,
        path: '/hand/74',
        image: '/images/gift/gift_con1_2.png',
        title: '리퀴드 솝 & 핸드 앤 바디 듀오',
    },
];

const BestGift = ({ title }) => {
    return (
        <BestGiftStyle>
            <div className="inner">
                <div className="text-wrap">
                    <em>A Gift from the Heart</em>
                    <strong>Best Gift</strong>
                    <p>
                        사랑하는 마음을 가장 아름답게
                        <br /> 담는 방법, 향기와 감촉으로 기억될 단 하나의 선물을 지금 만나보세요.
                    </p>
                    {/* <p className="btn">
                        <button>자세히 보기</button>
                    </p> */}
                </div>
                <div className="img-wrap">
                    <ul className="list">
                        {bestGiftArr.map((best) => (
                            <li key={best.id}>
                                <Link to={best.path}>
                                    <img src={best.image} alt={best.title} />
                                    <p className={title}>{best.title}</p>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </BestGiftStyle>
    );
};

export default BestGift;
