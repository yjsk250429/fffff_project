import { useDispatch, useSelector } from "react-redux";
import { ProductListWrap } from "./style";
import HandItem from "./HandItem";
import { useEffect } from "react";
import { paginationActions } from "../../../store/modules/paginationSlice";


const HandList = () => {
    const {products} = useSelector((state)=>state.product);
    const { pageData, perPage, currentPage} = useSelector((state)=>state.pagination);
    const dispatch = useDispatch();
    const startIdx = (currentPage - 1) * perPage;
    const endIdx = startIdx + perPage ; 
    const currentProducts = pageData.slice(startIdx, endIdx);

    useEffect(()=>{
        dispatch(paginationActions.setData(products));
    }, [products]);


    return (
        <ProductListWrap className="product-wrap">
            {
                currentProducts
                // .filter((product)=> product.category==="hand")
                .map((product)=><HandItem key={product.id} product={product}/>)
            }
        </ProductListWrap>
    );
};

export default HandList;