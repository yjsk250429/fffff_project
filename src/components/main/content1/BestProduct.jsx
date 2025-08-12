// import SwiperWithAnimation from "./BestProductList";
// import BestProductList from "./BestProductList";
import BestProductList from "./BestProductList";
import { BestListStyle, BestProductStyle } from "./style";


const BestProduct = () => {
    return (
        <BestProductStyle>
            <div className="inner">
                <div className="text">
                    <h2>베스트 상품</h2>
                    <p>은은하고 세련된 향이 하루를 감싸며 사랑받고 있습니다.<br/>
                    자연에서 온 시어버터, 아몬드, 버베나의 정수를 담아 피부에 깊은 영양과 촉촉함을 전합니다.</p>
                    {/* 모두보기 버튼 */}
                </div>
                <BestListStyle className="list">
               <BestProductList/>
                </BestListStyle>
            </div>
        </BestProductStyle>
    );
};

export default BestProduct;