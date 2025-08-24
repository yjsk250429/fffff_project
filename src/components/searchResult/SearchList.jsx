import { useSelector } from 'react-redux';
import SearchItem from './SearchItem';
import { ProductListWrap } from '../product/productList/style';
import { FiAlertCircle } from 'react-icons/fi';
import { NoResultStyle } from './style';
const SearchList = () => {
    const { results = [] } = useSelector((state) => state.search || {});
    const safeResults = results.filter(Boolean); // undefined/null 제거

    if (!safeResults.length)
        return (
            <NoResultStyle>
                <i>
                    <FiAlertCircle />
                </i>
                <p>검색 결과가 없습니다.</p>
                <p>정확한 검색어인지 확인하시고 다시 검색해 주세요.</p>
            </NoResultStyle>
        );

    return (
        <ProductListWrap>
            <ul>
                {safeResults.map((item) => (
                    <SearchItem key={item?.id ?? item?.title ?? Math.random()} result={item} />
                ))}
            </ul>
        </ProductListWrap>
    );
};

export default SearchList;
