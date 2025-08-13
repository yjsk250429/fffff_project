// // 상태관리+전체배치

// import GiftContent from './GiftContent';
// import GiftTab from './GiftTab';
// import { GiftListStyle } from './style';

// const GiftList = () => {
//     return (
//         <GiftListStyle>
//             {/* 카테고리탭 */}
//             <GiftTab />
//             {/* 본문 */}
//             <GiftContent />
//         </GiftListStyle>
//     );
// };

// export default GiftList;

import GiftContent from './GiftContent';
import GiftTab from './GiftTab';
import { GiftListStyle } from './style';

const GiftList = () => {
    return (
        <GiftListStyle>
            <h3>어느 분을 위한 선물인가요?</h3>
            <GiftTab />
            <GiftContent />
        </GiftListStyle>
    );
};

export default GiftList;
