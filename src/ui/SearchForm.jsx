import { IoSearchOutline } from "react-icons/io5";
import { SearchFormStyle } from "./style";

const SearchForm = ({width}) => {
    return (
       <SearchFormStyle $width={width}>
            <input type="text" name="" id="" placeholder="#Search"/>
            <i>
                <IoSearchOutline />
            </i>
       </SearchFormStyle>
    );
};

export default SearchForm;