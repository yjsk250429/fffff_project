import CollectionProductItem from './CollectionProductItem';
import { CollectionProductStyle } from './style';

const CollectionProductList = () => {
    return (
        <CollectionProductStyle>
            <div className="inner">
                <h2>시어버터 컬렉션</h2>
                <ul>
                    <CollectionProductItem />
                    <CollectionProductItem />
                    <CollectionProductItem />
                    <CollectionProductItem />
                </ul>
            </div>
        </CollectionProductStyle>
    );
};

export default CollectionProductList;
