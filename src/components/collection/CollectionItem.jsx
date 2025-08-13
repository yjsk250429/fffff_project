import { CollectionItemStyle } from './style';

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

export default CollectionItem;
