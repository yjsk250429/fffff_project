import CollectionIntro from '../../components/collection/CollectionIntro';
import CollectionList from '../../components/collection/CollectionList';
import CollectionProductList from '../../components/collection/CollectionProductList';
import { CollectionLineupStyle, CollectionVisualStyle } from './style';

const Collection = () => {
    return (
        <>
            <CollectionVisualStyle>
                <section className="visual"></section>
            </CollectionVisualStyle>
            <CollectionIntro />
            <CollectionLineupStyle>
                <li>시어버터</li>
                <li>버베나</li>
                <li>체리 블라썸 </li>
                <li>아몬드</li>
                <li>이모르뗄</li>
                <li>라벤더</li>
                <li>꺄드</li>
                <li>로즈</li>
            </CollectionLineupStyle>
            <CollectionList />
            <CollectionProductList />
        </>
    );
};

export default Collection;
