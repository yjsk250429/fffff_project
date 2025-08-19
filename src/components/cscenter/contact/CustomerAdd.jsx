//1 문의하기

import { useDispatch } from 'react-redux';
import Button from '../../../ui/Button';
import { CustomerAddStyle } from './style';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import CustomerAddItem from './CustomerAddItem';

const CustomerAdd = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [data, setData] = useState({
        name: '',
        title: '',
        content: '',
        email: '',
    });
    const { name, title, content, date } = data;
    const now = new Date();
    const changeInput = (e) => {
        const { value, name } = e.target;
        setData({
            ...data,
            [name]: value,
        });
        const onSubmit = (e) => {
            e.preventDefault();
            if (!title.trim()) return;
            data.data = `${now.getFullYear()}-${now.getUTCMonth() + 1}-${now.getDay()}`;
            dispatch(customerActions.addCustomer(data));
            navigate('/customer');
        };
    };
    return (
        <CustomerAddStyle>
            <div>
                <h2>1:1 문의하기</h2>
                <em>
                    궁금하신 점을 남겨 주시면,
                    <br />
                    영업일 2일내에 고객님의 이메일로 답변드리겠습니다.
                </em>
                <p>
                    <span>*</span>필수입력사항
                </p>
                <CustomerAddItem />
                <p className="btn">
                    <Button text="제출하기" type="submit" />
                </p>
            </div>
        </CustomerAddStyle>
    );
};

export default CustomerAdd;
