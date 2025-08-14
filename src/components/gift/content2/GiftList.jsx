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
