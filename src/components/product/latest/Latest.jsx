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

            <h2>{category?.toLowerCase() === 'fragrance'
    ? `HOME & ${category.toUpperCase()}`
    : `${(category || '').toUpperCase()} CARE`
  }</h2>
            <em>처음 만나는 부드러움, 록시땅 프리미엄</em>
                <h3>New Arrivals</h3>
            <div className="list-wrap">
                <div className="img-wrap">
                    <img src={thumSrc} alt={`new ${category}`} />
                </div>
                <LastestList category={category}/>
    
            </div>
        </LatestStyle>
    );
}
};

export default Latest;