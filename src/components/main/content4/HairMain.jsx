import { HairMainStyle } from './style';

const HairMain = () => {
    return (
        <HairMainStyle>
            <div className="inner">
                <div className="img-wrap">
                    <img src="/images/main/con4-m.png" alt="bodycare" />
                </div>
                <div className="text">
                    <h2>Hair Care 장새미</h2>
                    <em>자연이 전하는 부드러운 윤기 </em>
                    <p>
                        프로방스의 자연이 전하는 영양과 향기로
                        <br />
                        지친 모발에 생기와 빛을 불어넣습니다.
                        <br />
                        부드럽고 건강한 머릿결을 오래도록 지켜줍니다.
                    </p>
                </div>
                <div className="list"></div>
            </div>
        </HairMainStyle>
    );
};

export default HairMain;
