import Button from "../../../ui/Button";
import BestProductList from "./BestProductList";
import { BestListStyle, BestProductStyle } from "./style";
import { useNavigate } from "react-router-dom";
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from "react";

const BestProduct = () => {
  const navigate = useNavigate();
    useEffect(() => {
          AOS.init({
            duration: 800,        
            easing: 'ease-in-out', 
            once: true,        
            offset: 10,          
            mirror: false,        
          });
        }, []);
  

    return (
        <BestProductStyle className="best">
            <div className="bg">
                <img src="/images/Bg_Best_product.png" alt="bestproduct" />
            </div>
            <div className="inner">
                <div className="text">
                    <h2 data-aos="fade-up">베스트 상품</h2>
                    <p data-aos="fade-up"
                    data-aos-delay="300"
                    >은은하고 세련된 향이 하루를 감싸며 사랑받고 있습니다.<br/>
                    자연에서 온 시어버터, 아몬드, 버베나의 정수를 담아 피부에 깊은 영양과 촉촉함을 전합니다.</p>
                    <Button  text = '모두보기' />
                </div>
                <BestListStyle className="list">
               <BestProductList/>
                </BestListStyle>
            </div>
        </BestProductStyle>
    );
};

export default BestProduct;