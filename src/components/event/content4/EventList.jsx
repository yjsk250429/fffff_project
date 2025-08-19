import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import No1 from './No1';
import No2 from './No2';
import No3 from './No3';
import { EventListStyle } from './style';

gsap.registerPlugin(ScrollTrigger);

const EventList = () => {
    const containerRef = useRef(null);
    const itemsRef = useRef([]);

    useEffect(() => {
        const items = itemsRef.current;

        if (!items.length) return;

        // 초기 위치 세팅 (1,3 왼쪽 / 2 오른쪽)
        gsap.set(items[0], { x: -200, opacity: 0 }); // No1
        gsap.set(items[1], { x: 200, opacity: 0 }); // No2
        gsap.set(items[2], { x: -200, opacity: 0 }); // No3

        // ScrollTrigger
        ScrollTrigger.create({
            trigger: containerRef.current,
            start: 'top 80%',
            end: 'bottom 40%',
            onEnter: () => {
                gsap.to(items, {
                    x: 0,
                    opacity: 1,
                    duration: 1.2,
                    stagger: 0.3,
                    ease: 'power3.out',
                });
            },
        });

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    const addToRefs = (el) => {
        if (el && !itemsRef.current.includes(el)) {
            itemsRef.current.push(el);
        }
    };

    return (
        <EventListStyle ref={containerRef}>
            <div ref={addToRefs}>
                <No1 />
            </div>
            <div ref={addToRefs}>
                <No2 />
            </div>
            <div ref={addToRefs}>
                <No3 />
            </div>
        </EventListStyle>
    );
};

export default EventList;
