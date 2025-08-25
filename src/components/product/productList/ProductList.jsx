import { useDispatch, useSelector } from 'react-redux';
import ProductItem from './ProductItem';
import { useEffect } from 'react';
import { paginationActions } from '../../../store/modules/paginationSlice';
import { ProductListWrap } from './style';

const ProductList = ({ items }) => {
    const { perPage, currentPage } = useSelector((state) => state.pagination);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(paginationActions.setPerPage(12));
    }, [dispatch]);

    // 2) items(=필터/정렬/탭 결과)가 바뀌면 데이터/페이지수를 재계산
    useEffect(() => {
        dispatch(paginationActions.setData(items));
        // 현재 페이지가 1이 아니면 1페이지로 리셋
        dispatch(paginationActions.goToPage(1));
    }, [items, dispatch]);

    useEffect(() => {
        const maxPage = Math.max(1, Math.ceil(items.length / perPage));
        if (currentPage > maxPage) {
            dispatch(paginationActions.goToPage(maxPage));
        }
    }, [items.length, perPage, currentPage, dispatch]);

    const startIdx = (currentPage - 1) * perPage;
    const endIdx = startIdx + perPage;
    const currentProducts = items.slice(startIdx, endIdx);

    if (!items || items.length === 0) {
        return (
            <ProductListWrap className="product-wrap empty">
                <p>상품을 준비 중입니다.</p>
            </ProductListWrap>
        );
    }

    return (
        <ProductListWrap className="product-wrap">
            <ul>
                {currentProducts.map((product) => (
                    <ProductItem key={product.id} product={product} />
                ))}
            </ul>
        </ProductListWrap>
    );
};

export default ProductList;
