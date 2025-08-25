import BreadCrumb from '../../ui/BreadCrumb';
import OrderList from './OrderList';
import OrderStatus from './OrderStatus';
import { MyPageMainStyle } from './style';
import Tab from './Tab';

const MyPageMain = () => {
    return (
        <MyPageMainStyle>
            <BreadCrumb text1="HOME" text2="마이페이지" text3="주문내역" color3="#000" />
            <h3>마이페이지</h3>
            <Tab />
            <OrderStatus />
            <OrderList />
        </MyPageMainStyle>
    );
};
export default MyPageMain;
