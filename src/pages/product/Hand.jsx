import ProductBanner from "../../components/product/banner/ProductBanner";
import HandList from "../../components/product/hand/HandList";
import { HandStyle } from "./style";

const Hand = () => {

    return (
        <HandStyle>
             <ProductBanner/>
            <div className="inner">
                <h2>핸드케어</h2>
                <HandList/>
            </div>
        </HandStyle>
    );
};

export default Hand;