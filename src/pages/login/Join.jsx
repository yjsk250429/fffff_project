import { useState } from 'react';
import { JoinStyle } from './style';
import { useNavigate } from 'react-router-dom';
import { TfiAngleDown, TfiAngleRight } from 'react-icons/tfi';
import Button from '../../ui/Button';

const Join = () => {
    const navigate = useNavigate();
    const [openRequired, setOpenRequired] = useState(false);
    const [openOptional, setOpenOptional] = useState(false);

    const [agree, setAgree] = useState({ terms: false, sms: false, email: false });
    const onChecked = (e) => {
        const { name, checked } = e.target;
        setAgree((prev) => ({ ...prev, [name]: checked }));
    };
    const Next = () => {
        if (!agree.terms) {
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
                    <span className="on">1. 약관동의</span>
                    <span>
                        <i>
                            <TfiAngleRight />
                        </i>
                    </span>
                    <span>2. 정보입력</span>
                    <span>
                        <i>
                            <TfiAngleRight />
                        </i>
                    </span>
                    <span>3. 가입완료</span>
                </div>
                <p className="all">
                    <label className="allagree">
                        <input type="checkbox" /> 전체 동의
                    </label>
                </p>
                <p className="required">
                    <label htmlFor="terms">
                        <input
                            id="terms"
                            type="checkbox"
                            name="terms"
                            checked={agree.terms}
                            onChange={onChecked}
                        />
                        서비스이용약관 관련 동의 (필수)
                        <i onClick={() => setOpenRequired((v) => !v)}>
                            <TfiAngleDown />
                        </i>
                    </label>
                    {openRequired && <span>개인정보 수집 및 이용동의</span>}
                </p>
                <p className="optional">
                    <label htmlFor="opt-master">
                        <input id="opt-master" type="checkbox" readOnly /> 쇼핑정보 수신 동의 (선택)
                        <i onClick={() => setOpenOptional((v) => !v)}>
                            <TfiAngleDown />
                        </i>
                    </label>

                    {openOptional && (
                        <>
                            <label className="choice" htmlFor="sms">
                                <input
                                    id="sms"
                                    type="checkbox"
                                    name="sms"
                                    checked={agree.sms}
                                    onChange={onChecked}
                                />
                                SMS 수신 동의 (선택)
                            </label>
                            <label className="choice" htmlFor="email">
                                <input
                                    id="email"
                                    type="checkbox"
                                    name="email"
                                    checked={agree.email}
                                    onChange={onChecked}
                                />
                                이메일 수신 동의 (선택)
                            </label>
                        </>
                    )}
                </p>
                <p className="btns">
                    <Button
                        text="취소"
                        width="354px"
                        height="50px"
                        borderColor="var(--foundation-white-dark)"
                        onClick={() => navigate('/login')}
                    />
                    <Button
                        text="다음"
                        width="354px"
                        height="50px"
                        bgColor="#000"
                        textColor="#fff"
                        borderColor="var(--foundation-white-dark)"
                        onClick={Next}
                    />
                </p>
            </div>
        </JoinStyle>
    );
};
export default Join;
