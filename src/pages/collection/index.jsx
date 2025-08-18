import { useSelector, useDispatch } from 'react-redux';
import { collectionActions } from '../../store/modules/collectionSlice';
import { CollectionLineupStyle, CollectionVisualStyle } from './style';
import CollectionList from '../../components/collection/CollectionList';
import CollectionProductList from '../../components/collection/CollectionProductList';
import CollectionIntro from '../../components/collection/CollectionIntro';

const Collection = () => {
    const dispatch = useDispatch();
    const { collections, selectedId, products, showProducts } = useSelector(
        (state) => state.collection
    );

    const selectedCollection = collections.find((line) => line.id === selectedId);

    // Switch문으로 컬렉션 매칭 (문자열만)
    const filteredProducts = products.filter((product) => {
        if (!selectedCollection || !product.collection) return false;

        switch (selectedCollection.title) {
            case '시어 버터':
                return product.collection === '시어 버터';
            case '버베나':
                return product.collection === '버베나';
            case '체리 블라썸':
                return product.collection === '체리 블라썸';
            case '아몬드':
                return product.collection === '아몬드';
            case '이모르뗄':
                return product.collection === '이모르뗄';
            case '라벤더':
                return product.collection === '라벤더';
            case '꺄드':
                return product.collection === '꺄드';
            case '로즈':
                return product.collection === '로즈';
            default:
                return false;
        }
    });

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
            {showProducts && (
                <CollectionProductList
                    products={filteredProducts}
                    title={selectedCollection?.title}
                />
            )}
        </>
    );
};

export default Collection;
