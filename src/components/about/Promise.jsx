import { PromiseStyle } from './style';
import { TabBarStyle } from './style';
import { Link } from 'react-router-dom';

const Promise = () => {
    return (
        <PromiseStyle>
            <TabBarStyle className="tabBar">
                    <li
                        
        
                    >
                        <Link to='/about/intro'>브랜드 소개</Link>
                    </li>
                    <li
                        className='on'
                    
                    >
                        <Link to='/about/promise'>
                            록시땅의 약속
                        </Link>
                    </li>
                    <li
                        
                    
                    >
                        <Link to='/about/bcorp'>Bcorp</Link>
                    </li>
                </TabBarStyle>
            <div className="inner">
                <h2>title2</h2>
            </div>
        </PromiseStyle>
    );
};

export default Promise;
