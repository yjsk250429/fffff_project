import { useSelector } from "react-redux";
import { ProductListWrap } from "../hand/style";
import HairItem from "./HairItem";

const HairList = () => {
    const {products} = useSelector((state)=>state.product);

    return (
          <ProductListWrap className="product-wrap">
                   {
                       products.filter((product)=> product.category==="hair").map((product)=><HairItem key={product.id} product={product}/>)
                   }
               </ProductListWrap>
    );
};

export default HairList;