import SearchForm from '../../ui/SearchForm';
import SearchList from '../../components/searchResult/SearchList';
import { SearchResultStyle } from './style';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { searchActions } from '../../store/modules/searchSlice';

const SearchResult = () => {
    const { results } = useSelector((state) => state.search);
    const [text, setText] = useState('');
    const dispatch = useDispatch();
    const changeInput = (e) => {
        const { value } = e.target;
        setText(value);
    };
    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(searchActions.onSearch(text));
    };
    useEffect(() => {
        dispatch(searchActions.onSearch(text));
    }, [text, dispatch]);
    return (
        <SearchResultStyle>
            <div className="inner">
                <h3>Search For</h3>
                <em>{results.length}개의 통합 검색 결과입니다.</em>
                <SearchForm
                    width="1010px"
                    onChange={changeInput}
                    onSubmit={onSubmit}
                    value={text}
                />
                <SearchList />
            </div>
        </SearchResultStyle>
    );
};

export default SearchResult;
