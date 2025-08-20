//1 문의하기
import { customerActions } from '../../../store/modules/customerSlice';
import { useDispatch } from 'react-redux';
import Button from '../../../ui/Button';
import { CustomerAddStyle } from './style';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import CustomerAddItem from './CustomerAddItem';
import { ContactStyle, CsCenterVisual } from '../../../pages/cscenter/style';
import { TabBarStyle } from '../../../pages/about/style';

const CustomerAdd = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [data, setData] = useState({
        name: '',
        title: '',
        content: '',
        inquiryType: '',
    });
    const { name, title, content, date } = data;
    const now = new Date();
    const changeInput = (e) => {
        const { value, name } = e.target;
        setData({
            ...data,
            [name]: value,
        });
    };
    const onSubmit = (e) => {
        e.preventDefault();
        if (!data.title.trim()) return;
        const payload = {
            ...data,
            date: `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`,
        };
        dispatch(customerActions.addCustomer(payload));
        navigate('/cscenter/contact');
    };

    const onGo = (e) => {
        e.preventDefault();
        navigate('/cscenter/contact');
    };
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
            <form onSubmit={onSubmit}>
                <CustomerAddStyle>
                    <h2>1:1 문의하기</h2>
                    <em>
                        궁금하신 점을 남겨 주시면,
                        <br />
                        영업일 2일내에 고객님의 이메일로 답변드리겠습니다.
                    </em>
                    <p>
                        <span>*</span>필수입력사항
                    </p>
                    <CustomerAddItem data={data} onChange={changeInput} />
                    <p className="btn">
                        <Button text="제출하기" type="submit" />
                    </p>
                </CustomerAddStyle>
            </form>
        </ContactStyle>
    );
};

export default CustomerAdd;
