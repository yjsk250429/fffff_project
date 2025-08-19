import { useEffect } from 'react';
import { DarkStyle, DarkTitleStyle } from './style';
import Button from '../../ui/Button';
import DarkLimited from '../../components/darkEdition/DarkLimited';
import DarkCards from '../../components/darkEdition/DarkCards';

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
            <DarkTitleStyle className='con1'>
            <div className="inner">
                <em>빛이 머무는 순간, 록시땅</em>
                <strong>밤이 깊어질수록, 피부는 깨어납니다.</strong>
                <h2>DARK  L’OCCITANE</h2>
                <p className="more"><Button text="자세히 보기" textColor="var(--hover-header)" borderColor="var(--hover-header)" width="184px"/></p>
            </div>
            </DarkTitleStyle>
            <DarkLimited/>
            <DarkCards/>
        </DarkStyle>
    );
};

export default DarkEdition;
