import { DarkPackageStyle } from './style';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const DarkPackage = () => {
    useEffect(() => {
        AOS.init({ duration: 700, once: true });
        AOS.refresh();
    }, []);

    return (
        <DarkPackageStyle>
            <div className="inner">
                <em data-aos="fade-up">Dark L’Occitane – Limited Night Collection</em>
                <em data-aos="fade-up" data-aos-delay="150">
                    빛이 사라진 순간, 피부는 더 깊이 회복됩니다.
                </em>
                <h3 data-aos="fade-up" data-aos-delay="300">
                    <span>Dark L’OCCITANE</span> 한정판과 함께, <span>당신의 밤</span>을 완성하세요.
                </h3>
                <img src="/images/dark/con1.png" alt="package box" />
                <p data-aos="fade-up" data-aos-delay="450">
                    DARK
                    <br />
                    L’OCCITA<span>CCITANE</span>
                </p>
            </div>
        </DarkPackageStyle>
    );
};

export default DarkPackage;
