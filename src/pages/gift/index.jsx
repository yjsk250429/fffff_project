import BestGift from '../../components/gift/content1/BestGift';
import GiftList from '../../components/gift/content2/GiftList';
import GiftMyself from '../../components/gift/content3/GiftMyself';
import SheaButter from '../../components/gift/content4/SheaButter';

import { AutoSliderStyle, GiftVisualStyle, SliderStyle } from './style';

const gift = [
    'Cadea u',
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
const texts = [...gift, ...gift, ...gift];

const Gift = () => {
    return (
        <>
            <GiftVisualStyle>
                <div className="visual"></div>
            </GiftVisualStyle>
            <SliderStyle>
                <AutoSliderStyle className="marquee">
                    <div className="track">
                        <div className="content">
                            <ul>
                                {texts.map((text, i) => (
                                    <li key={i}>{text}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </AutoSliderStyle>
            </SliderStyle>
            <BestGift />
            <GiftList />
            <GiftMyself />
            <SheaButter />
        </>
    );
};

export default Gift;
