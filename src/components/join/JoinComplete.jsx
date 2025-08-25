import { useNavigate } from 'react-router-dom';
import { JoinCompleteStyle } from './style';
import { useSelector } from 'react-redux';

const JoinComplete = () => {
    const navigate = useNavigate();

    const goToHome = () => {
        navigate('/');
    };
    const goToLoin = () => {
        navigate('/login');
    };
    const lastSignedUpUser = useSelector((state) => state.auth.lastSignedUpUser);
    return (
        <JoinCompleteStyle>
            <div className="inner">
                <h2>회원가입</h2>
                <div className="step-indicator">
                    <span className="step step1">1.약관동의</span>
                    <span className="separator">{' > '}</span>
                    <span className="step step2">2.정보입력</span>
                    <span className="separator">{' > '}</span>
                    <span className="step step3">3.가입완료</span>
                </div>
                <div className="chk">
                    <a href="">
                        <img src="/images/chk.png" alt="check" />
                    </a>

                    <h3>회원가입이 완료되었습니다.</h3>
                    <strong>
                        <span>{lastSignedUpUser?.name}</span>님 환영합니다.
                        <br />
                        록시땅의 서비스를 이용하실 수 있습니다.
                    </strong>
                </div>
                <p className="btns">
                    <button className="off" onClick={goToHome}>
                        홈으로
                    </button>
                    <button className="on" onClick={goToLoin}>
                        로그인
                    </button>
                </p>
            </div>
        </JoinCompleteStyle>
    );
};

export default JoinComplete;
