import { GiftMyselfStyle } from './style';

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
                            <div className="img-wrap">
                                <img src="/images/gift/gift_con4_0.png" alt="Body" />
                                <p>Body</p>
                            </div>
                        </li>
                        <li>
                            <div className="img-wrap">
                                <img src="/images/gift/gift_con4_1.png" alt="Hair" />
                                <p>Hair</p>
                            </div>
                        </li>
                        <li>
                            <div className="img-wrap">
                                <img src="/images/gift/gift_con4_2.png" alt="Hand" />
                                <p>Hand</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </GiftMyselfStyle>
    );
};

export default GiftMyself;
