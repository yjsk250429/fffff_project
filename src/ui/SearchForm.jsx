import { IoSearchOutline } from 'react-icons/io5';
import { SearchFormStyle } from './style';
const SearchForm = ({ width, value, onSubmit = () => {}, onChange = () => {} }) => {
    return (
        <SearchFormStyle $width={width} onSubmit={onSubmit}>
            <input
                type="text"
                name=""
                id=""
                value={value}
                placeholder="#Search"
                onChange={onChange}
            />
            <i>
                <IoSearchOutline />
            </i>
        </SearchFormStyle>
    );
};

export default SearchForm;
