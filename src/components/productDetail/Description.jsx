import { forwardRef } from 'react';
import { DescStyle } from './style';

const Description = forwardRef((props, ref) => {
    return (
        <DescStyle ref={ref}>
            <li>
                <img src="/images/productDetail/detail1.webp" alt="설명" />
            </li>
            <li>
                <img src="/images/productDetail/detail2.webp" alt="설명" />
            </li>
            <li>
                <img src="/images/productDetail/detail3.webp" alt="설명" />
            </li>
        </DescStyle>
    );
});

export default Description;
