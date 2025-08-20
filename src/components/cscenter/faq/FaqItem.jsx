import { useRef, useState, useEffect } from 'react';
import { LiaAngleUpSolid, LiaAngleDownSolid } from 'react-icons/lia';

import { FaqItemStyle } from './style';

const FaqItem = ({ id, title, sub, children, openId, setOpenId }) => {
    const isOpen = openId === id;
    const contentRef = useRef(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (contentRef.current) {
            setHeight(contentRef.current.scrollHeight);
        }
    }, [isOpen]);

    const toggle = () => {
        if (typeof setOpenId === 'function') {
            setOpenId(isOpen ? null : id);
        }
    };

    return (
        <FaqItemStyle $active={isOpen} $open={isOpen} $height={height}>
            <button className="faq-trigger" onClick={toggle}>
                <span>{title}</span>
                <p>{sub}</p>
                {isOpen ? (
                    <LiaAngleUpSolid style={{ width: '24px', height: '24px', color: '#4E4E4E' }} />
                ) : (
                    <LiaAngleDownSolid
                        style={{ width: '24px', height: '24px', color: '#4E4E4E' }}
                    />
                )}
            </button>

            <div ref={contentRef} className="faq-content">
                <div className="faq-inner">{children}</div>
            </div>
        </FaqItemStyle>
    );
};

export default FaqItem;
