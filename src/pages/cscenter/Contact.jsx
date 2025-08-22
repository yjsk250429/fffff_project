import { Link } from 'react-router-dom';
import { ContactStyle, CsCenterVisual } from './style';
import { TabBarStyle } from '../about/style';

import CustomerList from '../../components/cscenter/contact/CustomerList';
// import { Pagination } from 'swiper/modules';

const Contact = () => {
    return (
        <ContactStyle>
            <CsCenterVisual>
                <div className="inner"></div>
            </CsCenterVisual>
            <TabBarStyle className="tabBar">
                <li>
                    <Link to="/cscenter/faq">FAQ</Link>
                </li>
                <li className="on">
                    <Link to="/cscenter/contact">문의하기</Link>
                </li>
            </TabBarStyle>
            <div className="inner">
                <CustomerList />
                {/* <Pagination /> */}
            </div>
        </ContactStyle>
    );
};

export default Contact;
