import LastestList from "./LastestList";
import { LatestStyle } from "./style";

const Latest = () => {
    return (
        <LatestStyle>
            <h2>신규 상품</h2>
            <em>처음 만나는 부드러움, 록시땅의 신제품</em>
            <div className="list-wrap">
                <div className="img-wrap">
                    <img src="/images/list_con1_0.png" alt="" />
                </div>
                <LastestList/>
            </div>
        </LatestStyle>
    );
};

export default Latest;