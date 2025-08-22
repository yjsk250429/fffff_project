import { useEffect, useRef } from 'react';
import DailyList from './DailyList';
import { DailyMomentsStyle } from './style';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


const DailyMoments = () => {
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
        <DailyMomentsStyle>
            <div className="inner">
                <h2>Daily Moments <span>with L’Occitane</span></h2>
                <em>록시땅과 함께하는 하루의 순간들</em>

                <div className="insta-wrap" ref={containerRef}>
                    <DailyList addToRefs={addToRefs}/>
                </div>
            </div>
        </DailyMomentsStyle>
    );
};

export default DailyMoments;
