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
    const [errors, setErrors] = useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [data, setData] = useState({
        name: '',
        title: '',
        content: '',
        type: '',
        emailId: '',
        emailDomain: '',
    });

    const now = new Date();
    const changeInput = (e) => {
        const { value, name } = e.target;
        setData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };
    const onSubmit = (e) => {
        e.preventDefault();
        let newErrors = {};

        if (!data.type.trim()) newErrors.type = '문의 유형을 선택하세요';
        if (!data.title.trim()) newErrors.title = '제목을 입력하세요';
        if (!data.name.trim()) newErrors.name = '이름을 입력하세요';
        if (!data.emailId.trim() || !data.emailDomain.trim()) {
            newErrors.email = '이메일을 입력하세요';
        }
        if (!data.content.trim()) newErrors.content = '문의내용을 입력하세요';

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        const payload = {
            ...data,
            date: `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`,
        };
        dispatch(customerActions.addCustomer(payload));
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
                    <CustomerAddItem data={data} onChange={changeInput} errors={errors} />
                    <p className="btn">
                        <Button text="제출하기" type="submit" />
                    </p>
                </CustomerAddStyle>
            </form>
        </ContactStyle>
    );
};

export default CustomerAdd;
