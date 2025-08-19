import { Link } from 'react-router-dom';
import { Bcorp_VisualStyle, TabBarStyle } from '../../components/about/style';
import { BcorpStyle } from '../../components/about/becorp/style';
import Content1 from '../../components/about/becorp/content1';
import Content2 from '../../components/about/becorp/content2';
import Content3 from '../../components/about/becorp/content3';
import Content4 from '../../components/about/becorp/content4';

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
        </BcorpStyle>
    );
};

export default Bcorp;
