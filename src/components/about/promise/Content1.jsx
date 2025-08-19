const Content1 = () => {
    const items = [
        {
            id: 1,
            img: '/images/about/promise02.png',
            alt: '지구를 위한 작은 실천, 큰 변화',
            overlay: ['REDUCING WASTE', '지구를 위한 작은 실천, 큰 변화'],
        },
        {
            id: 2,
            img: '/images/about/promise03.png',
            alt: '다채로운 생명의 가치를 지키다',
            overlay: ['RESPECTING BIODIVERSITY', '다채로운 생명의 가치를 지키다'],
        },
        {
            id: 3,
            img: '/images/about/promise04.png',
            alt: '여성의 손끝에서 피어나는 변화',
            overlay: ['EMPOWERING WOMEN', '여성의 손끝에서 피어나는 변화'],
        },
        {
            id: 4,
            img: '/images/about/promise05.png',
            alt: '정직한 손길과 함께 만든 가치',
            overlay: ['SUPPORTING PRODUCERS', '정직한 손길로 함께 만든 가치'],
        },
        {
            id: 5,
            img: '/images/about/promise06.png',
            alt: '장인의 손길로 완성되는 아름다움',
            overlay: ['CELEBRATING CRAFTMANSHIP', '장인의 손길로 완성되는 아름다움'],
        },
        {
            id: 6,
            img: '/images/about/promise07.png',
            alt: '소중한 눈을 위한 따뜻한 약속',
            overlay: ['CARING FOR SIGHTS', '소중한 눈을 위한 따뜻한 약속'],
        },
    ];

    return (
        <section id="con1">
            <ul>
                {items.map((item) => (
                    <li key={item.id}>
                        <div className="img-wrap">
                            <img src={item.img} alt={item.alt} />
                            <div className="overlay">
                                <p>
                                    {item.overlay[0]} <br />
                                    {item.overlay[1]}
                                </p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Content1;
