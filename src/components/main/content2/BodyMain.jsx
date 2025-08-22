import { useNavigate } from 'react-router-dom';
import Button from '../../../ui/Button';
import BodyMainList from './BodyMainList';
import { BodyMainStyle } from './style';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from "react";

const BodyMain = () => {
    const navigate = useNavigate();
     useEffect(() => {
              AOS.init({
                duration: 800,        
                easing: 'ease-in-out', 
                once: true,        
                offset: 10,          
                mirror: false,        
              });
            }, []);

    return (
        <BodyMainStyle>
            <div className="inner">
                <div className="img-wrap">
                    <img src="/images/main/con2-m.png" alt="bodycare" />
                </div>
                <div className="text">
                    <h2 data-aos="fade-up">Body Care</h2>
                    <em data-aos="fade-up"
                    data-aos-delay="300">몸과 마음에 머무는 자연의 결</em>
                    <p data-aos="fade-up"
                    data-aos-delay="500">
                        자연이 전해주는 순수함으로, 지친 하루의 끝에 나를 다독여 주세요.
                        <br />
                        록시땅의 바디 케어는 전통과 자연을 담아
                        <br /> 당신의 몸과 마음에 포근한 휴식을 선물합니다.
                    </p>
                    <Button text="제품 보기" onClick={()=>navigate('/product/body')}/>
                </div>
                <BodyMainList/>
            </div>
        </BodyMainStyle>
    );
};

export default BodyMain;
