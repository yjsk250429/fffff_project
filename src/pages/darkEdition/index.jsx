import { useEffect } from 'react';
import { DarkStyle } from './style';

const DarkEdition = () => {
    useEffect(() => {
        const wrap = document.querySelector('.wrap');
        if (wrap) wrap.setAttribute('data-theme', 'special');
        return () => {
            if (wrap) wrap.removeAttribute('data-theme');
        };
    }, []);

    return (
        <DarkStyle>
            <div className="inner">
                <h2>다크록시땅</h2>
            </div>
        </DarkStyle>
    );
};

export default DarkEdition;
