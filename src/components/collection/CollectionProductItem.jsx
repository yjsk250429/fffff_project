import { PiHandbagSimple } from 'react-icons/pi';
import { IoHeart, IoHeartOutline } from 'react-icons/io5';

const CollectionProductItem = () => {
    return (
        <li>
            <div className="img-wrap">
                <img src="" alt="" />
                <i>
                    <IoHeartOutline />
                    {/* <IoHeart /> */}
                </i>
            </div>
            <div className="text-wrap">
                <p className="product-info">
                    <strong>아몬드 딜리셔스 핸드크림</strong>
                    <span>★ 5.0</span>
                    <em>NO.1 핸드크림</em>
                </p>
                <p className="price-info">
                    <span>150ml / 41,000원</span>
                    <i>
                        <PiHandbagSimple />
                    </i>
                </p>
            </div>
        </li>
    );
};

export default CollectionProductItem;
