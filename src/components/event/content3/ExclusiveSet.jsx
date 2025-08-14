import ExclusiveSetItem from './ExclusiveSetItem';
import { ExclusiveSetStyle } from './style';
import exclusiveSetData from '../../../assets/api/exclusiveSetData';

const ExclusiveSet = () => {
    return (
        <ExclusiveSetStyle>
            <strong>
                공식몰 단독 기획 세트 <span>Exclusive set</span>
            </strong>
            <em>
                오직 공식몰에서만 만나볼 수 있는
                <br />
                특별한 기프트 세트 및 단독 제품을 만나보세요.
            </em>
            <ul>
                {exclusiveSetData.map((item) => (
                    <ExclusiveSetItem key={item.id} {...item} />
                ))}
            </ul>
        </ExclusiveSetStyle>
    );
};

export default ExclusiveSet;
