import { DarkCollectionStyle } from './style';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const DarkCollection = () => {
    useEffect(() => {
        AOS.init({ duration: 700, once: true });
        AOS.refresh();
    }, []);

    return (
        <DarkCollectionStyle>
            <div className="bg">
                <video src="/images/dark/smoke1.mp4" autoPlay loop muted playsInline></video>
            </div>
            <div className="inner">
                <h2 data-aos="fade-up">Limited Night Collection</h2>
                <p data-aos="fade-up" data-aos-delay="150">
                    낮이 아닌, 밤에만 피어나는 아름다움이 있습니다.
                </p>
                <p data-aos="fade-up" data-aos-delay="300">
                    록시땅의 한정판 다크 에디션은 블랙 & 골드 패키징과 밤 전용 포뮬라로 완성된
                    프리미엄 라인입니다.
                </p>
                <p data-aos="fade-up" data-aos-delay="450">
                    밤의 고요함과 별빛의 신비로움을 담아, 당신의 피부를 깊이 회복시키는 황금 시간을
                    선물합니다.
                </p>
                <img src="/images/dark/con3_02.png" alt="" />
            </div>
        </DarkCollectionStyle>
    );
};

export default DarkCollection;
