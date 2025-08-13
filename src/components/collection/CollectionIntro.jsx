import { CollectionIntroStyle } from './style';

const CollectionIntro = () => {
    return (
        <CollectionIntroStyle>
            <h2>Collection</h2>
            <p>
                록시땅은 제품 포뮬라에 최적의 농도로 천연 원료를 사용하는 것을 최우선으로 합니다.
                <br /> 프로방스산 아몬드, 브루키나파소 시어 버터 등 윤리적으로 공급받은 특별한 천연
                원료들을 만나보세요.
            </p>
            <ul className="image-wrap">
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </CollectionIntroStyle>
    );
};

export default CollectionIntro;
