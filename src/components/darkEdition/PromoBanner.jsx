import { useNavigate } from 'react-router-dom';
import Button from '../../ui/Button';
import { PromoBannerStyle } from './style';

const PromoBanner = () => {
    const navigate = useNavigate();
    const onGo = () => {
        navigate('/darkedition');
    };
    return (
        <PromoBannerStyle onClick={onGo}>
            <div className="inner">
                <div className="left">
                    <em>빛이 사라진 순간, 피부는 더 깊이 회복됩니다. </em>
                    <h2>DARK L’OCCITANE</h2>
                    <p>
                        Dark L’OCCITANE 한정판과 함께, <span>당신의 밤</span>을 완성하세요.
                    </p>
                    <p>
                        <Button
                            text="제품 보기"
                            borderColor="var(--main)"
                            width="250px"
                            textColor="#fff"
                        />
                    </p>
                </div>
                <div className="right">
                    <img src="/images/dark/con3_02.png" alt="darkEdition" />
                    <img src="/images/dark/con4_07.png" alt="lavender" />
                    <img src="/images/dark/con4_05.png" alt="" />
                    <img src="/images/dark/con4_08.png" alt="immortelle" />
                    <img src="/images/dark/con4_06.png" alt="" />
                    <div className="shadow"></div>
                </div>
            </div>
        </PromoBannerStyle>
    );
};

export default PromoBanner;
