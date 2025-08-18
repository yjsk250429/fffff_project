//
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CollectionIntroStyle } from './style';

// ScrollTrigger 플러그인 등록
gsap.registerPlugin(ScrollTrigger);

const CollectionIntro = () => {
    const containerRef = useRef(null);
    const imageItemsRef = useRef([]);

    useEffect(() => {
        const container = containerRef.current;
        const imageItems = imageItemsRef.current;

        if (!container || !imageItems.length) return;

        gsap.set(imageItems, {
            y: 350,
            opacity: 0,
            scale: 0.9,
        });

        ScrollTrigger.create({
            trigger: container,
            start: 'top 40%',
            end: 'bottom 20%',
            onEnter: () => {
                gsap.to(imageItems, {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 1.2,
                    stagger: 0.25,
                    ease: 'power3.out',
                });
            },
        });

        // 컴포넌트 언마운트시 ScrollTrigger 정리
        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    // ref 배열에 요소 추가하는 함수
    const addToRefs = (el) => {
        if (el && !imageItemsRef.current.includes(el)) {
            imageItemsRef.current.push(el);
        }
    };

    return (
        <CollectionIntroStyle ref={containerRef}>
            <h2>Collection</h2>
            <p>
                록시땅은 제품 포뮬라에 최적의 농도로 천연 원료를 사용하는 것을 최우선으로 합니다.
                <br /> 프로방스산 아몬드, 브루키나파소 시어 버터 등 윤리적으로 공급받은 특별한 천연
                원료들을 만나보세요.
            </p>
            <ul className="image-wrap">
                <li ref={addToRefs}></li>
                <li ref={addToRefs}></li>
                <li ref={addToRefs}></li>
            </ul>
        </CollectionIntroStyle>
    );
};

export default CollectionIntro;
