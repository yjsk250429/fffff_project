import LastestList from "./LastestList";
import { LatestStyle } from "./style";

const Latest = () => {
    return (
        <LatestStyle>
            <div className="inner">

            <h2>신규 상품</h2>
            <em>처음 만나는 부드러움, 록시땅의 신제품</em>
            <div className="list-wrap">
                <div className="img-wrap">
                    <img src="/images/hand.png" alt="" />
                </div>
                <LastestList/>
            </div>
            </div>
        </LatestStyle>
    );
};

export default Latest;