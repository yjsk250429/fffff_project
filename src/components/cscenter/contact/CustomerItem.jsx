import { CustomerItemStyle } from './style';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);

const CustomerItem = ({ customerData }) => {
    const { id, name, title, type, date } = customerData;
    const formattedDate = dayjs(date, ['YYYY-M-D', 'YYYY-MM-DD', 'YY.MM.DD']).format('YY.MM.DD');

    return (
        <CustomerItemStyle>
            <td>{id}</td>
            <td>{type}</td>
            <td>{title}</td>
            <td>{name}</td>
            <td>{formattedDate}</td>
        </CustomerItemStyle>
    );
};

export default CustomerItem;
