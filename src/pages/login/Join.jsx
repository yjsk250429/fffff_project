import { useState } from 'react';
import { JoinStyle } from './style';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const goToLoin = () => {
        navigate('/login');
    };

    const [agree, setAgree] = useState({ terms: false, privacy: false, sms: false, email: false });
    const onChaked = (e) => {
        const { name, checked } = e.target;
        setAgree((prev) => ({ ...prev, [name]: checked }));
    };
    const Next = () => {
        if (!agree.terms || !agree.privacy) {
            alert('모든 필수 항목에 동의해주세요.');
            return;
        }
        navigate('/join/joininfo');
    };
    return (
        <JoinStyle>
            <div className="inner">
                <h2>회원가입</h2>
                <div className="step-indicator">
                    <span className="step step1">1.약관동의</span>
                    <span className="separator">{' > '}</span>
                    <span className="step step2">2.정보입력</span>
                    <span className="separator">{' > '}</span>
                    <span className="step step3">3.가입완료</span>
                </div>
                <p className="all">
                    <label className="allagree">
                        <input type="checkbox" /> 전체 동의
                    </label>
                </p>
                <p>
                    <label>
                        <input
                            type="checkbox"
                            name="terms"
                            checked={agree.terms}
                            onChange={onChaked}
                        />
                        서비스이용약관 관련 동의 전체동의
                    </label>
                    <label className="choice">
                        <input
                            type="checkbox"
                            name="privacy"
                            checked={agree.privacy}
                            onChange={onChaked}
                        />
                        개인정보 수집 및 이용동의 (필수)
                    </label>
                </p>
                <p>
                    <label>
                        <input type="checkbox" /> 쇼핑정보 수신 동의 (선택)
                    </label>
                    <label className="choice">
                        <input type="checkbox" /> SMS 수신 동의 (선택)
                    </label>
                    <label className="choice">
                        <input type="checkbox" /> 이메일 수신 동의 (선택)
                    </label>
                </p>
                <p className="btns">
                    <button className="off" onClick={goToLoin}>
                        취소
                    </button>
                    <button className="on" onClick={Next}>
                        다음
                    </button>
                </p>
            </div>
        </JoinStyle>
    );
};
export default Login;
