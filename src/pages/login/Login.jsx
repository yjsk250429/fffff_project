import { useNavigate } from 'react-router-dom';
import { LoginStyle } from './style';

const Login = () => {
    const navigate = useNavigate();

    const goToJoin = () => {
        navigate('/join');
    };

    return (
        <LoginStyle>
            <div className="inner">
                <h2>로그인</h2>
                <form>
                    <div className="left">
                        <div className="login-input">
                            <p>
                                <input type="email" name="email" placeholder="아이디 or 이메일" />
                            </p>
                            <p>
                                <input type="password" name="password" placeholder="비밀번호" />
                            </p>
                        </div>

                        <p className="save-find">
                            <label>
                                <input type="checkbox" /> 아이디 저장
                            </label>
                            <span>아이디 찾기 | 비밀번호 찾기</span>
                        </p>
                        <div className="btn1">
                            <button className="on">로그인</button>
                            <button className="off" onClick={goToJoin}>
                                회원가입
                            </button>
                        </div>
                        <p className="sns-login">SNS 계정으로 로그인</p>
                        <div className="icon">
                            <img
                                src="/images/kakaotalk.png"
                                alt="카카오 로그인"
                                style={{ width: '50px', height: '50px' }}
                            />
                            <img
                                src="/images/naver.png"
                                alt="네이버 로그인"
                                style={{ width: '50px', height: '50px' }}
                            />
                            <img
                                src="/images/facebook.png"
                                alt="페이스북 로그인"
                                style={{ width: '54px', height: '50px' }}
                            />
                            <img
                                src="/images/google.png"
                                alt="구글 로그인"
                                style={{ width: '50px', height: '50px' }}
                            />
                            <img
                                src="/images/apple.png"
                                alt="애플 로그인"
                                style={{ width: '50px', height: '50px' }}
                            />
                        </div>
                    </div>
                    <div className="divider">
                        <span>OR</span>
                    </div>

                    <div className="right">
                        <h3>비회원 주문조회</h3>
                        <div className="number-input">
                            <p>
                                <input type="text" name="text" placeholder="주문번호" />
                            </p>
                            <p>
                                <input type="email" name="email" placeholder="이메일" />
                            </p>
                        </div>

                        <p className="btn2">
                            <button>주문 확인</button>
                        </p>
                    </div>
                </form>
            </div>
        </LoginStyle>
    );
};

export default Login;
