import React, { useEffect, useRef, useState } from 'react';
import { Con2Section, VideoEl } from './style';

const Content2 = () => {
    const videoRef = useRef(null);
    const [isZoomed, setIsZoomed] = useState(false);

    const MAX_SCALE = 1.8;

    useEffect(() => {
        const onScroll = () => {
            const el = videoRef.current;
            if (!el) return;

            const rect = el.getBoundingClientRect();
            const triggerStart = 500;
            const triggerEnd = 200;

            if (!isZoomed && rect.top < triggerStart && rect.top > triggerEnd) {
                const progress = 1 - (rect.top - triggerEnd) / (triggerStart - triggerEnd);
                const scale = 1 + (MAX_SCALE - 1) * progress;
                el.style.transform = `scale(${scale})`;
            }

            if (rect.top <= triggerEnd && !isZoomed) {
                el.style.transform = `scale(${MAX_SCALE})`;
                setIsZoomed(true);
            }

            if (rect.top > triggerStart && isZoomed) {
                el.style.transform = `scale(1)`;
                setIsZoomed(false);
            }
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, [isZoomed]);

    return (
        <Con2Section id="con2">
            <VideoEl ref={videoRef} src="/images/BcropVideo.mp4" autoPlay muted loop playsInline />
        </Con2Section>
    );
};

export default Content2;
