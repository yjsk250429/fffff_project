import { useSelector } from 'react-redux';
import GiftItem from './GiftItem';
import { GiftContentStyle } from './style';

const GiftContent = () => {
    const { list, activeId } = useSelector((state) => state.gift);
    const activeGift = list.find((g) => g.id === activeId);

    if (!activeGift) return null;

    const { label, image, tags, items } = activeGift;

    return (
        <GiftContentStyle>
            <div className="left">
                <img src={image} alt={label} />
            </div>
            <div className="right">
                <strong className="title">{label}</strong>
                {tags && (
                    <p className="tags">
                        {tags.map((tag) => (
                            <span key={tag}>#{tag}</span>
                        ))}
                    </p>
                )}
                <ul className="grid">
                    {items.map((item, idx) => (
                        <GiftItem key={idx} item={item} />
                    ))}
                </ul>
            </div>
            <p className="btn">
                <button>
                    <img src="/images/gift/icons_right.png" alt="더보기 버튼" />
                </button>
                {/* <p>더보기</p> */}
            </p>
        </GiftContentStyle>
    );
};

export default GiftContent;
