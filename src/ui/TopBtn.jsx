import { TopBtnStyle } from './style';
import { useEffect, useState } from 'react';

const TopBtn = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY || window.pageYOffset;
            setShow(scrollY > 400);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <TopBtnStyle onClick={scrollToTop} className={show ? 'on' : ''}>
            <img src="/images/sub_logo.png" alt="top" />
        </TopBtnStyle>
    );
};

export default TopBtn;
