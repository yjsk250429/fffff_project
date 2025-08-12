import { Link } from 'react-router-dom';
import { BcorpStyle, TabBarStyle } from './style';

const Bcorp = () => {
    return (
        <BcorpStyle>
            <TabBarStyle className="tabBar">
                <li>
                    <Link to='/about/intro'>브랜드 소개</Link>
                </li>
                <li>
                    <Link to='/about/promise'>록시땅의 약속</Link>
                </li>
                <li className='on'>
                    <Link to='/about/bcorp'>Bcorp</Link>
                </li>
                </TabBarStyle>
            <div className="inner">
                <h2>title3</h2>
            </div>
        </BcorpStyle>
    );
};

export default Bcorp;
