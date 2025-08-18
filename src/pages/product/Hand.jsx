import Pagination from "../../components/pagination";
import ProductBanner from "../../components/product/banner/ProductBanner";
import HandInput from "../../components/product/hand/HandInput";
import HandList from "../../components/product/hand/HandList";
import Latest from "../../components/product/latest/Latest";
import {ProductStyle} from "./style"

const Hand = () => {

    return (
        <ProductStyle>
             <ProductBanner/>
                <Latest/>
                <div className="inner">
                    <ul className="tabs">
                        <li className="on">전체보기</li>
                        <li>핸드크림</li>
                        <li>핸드&네일케어</li>
                        <li>솝</li>
                        <li>핸드워시</li>
                    </ul>
                    <div className="sort">
                        <label htmlFor="sort">상품 순서 정렬</label>
                        <select name="sort" id="sort">
                            <option value="">== 정렬 ==</option>
                            <option value="best">인기 상품 순</option>
                            <option value="new">신제품 순</option>
                            <option value="low">낮은 가격 순</option>
                            <option value="high">높은 가격 순</option>
                        </select>
                    </div>
                <HandInput/>
                <HandList/>
                <Pagination/>
            </div>
        </ProductStyle>
    );
};

export default Hand;