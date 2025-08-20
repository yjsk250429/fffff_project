import { CardListStyle } from './style';

const cardArr = [
    {
        id: 1,
        img: '/images/dark/con2_01.png',
        name: '문플라워',
        engName: 'Moonflower',
        fontColor: '#fff',
    },
    {
        id: 2,
        img: '/images/dark/con2_02.png',
        name: '블루 탄지',
        engName: 'Blue Tansy',
        fontColor: 'var(--hover-header)',
    },
    {
        id: 3,
        img: '/images/dark/con2_03.png',
        name: '이모르뗄',
        engName: 'Immortelle',
        fontColor: '#fff',
    },
    {
        id: 4,
        img: '/images/dark/con2_04.png',
        name: '라벤더',
        engName: 'Provence Lavender',
        fontColor: 'var(--hover-header)',
    },
];

const DarkCardList = () => {
    return (
        <CardListStyle>
            {cardArr.map((card) => (
                <div key={card.id} card={card} className="wrap">
                    <div className="side-a">
                        <p style={{ color: card.fontColor }}>
                            DARK
                            <br />
                            L’OCCITANE
                        </p>
                    </div>
                    <div className="side-b">
                        <img src={card.img} alt={card.name} />
                        <span>{card.engName}</span>
                        <strong>{card.name}</strong>
                    </div>
                </div>
            ))}
        </CardListStyle>
    );
};

export default DarkCardList;
