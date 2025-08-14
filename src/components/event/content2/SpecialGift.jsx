import Item from './Item';
import { SpecialGiftStyle } from './style';
import specialGiftData from '../../../assets/api/specialGiftData';

const SpecialGift = () => {
    return (
        <SpecialGiftStyle>
            <em>Your Special L’OCCITANE Benefits</em>
            <strong>오직 공식몰 고객님께만 드리는 단독 3대 혜택</strong>
            <ul>
                {specialGiftData.map((event) => (
                    <Item key={event.id} {...event} />
                ))}
            </ul>
        </SpecialGiftStyle>
    );
};

export default SpecialGift;
