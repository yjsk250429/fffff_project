import { PiHandbagSimple } from 'react-icons/pi';
import { IoHeart, IoHeartOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const CollectionProductItem = ({ product }) => {
    return (
        <li>
            <Link to=''>
            <div className="img-wrap">
                <img src="" alt="" />
                {/* <i>
                    <IoHeartOutline />
                    <IoHeart />
                </i> */}
            </div>
            <div className="text-wrap">
                <p className="product-info">
<<<<<<< HEAD
                    <strong>
                        아몬드 딜리셔스 핸드크림 <br />
                        아몬드 딜리셔스 핸드크림
                    </strong>
=======
                    <strong>아몬드 딜리셔스 핸드크림
>>>>>>> d58c1bbb0bf75eea41c80d99c5cc4d97e21c01ad
                    <span>★ 5.0</span>

                    </strong>
                    <em>NO.1 핸드크림</em>
                </p>
                <p className="price-info">
                    <span>150ml / 41,000원</span><i><PiHandbagSimple /></i>
                </p>
            </div>
            </Link>
        </li>
    );
};

export default CollectionProductItem;
