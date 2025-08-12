import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const HandDetail = () => {
    const {handID} = useParams();
    const {products} = useSelector((state)=>state.products);
    const thisItem = products.find((product)=>product.id === Number(handID))
    const {id, title, description, unit, option}=thisItem;


    return (
        <div>
            
        </div>
    );
};

export default HandDetail;