import { Link } from 'react-router-dom';
import { ContactStyle, CsCenterVisual } from './style';
import { TabBarStyle } from '../about/style';
import CustomerList from '../../components/cscenter/contact/CustomerList';
import BreadCrumb from '../../ui/BreadCrumb';
import Pagination from '../../components/pagination';

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
            <BreadCrumb text1="HOME" text2='고객센터' text3='문의하기' color3="#000"/>
                <CustomerList />
                <Pagination />
            </div>
        </ContactStyle>
    );
};

export default Contact;
