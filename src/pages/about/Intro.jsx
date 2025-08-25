import { Link } from 'react-router-dom';
import { Intro_VisualStyle, TabBarStyle } from '../../components/about/style';
import { IntroStyle } from '../../components/about/intro/style';
import Content1 from '../../components/about/intro/Content1';
import Content2 from '../../components/about/intro/Content2';
import Content3 from '../../components/about/intro/Content3';
import Content4 from '../../components/about/intro/Content4';
import Content5 from '../../components/about/intro/Content5';
import TopBtn from '../../ui/TopBtn';

const Intro = () => {
    return (
        <IntroStyle>
            <Intro_VisualStyle>
                <div className="visual"></div>
            </Intro_VisualStyle>
            <TabBarStyle className="tabBar">
                <li className="on">
                    <Link to="/about/intro">브랜드 소개</Link>
                </li>
                <li>
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
                <Content5 />
            </div>
            <TopBtn />
        </IntroStyle>
    );
};

export default Intro;
