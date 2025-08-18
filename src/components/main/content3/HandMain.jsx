import Button from '../../../ui/Button';
import HandMainList from './HandMainList';
import { HandMainStyle } from './style';

const HandMain = () => {
    return (
        <HandMainStyle>
            <div className="inner">
                <div className="text">
                    <h2>Hand Care</h2>
                    <em>향으로 기억되는 손길</em>
                    <p>
                        손끝에서 느껴지는 작은 위로
                        <br />
                        록시땅 핸드 케어와 함께라면 바쁜 하루 속에서도
                        <br /> 당신의 손은 늘 따뜻하게 감싸집니다.
                    </p>
                    <Button text="제품 보기"/>
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
