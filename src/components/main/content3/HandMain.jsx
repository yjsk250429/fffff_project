import { useNavigate } from 'react-router-dom';
import Button from '../../../ui/Button';
import HandMainList from './HandMainList';
import { HandMainStyle } from './style';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from "react";

const HandMain = () => {
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
        <HandMainStyle>
            <div className="inner">
                <div className="text">
                    <h2 data-aos="fade-up">Hand Care</h2>
                    <em data-aos="fade-up"
                    data-aos-delay="300">향으로 기억되는 손길</em>
                    <p data-aos="fade-up"
                    data-aos-delay="500">
                        손끝에서 느껴지는 작은 위로
                        <br />
                        록시땅 핸드 케어와 함께라면 바쁜 하루 속에서도
                        <br /> 당신의 손은 늘 따뜻하게 감싸집니다.
                    </p>
                    <Button text="제품 보기" onClick={()=>navigate('/product/hand')}/>
                </div>
                <div className="img-wrap">
                    <img src="/images/main/con3-m.png" alt="bodycare" />
                </div>
                <HandMainList/>
            </div>
        </HandMainStyle>
    );
};

export default HandMain;
