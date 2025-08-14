// import CollectionProductItem from './CollectionProductItem';
// import { CollectionProductStyle } from './style';

// const CollectionProductList = ({ title }) => {
//     return (
//         <CollectionProductStyle>
//             <div className="inner">
//                 <h2>{title} 컬렉션</h2>
//                 <ul>
//                     <CollectionProductItem />
//                     <CollectionProductItem />
//                     <CollectionProductItem />
//                     <CollectionProductItem />
//                 </ul>
//             </div>
//         </CollectionProductStyle>
//     );
// };

// export default CollectionProductList;

import CollectionProductItem from './CollectionProductItem';
import { CollectionProductStyle } from './style';

const CollectionProductList = ({ products, title }) => {
    return (
        <CollectionProductStyle>
            <div className="inner">
                <h2>{title} 컬렉션</h2>
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
