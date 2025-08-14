import { NoticeStyle } from './style';

const Notice = () => {
    return (
        <NoticeStyle>
            <div className="title">
                <img src="/images/event/icons_notice.png" alt="느낌표아이콘" />
                <strong>혜택 유의 사항</strong>
            </div>
            <div className="desc">
                <p>- 1인 1회 한정, 타 증정품 혜택 및 구매 사은품과 중복 증정 불가  </p>
                <p>
                    - 샘플이 포함되어있는 세트 또는 할인 제품 구매 시 사은품 증정 불가 | 할인 및
                    쿠폰 혜택 적용 전 판매가로 합산하여 증정
                </p>
                <p>- 첫 구매 할인 적용 시 할인가 기준의 구매 금액대별 사은품 혜택 증정</p>
                <p>
                    - 사은품은 본사 사정으로 변경되거나, 조기 품절될 수 있으며 이는 교환 및 반품
                    사유가 될 수 없습니다.
                </p>
                <p>
                    - 여러 건을 주문하셔도 수취 정보가 동일할 경우 구매 건수에 관계 없이 높은
                    금액으로 합산되어 고객당 1회 증정됩니다.
                </p>
            </div>
        </NoticeStyle>
    );
};

export default Notice;
