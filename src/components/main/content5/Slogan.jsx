import Button from '../../../ui/Button';
import { SloganStyle } from './style';

const Slogan = () => {
    return (
        <SloganStyle>
            <div className="inner">
                <div className="text">
                    <h2>자연을 닮아가는 시간 속에서 우리는 아름다움을 만들어 갑니다.</h2>
                    <strong>록시땅은 자연의 선함과 사람의 가치를 존중하는 브랜드입니다</strong>
                    <p>
                        록시땅은 자연이 주는 선함과 사람 사이의 따뜻한 가치를 믿습니다.
                        <br />
                        프랑스 프로방스의 정취와 지속 가능한 철학을 담아
                        <br />
                        세대와 세대를 잇는 아름다움을 전합니다.
                    </p>
                    <Button text="브랜드 스토리" bgColor="#000" textColor="#fff"/>
                </div>
                <div className="video-wrap">
                    <video src="/images/SloganVideo.mp4" autoPlay loop muted playsInline></video>
                </div>
            </div>
        </SloganStyle>
    );
};

export default Slogan;
