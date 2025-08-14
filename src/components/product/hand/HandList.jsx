import { useSelector } from "react-redux";
import { ProductListWrap } from "./style";
import HandItem from "./HandItem";


const HandList = () => {
    const {products} = useSelector((state)=>state.product);

    return (
        <ProductListWrap className="product-wrap">
            {
                products.filter((product)=> product.category==="hand").map((product)=><HandItem key={product.id} product={product}/>)
            }
        </ProductListWrap>
    );
};

export default HandList;