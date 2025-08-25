import Gift_3setList from '../../components/event/content1/Gift_3setList';
import SpecialGift from '../../components/event/content2/SpecialGift';
import ExclusiveSet from '../../components/event/content3/ExclusiveSet';
import Event3 from '../../components/event/content4/Event3';
import TopBtn from '../../ui/TopBtn';
import { EventVisualStyle, EventWrap } from './style';

const Event = () => {
    return (
        <EventWrap>
            <EventVisualStyle>
                <div className="visual">
                    <p>오직 록시땅 공식몰에서만 누릴 수 있는 다양한 혜택</p>
                    <strong>WELCOME</strong>
                    <img src="./images/event/header_logo.png" alt="" />
                </div>
            </EventVisualStyle>
            <Gift_3setList />
            <SpecialGift />
            <ExclusiveSet />
            <Event3 />
            <TopBtn />
        </EventWrap>
    );
};

export default Event;
