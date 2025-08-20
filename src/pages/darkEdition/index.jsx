import { useEffect, useRef } from 'react';
import { DarkStyle, DarkTitleStyle } from './style';
import Button from '../../ui/Button';
import DarkCards from '../../components/darkEdition/DarkCards';
import DarkCollection from '../../components/darkEdition/DarkCollection';
import DarkProduct from '../../components/darkEdition/DarkProduct';
import DarkPackage from '../../components/darkEdition/DarkPackage';
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);

const DarkEdition = () => {
    const pkgRef = useRef(null);
    useEffect(() => {
        const wrap = document.querySelector('.wrap');
        if (wrap) wrap.setAttribute('data-theme', 'special');
        return () => {
            if (wrap) wrap.removeAttribute('data-theme');
        };
    }, []);
    const handleScrollToPackage = ()=>{
        if (!pkgRef.current) return;
        const y = pkgRef.current.getBoundingClientRect().top + window.pageYOffset;
        gsap.to(window, {
            duration: 1.8,               // ← 더 느리게 (예: 1.8초)
            scrollTo: { y, autoKill: false },
            ease: "power2.inOut",
          });
    }

    return (
        <DarkStyle>
            <DarkTitleStyle>
                <div className="bg"></div>
            <div className="inner">
                <em data-aos="fade-up"
                 data-aos-delay="600"
                 data-aos-offset="0"
                 data-aos-duration="1000"
                 >빛이 머무는 순간, 록시땅</em>
                <strong data-aos="fade-up"
                data-aos-delay="1700"
                data-aos-offset="0"
                data-aos-duration="1000"
                >밤이 깊어질수록, 피부는 깨어납니다.</strong>
                <h2 data-aos="fade-up"
                   data-aos-delay="3000"
                   data-aos-offset="0"
                   data-aos-duration="1000"
                >DARK  L’OCCITANE</h2>
                <p className="more" ><Button onClick={handleScrollToPackage} text="자세히 보기" textColor="var(--hover-header)" borderColor="var(--hover-header)" width="184px"/></p>
            </div>
            </DarkTitleStyle>
            <section id="dark-package" ref={pkgRef}>
            <DarkPackage/>
            </section>
            <DarkCards/>
            <DarkCollection/>
            <DarkProduct/>
        </DarkStyle>
    );
};

export default DarkEdition;
