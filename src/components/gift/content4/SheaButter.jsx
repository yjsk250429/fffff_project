import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SheaButterStyle } from './style';

gsap.registerPlugin(ScrollTrigger);

const SheaButter = () => {
    const containerRef = useRef(null);
    const itemsRef = useRef([]);

    useEffect(() => {
        const container = containerRef.current;
        const items = itemsRef.current;

        if (!container || !items.length) return;

        // 초기 상태 세팅
        gsap.set(items, {
            y: 150,
            opacity: 0,
            scale: 0.9,
        });

        // ScrollTrigger 적용
        ScrollTrigger.create({
            trigger: container,
            start: 'top 70%', // 화면에 들어오면 실행
            end: 'bottom 30%',
            onEnter: () => {
                gsap.to(items, {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 1.2,
                    stagger: 0.25, // 순차적 등장
                    ease: 'power3.out',
                });
            },
        });

        // cleanup
        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    // ref 배열에 요소 추가
    const addToRefs = (el) => {
        if (el && !itemsRef.current.includes(el)) {
            itemsRef.current.push(el);
        }
    };

    return (
        <SheaButterStyle ref={containerRef}>
            <div className="inner">
                <img src="/images/gift/bg_Shea Butter.png" alt="시어버터문구" />
                <div className="img-wrap">
                    <ul>
                        <li ref={addToRefs}>
                            <img src="/images/gift/gift_con5_0.png" alt="시어버터핸드크림" />
                        </li>
                        <li ref={addToRefs}>
                            <img src="/images/gift/gift_con5_1.png" alt="시어버터나무" />
                        </li>
                        <li ref={addToRefs}>
                            <img src="/images/gift/gift_con5_2.png" alt="시어버터열매" />
                            <p>
                                시어 나무가 전하는 자연의 따뜻한 마음
                                <br /> 서아프리카의 바람 속에서 자란 시어는 땅을 살리고
                                <br /> 생명을 품어내며, 선물이 됩니다. <br />
                                소중한 마음, 록시땅과 함께 부드럽게 전해보세요.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </SheaButterStyle>
    );
};

export default SheaButter;
