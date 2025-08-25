import BestGift from '../../components/gift/content1/BestGift';
import GiftList from '../../components/gift/content2/GiftList';
import GiftMyself from '../../components/gift/content3/GiftMyself';
import SheaButter from '../../components/gift/content4/SheaButter';
import TopBtn from '../../ui/TopBtn';
import { GiftVisualStyle, SliderStyle, AutoSliderStyle, GiftWrap } from './style';

const gift = [
    'Cadeau',
    'Regalo',
    'هدية',
    'Gift',
    '선물',
    'מתנה',
    'Donum',
    'Lahja',
    'Hadiah',
    'Geschenk',
];

const Gift = () => {
    return (
        <GiftWrap>
            <GiftVisualStyle>
                <div className="visual"></div>
            </GiftVisualStyle>

            {/* ✅ 무한 슬라이더 */}
            <SliderStyle>
                <AutoSliderStyle>
                    <div className="track">
                        {/* 배열을 3번 반복해서 더 안정적인 무한 반복 */}
                        {[...gift, ...gift, ...gift].map((text, i) => (
                            <div className="item" key={i}>
                                {text}
                            </div>
                        ))}
                    </div>
                </AutoSliderStyle>
            </SliderStyle>

            <BestGift />
            <GiftList />
            <GiftMyself />
            <SheaButter />
            <TopBtn />
        </GiftWrap>
    );
};

export default Gift;
