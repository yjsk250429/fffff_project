import LastestList from "./LastestList";
import { LatestStyle } from "./style";

const Latest = ({category}) => {

    const thumImgs = {
        hand:'/images/hand.png',
        hair:'/images/hair.png',
        body:'/images/body.png',
        skin:'/images/skin.png',
        fragrance:'/images/perfume.png',
        refill:null,
    }

    const thumSrc = thumImgs[category];

    if(thumSrc){
    return (
        <LatestStyle>
            <div className="inner">

            <h2>신규 상품</h2>
            <em>처음 만나는 부드러움, 록시땅의 신제품</em>
            <div className="list-wrap">
                <div className="img-wrap">
                    <img src={thumSrc} alt={`new ${category}`} />
                </div>
                <LastestList category={category}/>
            </div>
            </div>
        </LatestStyle>
    );
}
};

export default Latest;