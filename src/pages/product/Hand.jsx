import ProductBanner from "../../components/product/banner/ProductBanner";
import HandList from "../../components/product/hand/HandList";
import Latest from "../../components/product/latest/Latest";
import {ProductStyle} from "./style"

const Hand = () => {

    return (
        <ProductStyle>
             <ProductBanner/>
            <div className="inner">
                <Latest/>
                    <ul className="tabs">
                        <li className="on">전체보기</li>
                        <li>핸드크림</li>
                        <li>핸드&네일케어</li>
                        <li>솝</li>
                        <li>핸드워시</li>
                    </ul>
                <HandList/>
            </div>
        </ProductStyle>
    );
};

export default Hand;