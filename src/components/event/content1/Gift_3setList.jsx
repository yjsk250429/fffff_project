import Gift_3setItem from './Gift_3setItem';
import gift3setData from '../../../assets/api/gift3setData';
import { Gift_3setStyle } from './style';

const Gift_3setList = () => {
    return (
        <Gift_3setStyle>
            <strong>공식몰에서 제공하는 특별 사은품 3종 세트를 만나보세요.</strong>
            <ul>
                {gift3setData.map((gift) => (
                    <Gift_3setItem key={gift.id} {...gift} />
                ))}
            </ul>
            <img src="/images/event/event0.png" alt="사은품3종세트" />
        </Gift_3setStyle>
    );
};

export default Gift_3setList;
