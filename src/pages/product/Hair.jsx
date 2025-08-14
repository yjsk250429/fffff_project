import ProductBanner from "../../components/product/banner/ProductBanner";
import HairList from "../../components/product/hair/HairList";
import Latest from "../../components/product/latest/Latest";
import { ProductStyle } from "./style";

const Hair = () => {
    return (
        <ProductStyle>
         <ProductBanner/>
         <div className="inner">
                <Latest/>
                    <ul className="tabs">
                        <li className="on">전체보기</li>
                        <li>컨디셔너</li>
                        <li>오일&에센스</li>
                        <li>로션</li>
                        <li>스크럽</li>
                        <li>세럼</li>
                        <li>샴푸</li>
                        <li>마스크/트리트먼트</li>
                        <li>Gift&Set</li>
                    </ul>
                <HairList/>
            </div>
        </ProductStyle>
    );
};

export default Hair;