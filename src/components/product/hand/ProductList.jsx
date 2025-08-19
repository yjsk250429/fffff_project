import { useDispatch, useSelector } from "react-redux";
import { ProductListWrap } from "./style";
import ProductItem from "./ProductItem";
import { useEffect } from "react";
import { paginationActions } from "../../../store/modules/paginationSlice";


const ProductList = ({category, activeTab}) => {
    const {products} = useSelector((state)=>state.product);
    const { pageData, perPage, currentPage} = useSelector((state)=>state.pagination);
    const dispatch = useDispatch();

    let list = products;
    if ( category && category !== "all"){
        list = list.filter((product)=>product.category === category);
    }
    if (activeTab && activeTab !== "ALL") {
        list = list.filter(p => p.type === activeTab);
    }
    list = [...list].sort((a, b) => a.id - b.id);
    
    useEffect(()=>{
        dispatch(paginationActions.setData(list));
        if(currentPage !== 1) dispatch(paginationActions.setPage(1));
    }, [products, category, activeTab, dispatch]);

    useEffect(()=>{
        const maxPage = Math.max(1, Math.ceil(list.length/perPage));
        if(currentPage > maxPage){
            dispatch(paginationActions.setPage(maxPage));
        }
    },[list.length, perPage, currentPage, dispatch]);

    const startIdx = (currentPage - 1) * perPage;
    const endIdx = startIdx + perPage ; 
    const currentProducts = list.slice(startIdx, endIdx);

    if(list.length ===0 ){
        return (
            <ProductListWrap className="product-wrap empty">
            <p>상품을 준비 중입니다.</p>
        </ProductListWrap>
        );
    }
    
    return (
        <ProductListWrap className="product-wrap">
            {
                currentProducts
                .map((product)=><ProductItem key={product.id} product={product}/>)
            }
        </ProductListWrap>
    );
};

export default ProductList;