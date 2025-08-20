import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "../../../ui/Button";
import BestProductList from "./BestProductList";
import { BestListStyle, BestProductStyle } from "./style";
import { useLayoutEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

const BestProduct = () => {
    const rootRef = useRef(null);

    useLayoutEffect(() => {
      // 이 컴포넌트 내부로 선택자 스코프를 제한
      const ctx = gsap.context((self) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: self.selector(".bg"),  // ✅ 실제 존재하는 노드로 트리거
            start: "top bottom",            // (= '0% 100%')
            end: "top 20%",
            scrub: 1,
            // markers: true,
          },
        });
  
        tl.fromTo(
          self.selector(".bg img"),
          { xPercent: -100 },               // 반응형에 안전한 xPercent 권장
          { xPercent: 0, ease: "none", duration: 5 },
          0
        )
      }, rootRef);
  
      return () => ctx.revert(); // ✅ 중복 생성/메모리 누수 방지
    }, []);


    return (
        <BestProductStyle className="best" ref={rootRef}>
            <div className="bg">
                <img src="/images/Bg_Best_product.png" alt="bestproduct" />
            </div>
            <div className="inner">
                <div className="text">
                    <h2>베스트 상품</h2>
                    <p>은은하고 세련된 향이 하루를 감싸며 사랑받고 있습니다.<br/>
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