import BestGift from '../../components/gift/BestGift';
import ForMyself from '../../components/gift/ForMyself';
import ForWho from '../../components/gift/ForWho';
import SheaButter from '../../components/gift/SheaButter';
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
                <AutoSliderStyle class="marquee">
                    <div class="track">
                        <div class="content">
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
            <ForWho />
            <ForMyself />
            <SheaButter />
        </>
    );
};

export default Gift;
