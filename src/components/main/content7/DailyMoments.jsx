import DailyList from './DailyList';
import { DailyMomentsStyle } from './style';

const DailyMoments = () => {
    return (
        <DailyMomentsStyle>
            <div className="inner">
                <h2>Daily Moments with L’Occitane</h2>
                <em>록시땅과 함께하는 하루의 순간들</em>

                <div className="insta-wrap">
                    <DailyList />
                </div>
            </div>
        </DailyMomentsStyle>
    );
};

export default DailyMoments;
