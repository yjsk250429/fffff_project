import RecommandItem from "./RecommandItem";
import { RecommandListStyle } from "./style";


const RecommandList = () => {
    return (
        <RecommandListStyle>
            <div className="inner">
                <h2>관련 추천 제품</h2>
                <ul>
                    <RecommandItem/>
                {/* map, include 사용 */}
                </ul>
            </div>
        </RecommandListStyle>
    );
};

export default RecommandList;