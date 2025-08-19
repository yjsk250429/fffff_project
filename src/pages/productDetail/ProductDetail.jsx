import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import { ProductDetailStyle } from "./style";
import Button from "../../ui/Button";
import { IoHeart, IoHeartOutline } from 'react-icons/io5';
import Description from "./Description";
import Ingredient from "./Ingredient";
import Reivew from "./Reivew";
import Recommand from "./RecommandList";

const ProductDetail = () => {
    const {category, productID} = useParams();
    const {products} = useSelector((state)=>state.product);
    if (!products) {
        return <p>상품 데이터를 불러오는 중입니다.</p>;
      }
    const thisItem = products.find((product)=>product.id === Number(productID));
    if (!thisItem) {
        return <p>해당 상품을 찾을 수 없습니다.</p>;
    }
    const {id, title, label, description, unit, option}=thisItem;

    return (
        <ProductDetailStyle>
        <div className="inner">
            <div className="img-wrap">
                <img src={`/images/products/item${id}.webp`} alt={title} />
            </div>   
            <div className="right">
                <div className="detail">

                <form>
                    <input type="text" name="" id="" placeholder="#Search"/>
                    <i><IoSearchOutline /></i>
                </form>
                <em>{label}</em>
                <h2>{title}</h2>
                <strong>{option[0].price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</strong>
                <span>용량</span>
                <ul className="size">
                    {
                    option.map((item)=><li key={item.id}>{item.size}{unit}</li>)
                } 
                </ul>
                <span>{description}</span>

                <p><i> <IoHeartOutline /></i><Button text="장바구니" width="340px" height="60px" textColor="#000"/><Button text="구매하기" bgColor="#000" textColor="#fff" width="340px" height="60px"/></p>
                <ul className="tabs">
                    <li className="on">제품설명</li>
                    <li>원료</li>
                    <li>리뷰</li>
                    <li>추천제품</li>
                </ul>
                </div>
                <div className="scrollZone">
                <Description/>
                <Ingredient thisItem={thisItem}/>
                {/* <Reivew/> */}
                </div>
            </div>
        </div>
            <Recommand thisItem={thisItem}/>
        </ProductDetailStyle>
    );
};

export default ProductDetail;