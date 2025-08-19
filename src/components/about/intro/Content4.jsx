import { PiDotOutlineFill } from 'react-icons/pi';

const items = [
    {
        img: '/images/about/story08.png',
        alt: '생물다양성 보존',
        overlay: 'PROTECTING BIOVERSITY',
        title: '생물다양성 보존',
        points: [
            '친환경 방식으로 원료 조달',
            '지속 가능한 방식으로 원료 소싱',
            '생물다양성 복원 및 보호를 위한 개별 국가의 활동 장려',
        ],
    },
    {
        img: '/images/about/story09.png',
        alt: '다양성과 포용성 증진',
        overlay: 'HUMANS',
        title: '다양성과 포용성 증진',
        points: [
            '생산자와 공급자들을 향한 지원',
            '일터에서의 웰빙 지수 개선',
            '팀 교육 및 발전을 위한 노력',
        ],
    },
    {
        img: '/images/about/story10.png',
        alt: '기후 변화 완화',
        overlay: 'REDUCING WASTE',
        title: '기후 변화 완화',
        points: [
            '쓰레기 배출 감소',
            '전 벨류 체인에 걸쳐 폐기 및 오염 감소를 물류 시스템 구축\n25년 까지 100% 재생에너지 사용',
        ],
    },
];

const Content4 = () => {
    return (
        <section id="con4">
            <strong>Group Sustainability</strong>
            <ul>
                {items.map((item, idx) => (
                    <li key={idx}>
                        <div className="img-wrap">
                            <img src={item.img} alt={item.alt} />
                            <div className="overlay">
                                <p>{item.overlay}</p>
                            </div>
                        </div>

                        <em>{item.title}</em>

                        {item.points.map((point, i) => (
                            <p key={i}>
                                <PiDotOutlineFill /> {point}
                            </p>
                        ))}
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Content4;
