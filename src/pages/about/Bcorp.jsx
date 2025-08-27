import { Link } from 'react-router-dom';
import { Bcorp_VisualStyle, TabBarStyle } from '../../components/about/style';
import { BcorpStyle } from '../../components/about/bcorp/style';
import Content1 from '../../components/about/bcorp/Content1';
import Content2 from '../../components/about/bcorp/Content2';
import Content3 from '../../components/about/bcorp/Content3';
import Content4 from '../../components/about/bcorp/Content4';
import TopBtn from '../../ui/TopBtn';

const Bcorp = () => {
    return (
        <BcorpStyle>
            <Bcorp_VisualStyle>
                <div className="visual"></div>
            </Bcorp_VisualStyle>
            <TabBarStyle className="tabBar">
                <li>
                    <Link to="/about/intro">브랜드 소개</Link>
                </li>
                <li>
                    <Link to="/about/promise">록시땅의 약속</Link>
                </li>
                <li className="on">
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
        </BcorpStyle>
    );
};

export default Bcorp;
