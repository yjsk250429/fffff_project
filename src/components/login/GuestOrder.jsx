import { useState } from 'react';
import { paymentActions } from '../../store/modules/paymentSlice';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const GuestOrder = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [forms, setForms] = useState({
        orderNo: '',
        name: '',
    });

    const { orderNo, name } = forms;

    const changeInput = (e) => {
        const { value, name } = e.target;
        setForms({
            ...forms,
            [name]: value,
        });
    };
    const onSubmit = (e) => {
        e.preventDefault();
        if (!orderNo.trim() || !name.trim()) return;
        dispatch(paymentActions.setGuestLookup({ orderNo, name }));
        navigate('/mypage');
    };

    return (
        <form onSubmit={onSubmit}>
            <div className="right">
                <h3>비회원 주문조회</h3>
                <div className="number-input">
                    <p>
                        <input
                            type="text"
                            name="orderNo"
                            value={orderNo}
                            placeholder="주문번호"
                            onChange={changeInput}
                        />
                    </p>
                    <p>
                        <input
                            type="text"
                            name="name"
                            value={name}
                            placeholder="주문자 성함"
                            onChange={changeInput}
                        />
                    </p>
                </div>

                <p className="btn2">
                    <button>주문 확인</button>
                </p>
            </div>
        </form>
    );
};

export default GuestOrder;
