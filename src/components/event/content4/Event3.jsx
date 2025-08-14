import EventList from './EventList';
import Notice from './Notice';
import { Event3Style } from './style';

const Event3 = () => {
    return (
        <Event3Style>
            <EventList />
            {/* 1~3 */}
            <Notice />
            {/* 유의사항 */}
        </Event3Style>
    );
};

export default Event3;
