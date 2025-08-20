import { CustomerItemStyle } from './style';

const CustomerItem = ({ customerData }) => {
    const { name, title, type, date } = customerData;
    return (
        <CustomerItemStyle>
            <td>{type}</td>
            <td>{title}</td>
            <td>{name}</td>
            <td>{date}</td>
        </CustomerItemStyle>
    );
};

export default CustomerItem;
