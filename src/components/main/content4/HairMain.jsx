import { useNavigate } from 'react-router-dom';
import Button from '../../../ui/Button';
import HairMainList from './HairMainList';
import { HairMainStyle } from './style';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from "react";

const HairMain = () => {
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
        <HairMainStyle>
            <div className="inner">
                <div className="img-wrap">
                    <img src="/images/main/con4-m.png" alt="bodycare" />
                </div>
                <div className="text">
                    <h2 data-aos="fade-up">Hair Care</h2>
                    <em data-aos="fade-up"
                    data-aos-delay="300">자연이 전하는 부드러운 윤기 </em>
                    <p data-aos="fade-up"
                    data-aos-delay="500">
                        프로방스의 자연이 전하는 영양과 향기로
                        <br />
                        지친 모발에 생기와 빛을 불어넣습니다.
                        <br />
                        부드럽고 건강한 머릿결을 오래도록 지켜줍니다.
                    </p>
                    <Button text="제품 보기" onClick={()=>navigate('/product/hair')}/>
                </div>
                <HairMainList/>
            </div>
        </HairMainStyle>
    );
};

export default HairMain;
