import { GiftMyselfStyle } from './style';
import { Link } from 'react-router-dom';

const GiftMyself = () => {
    return (
        <GiftMyselfStyle>
            <div>
                <div className="inner">
                    <div className="title">
                        <span>From root to skin</span>
                        <strong>A gift for myself.</strong>
                    </div>
                    <ul className="type">
                        <li>
                            <Link to="/product/body">
                                <div className="img-wrap">
                                    <img src="/images/gift/gift_con4_0.png" alt="Body" />
                                    <p>Body</p>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/product/hair">
                                <div className="img-wrap">
                                    <img src="/images/gift/gift_con4_1.png" alt="Hair" />
                                    <p>Hair</p>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/product/hand">
                                <div className="img-wrap">
                                    <img src="/images/gift/gift_con4_2.png" alt="Hand" />
                                    <p>Hand</p>
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </GiftMyselfStyle>
    );
};

export default GiftMyself;
