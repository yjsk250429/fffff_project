import { useParams } from "react-router-dom";
import { IngredientStyle } from "./style";


const Ingredient = ({thisItem}) => {

    const {id, title, label, description, unit, option}=thisItem;
    return (
        <IngredientStyle>
            <div className="inner">
            <h3>원료</h3>
            <ul>
                <li>
                    <img src="/images/productDetail/almond.png" alt="시어버터" />
                    <p>
                    <strong>시어버터</strong>
                        지방산이 풍부한 시어 버터는 아프리카 여성들이 수세기 동안 뜨거운 날씨와 건조함으로부터 피부와 모발을 보호하는데 사용하였습니다. 피부를 진정시키는 것으로 알려진 오메가 6와 오메가 3가 풍부하게 함유되어있습니다.</p>
                </li>
                <li>
                    <img src="/images/productDetail/glucan.png" alt="베타글루칸" />
                    <p>
                    <strong>베타 글루칸</strong>
                        지방산이 풍부한 시어 버터는 아프리카 여성들이 수세기 동안 뜨거운 건조함으로부터 피부와 모발을 보호하는데 사용하였습니다. 피부를 진정시키는 것으로 알려진 오메가 6와 오메가 3가 풍부하게 함유되어있습니다.</p>
                </li>
            </ul>
            <dl>
                <dt>제품명</dt>
                <dd>{title}</dd>

                <dt>용량</dt>
                <dd>{option.map((op)=><p key={op}>{op.size}{unit} </p>)}</dd>

                <dt>혜택</dt>
                <dd>#No.1 핸드크림 #손끝 광채 크림 #트루 시어 버터</dd>

                <dt>사용방법</dt>
                <dd>
                    <p>산뜻하게, 더 촉촉하게<br/>손끝까지 시어 버터의 힘이 닿도록.</p>
                    <p>완벽한 손 보습의 완성,<br/>3초에 1개씩 판매* 되는 NO.1** 핸드크림<br/>NEW 록시땅 시어 버터 핸드크림 150ml</p>
                    <p>시어 버터 20%를 담아 손끝까지 깊은 영양을 전하는 핸드크림.<br/>끈적임 없이 빠르게 스며들어 하루 종일 편안한 손결과 건강한 윤기를 선사합니다.</p>
                    <p>시어 나무 너트에서 얻은 고농축 시어 버터가 피부 장벽을 탄탄하게 강화하고,<br/>건조함과 자극을 진정시켜 탄력 있고 건강한 손 피부로 가꿔줍니다.</p>
                    <p>부드럽고 산뜻하게 녹아드는 크리미 텍스처에 트루 시어 버터의 파우더 머스크 향을 더해, 사계절 누구나 기분 좋게 사용할 수 있습니다.</p>
                    <p>* 2023년 전 세계 시어 버터 핸드크림 (30ml, 50ml, 75ml, 150ml) 판매 기준<br/>**2023-2024년 핸드크림 카테고리 온·오프라인 매출 기준 1위, 보떼 리서치</p>
                </dd>
            </dl>
            </div>
        </IngredientStyle>
    );
};

export default Ingredient;