import { BodyMainStyle } from './style';

const BodyMain = () => {
    return (
        <BodyMainStyle>
            <div className="inner">
                <div className="img-wrap">
                    <img src="/images/main/con2-m.png" alt="bodycare" />
                </div>
                <div className="text">
                    <h2>Body Care</h2>
                    <em>몸과 마음에 머무는 자연의 결</em>
                    <p>
                        자연이 전해주는 순수함으로, 지친 하루의 끝에 나를 다독여 주세요.
                        <br />
                        록시땅의 바디 케어는 전통과 자연을 담아
                        <br /> 당신의 몸과 마음에 포근한 휴식을 선물합니다.
                    </p>
                </div>
                <div className="list"></div>
            </div>
        </BodyMainStyle>
    );
};

export default BodyMain;
