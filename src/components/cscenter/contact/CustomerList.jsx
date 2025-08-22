import { useDispatch, useSelector } from 'react-redux';
import Button from '../../../ui/Button';
import CustomerItem from './CustomerItem';
import { CustomerListStyle } from './style';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { paginationActions } from '../../../store/modules/paginationSlice';

const CustomerList = () => {
    const { customers } = useSelector((state) => state.customer);
    const { pageData, perPage, currentPage } = useSelector((state) => state.pagination);
    const { authed } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const startIdx = (currentPage - 1) * perPage;
    const endIdx = startIdx + perPage;
    const currentCustomers = pageData.slice(startIdx, endIdx);

    const navigate = useNavigate();

    useEffect(() => {
        dispatch(paginationActions.setData(customers));
    }, [customers]);
    const onMake = () => {
        if (authed) {
            navigate(`/cscenter/customeradd`);
        } else {
            alert('로그인이 필요합니다.');
            navigate(`/login`);
        }
    };

    return (
        <CustomerListStyle>
           
            <table className="customerTable">
                <caption>고객문의</caption>
                <colgroup>
                    <col className="type" />
                    <col className="title" />
                    <col className="name" />
                    <col className="date" />
                </colgroup>
                <thead>
                    <tr>
                        <th>구분</th>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>등록일</th>
                    </tr>
                </thead>
                <tbody>
                    {currentCustomers.map((customer) => (
                        <CustomerItem key={customer.id} customerData={customer} />
                    ))}
                </tbody>
            </table>
            <p>
                <Button text="글쓰기" onClick={onMake} />
            </p>
        </CustomerListStyle>
    );
};

export default CustomerList;
