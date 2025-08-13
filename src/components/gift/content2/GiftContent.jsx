// import { useSelector } from 'react-redux';
// import GiftItem from './GiftItem';

// // 탭별 아이템 렌더
// const GiftContent = () => {
//     const { gifts } = useSelector((state) => state.gift);
//     const { id, label, image, items } = gifts;
//     return (
//         <div className="content-wrap">
//             <div className="left">
//                 <img src={image} alt={label} />
//             </div>
//             <div className="right">
//                 <strong className="title">{label}</strong>
//                 {/* <p className="tags">
//                     {tags.map((tag) => (
//                         <span key={tag}>#{tag}</span>
//                     ))}
//                 </p> */}
//                 <ul className="grid">{/* <GiftItem /> */}</ul>
//             </div>
//         </div>
//     );
// };

// export default GiftContent;import { useSelector } from 'react-redux';
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
                {/* 더보기 버튼 */}
            </div>
        </GiftContentStyle>
    );
};

export default GiftContent;
