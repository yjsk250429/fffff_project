import { Link } from 'react-router-dom';
import { TabBarStyle } from '../about/style';
import { CsCenterVisual, FaqStyle } from './style';
import FaqMain from '../../components/cscenter/faq/FaqMain';

const Faq = () => {
    return (
        <FaqStyle>
            <CsCenterVisual>
                <div className="inner"></div>
            </CsCenterVisual>
            <TabBarStyle className="tabBar">
                <li className="on">
                    <Link to="/cscenter/faq">FAQ</Link>
                </li>
                <li>
                    <Link to="/cscenter/contact">문의하기</Link>
                </li>
            </TabBarStyle>
            <div className="inner">
                <FaqMain />
            </div>
        </FaqStyle>
    );
};

export default Faq;
