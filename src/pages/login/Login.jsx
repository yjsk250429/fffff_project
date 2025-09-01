import { useNavigate } from 'react-router-dom';
import { LoginStyle } from './style';
import { useEffect, useState } from 'react';
import { authActions } from '../../store/modules/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import GuestOrder from '../../components/login/GuestOrder';
import Modal from '../../ui/modal'; // 모달 임포트

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { authed, user: authUser } = useSelector((state) => state.auth);

    const [submitted, setSubmitted] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [modalText, setModalText] = useState('');
    const [user, setUser] = useState({ email: '', password: '' });

    const { email, password } = user;

    const changeInput = (e) => {
        const { value, name } = e.target;
        setUser({ ...user, [name]: value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (!email.trim() || !password.trim()) return;

        dispatch(authActions.login(user));
        setSubmitted(true);
    };

    useEffect(() => {
        if (!submitted) return;

        if (authed && authUser) {
            setModalText(`${authUser.name}님, 로그인했습니다.`);
            setModalOpen(true);
            setUser({ email: '', password: '' });
        } else {
            setModalText('이메일 또는 비밀번호가 일치하지 않습니다.');
            setModalOpen(true);
            setUser((prev) => ({ ...prev, password: '' }));
        }

        setSubmitted(false);
    }, [authed, submitted, authUser]);

    const closeModal = () => {
        setModalOpen(false);
        if (authed) navigate('/'); // 성공 시 메인 페이지 이동
    };

    const goToJoin = () => navigate('/join');

    return (
        <LoginStyle>
            <div className="inner">
                <h2>로그인</h2>
                <div className="forms">
                    <form onSubmit={onSubmit}>
                        <div className="left">
                            <div className="login-input">
                                <p>
                                    <input
                                        type="text"
                                        name="email"
                                        placeholder="abc@naver.com"
                                        value={email}
                                        onChange={changeInput}
                                    />
                                </p>
                                <p>
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="비밀번호"
                                        value={password}
                                        onChange={changeInput}
                                    />
                                </p>
                            </div>

                            <p className="save-find">
                                <label>
                                    <input type="checkbox" /> 아이디 저장
                                </label>
                                <span>아이디 찾기 | 비밀번호 찾기</span>
                            </p>
                            <div className="btn1">
                                <button className="on" type="submit">
                                    로그인
                                </button>
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
                    </form>

                    <div className="divider">
                        <span>OR</span>
                    </div>
                    <GuestOrder />
                </div>
            </div>

            {/* 모달 */}
            {modalOpen && (
                <Modal
                    text={modalText}
                    onClose={closeModal}
                    showHomeButton={false} // 홈으로 버튼 보이기
                    showConfirmButton={true} // 확인 버튼 보이기
                />
            )}
        </LoginStyle>
    );
};

export default Login;
