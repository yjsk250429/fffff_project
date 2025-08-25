import { Promise_VisualStyle, TabBarStyle } from '../../components/about/style';
import { Link } from 'react-router-dom';
import Content1 from '../../components/about/promise/Content1';
import Content2 from '../../components/about/promise/Content2';
import Content3 from '../../components/about/promise/Content3';
import Content4 from '../../components/about/promise/Content4';
import { PromiseStyle } from '../../components/about/promise/style';
import TopBtn from '../../ui/TopBtn';
const Promise = () => {
    return (
        <PromiseStyle>
            <Promise_VisualStyle>
                <div className="visual"></div>
            </Promise_VisualStyle>
            <TabBarStyle className="tabBar">
                <li>
                    <Link to="/about/intro">브랜드 소개</Link>
                </li>
                <li className="on">
                    <Link to="/about/promise">록시땅의 약속</Link>
                </li>
                <li>
                    <Link to="/about/bcorp">Bcorp</Link>
                </li>
            </TabBarStyle>
            <div className="inner">
                <Content1 />
                <Content2 />
                <Content3 />
                <Content4 />
            </div>
            <TopBtn />
        </PromiseStyle>
    );
};

export default Promise;
