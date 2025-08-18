import { useSelector, useDispatch } from 'react-redux';
import { collectionActions } from '../../store/modules/collectionSlice';
import { CollectionItemStyle } from './style';
import Button from '../../ui/Button';

const CollectionItem = () => {
    const dispatch = useDispatch();
    const { collections, selectedId } = useSelector((state) => state.collection);

    const selectedCollection = collections.find((item) => item.id === selectedId);

    if (!selectedCollection) return null;

    const handleShowProducts = () => {
        dispatch(collectionActions.showProducts());
    };

    return (
        <CollectionItemStyle>
            <div className="main">
                <img src={selectedCollection.mainimg} alt="" />
            </div>
            <div className="description">
                <strong>{selectedCollection.title}</strong>
                <em>{selectedCollection.desc}</em>
                <ul>
                    {selectedCollection.subimg.map((sub) => (
                        <li key={sub.id}>
                            <img src={sub.img} alt="" />
                        </li>
                    ))}
                </ul>
                <p className="button-wrap">
                    <Button
                        onClick={handleShowProducts}
                        text="제품보기"
                        bgColor="#000"
                        textColor="#fff"
                    />
                </p>
            </div>
        </CollectionItemStyle>
    );
};

export default CollectionItem;
