import { useSelector, useDispatch } from 'react-redux';
import { collectionActions } from '../../store/modules/collectionSlice';
import { CollectionItemStyle } from './style';
import Button from '../../ui/Button';

const CollectionItem = () => {
    const dispatch = useDispatch();
    const { collections, selectedId } = useSelector((state) => state.collection);

    // 선택된 컬렉션만 가져오기
    const selectedCollection = collections.find((item) => item.id === selectedId);

    if (!selectedCollection) return null;

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
                    <Button text="제품보기" bgColor="#000" textColor="#fff"/>
                </p>
            </div>
        </CollectionItemStyle>
    );
};

export default CollectionItem;
/*
import collectionData from '../../assets/api/collectionData';

const { id, mainimg, title, desc, subimg } = collectionData[0];

const CollectionItem = () => {
    return (
        <CollectionItemStyle>
            <div className="main">
                <img src={mainimg} alt="" />
            </div>
            <div className="description">
                <strong>{title}</strong>
                <em>{desc}</em>
                <ul>
                    <li>
                        <img src={subimg[0].img} alt="" />
                    </li>
                    <li>
                        <img src={subimg[1].img} alt="" />
                    </li>
                    <li>
                        <img src={subimg[2].img} alt="" />
                    </li>
                </ul>
                <p className="button-wrap">
                    <button>제품 보기</button>
                </p>
            </div>
        </CollectionItemStyle>
    );
};
*/
