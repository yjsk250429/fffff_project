// // 상단 탭 버튼

// import { useSelector } from 'react-redux';

// const GiftTab = () => {
//     const { gifts } = useSelector((state) => state.gift);
//     const { label } = gifts;
//     return (
//         <ul className="tab">
//             {gifts.map((gift) => (
//                 <li
//                     key={gift.id}
//                     // className={activeTab === index ? 'active' : ''}
//                     // onClick={() => setActiveTab(index)}
//                 >
//                     {label}
//                 </li>
//             ))}
//         </ul>
//     );
// };

// export default GiftTab;
import { useDispatch, useSelector } from 'react-redux';
import { setActiveId } from '../../../store/modules/giftSlice';
import { GiftTabStyle } from './style';

const GiftTab = () => {
    const dispatch = useDispatch();
    const { list, activeId } = useSelector((state) => state.gift);

    return (
        <GiftTabStyle className="tab">
            {list.map((gift) => (
                <li
                    key={gift.id}
                    className={gift.id === activeId ? 'on' : ''}
                    onClick={() => dispatch(setActiveId(gift.id))}
                >
                    {gift.label}
                </li>
            ))}
        </GiftTabStyle>
    );
};

export default GiftTab;
