import DarkCardList from './DarkCardList';
import { DarkCardsStyle } from './style';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const DarkCards = () => {
    return (
        <DarkCardsStyle>
            <div className="inner">
                <h2 data-aos="fade-up">
                    <span>DARK L’OCCITANE</span> 원료
                </h2>
                <p data-aos="fade-up" data-aos-delay="150">
                    달빛 아래에서 피어난 원료가, 당신의 피부에 밤새 숨을 불어넣습니다.
                </p>
                <DarkCardList />
                <em>*카드를 뒤집어 원료를 확인해보세요.</em>
            </div>
        </DarkCardsStyle>
    );
};

export default DarkCards;
