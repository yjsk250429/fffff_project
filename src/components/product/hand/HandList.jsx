import { useSelector } from "react-redux";
import { ProductListWrap } from "./style";
import HandItem from "./HandItem";


const HandList = () => {
    const {products} = useSelector((state)=>state.products)

    return (
        <ProductListWrap className="cart-box">
            {
                products.filter((product)=> product.category==="skin").map((product)=><HandItem key={product.id} product={product}/>)
            }
        </ProductListWrap>
    );
};

export default HandList;