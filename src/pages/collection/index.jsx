/*
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
*/

import { useSelector, useDispatch } from 'react-redux';
import { collectionActions } from '../../store/modules/collectionSlice';
import { CollectionLineupStyle, CollectionVisualStyle } from './style';
import CollectionList from '../../components/collection/CollectionList';
import CollectionProductList from '../../components/collection/CollectionProductList';
import CollectionIntro from '../../components/collection/CollectionIntro';

const Collection = () => {
    const dispatch = useDispatch();
    const { collections, selectedId, products } = useSelector((state) => state.collection);

    const selectedCollection = collections.find((line) => line.id === selectedId);

    // 선택된 컬렉션에 속한 제품만 필터링
    const filteredProducts = products.filter((product) => product.collection == selectedId);

    return (
        <>
            <CollectionVisualStyle>
                <section className="visual"></section>
            </CollectionVisualStyle>
            <CollectionIntro />
            <CollectionLineupStyle>
                {collections.map((line) => (
                    <li
                        key={line.id}
                        onClick={() => dispatch(collectionActions.selectCollection(line.id))}
                    >
                        {line.title}
                    </li>
                ))}
            </CollectionLineupStyle>
            <CollectionList />
            <CollectionProductList />
        </>
    );
};

export default Collection;
