import { useNavigate } from 'react-router-dom';
import { BtnStyle, JoinInfoStyle, TableStyle } from './style';
import { useEffect, useState } from 'react';
import Button from '../../ui/Button';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../../store/modules/authSlice';
import { TfiAngleRight } from 'react-icons/tfi';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';

const JoinInfo = () => {
    const [showPw, setShowPw] = useState(false);
    const [passwordCheck, setPasswordCheck] = useState('');
    const [pwMsg, setPwMsg] = useState('');
    const [pwOk, setPwOk] = useState(null);
    const [emailStatus, setEmailStatus] = useState('idle'); // idle | ok | dup
    const [emailMsg, setEmailMsg] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [user, setUser] = useState({
        name: '',
        tel: { first: '', middle: '', last: '' },
        email: '',
        password: '',
        addr: {
            zipCode: '',
            mainAddr: '',
            detailAddr: '',
        },
        birth: {
            year: '',
            month: '',
            date: '',
            moon: 'solar',
        },
    });
    const { name, tel, email, password, addr, birth } = user;
    const { zipCode, mainAddr, detailAddr } = addr;
    const { year, month, date, moon } = birth;
    const { first, middle, last } = tel;

    const changeInput = (e) => {
        const { value, name } = e.target;

        // 이메일 입력이 변경되면 중복확인 상태 초기화
        if (name === 'email') {
            setEmailStatus('idle');
            setEmailMsg('');
        }

        // 비밀번호 변경 시 비밀번호 확인 재검증
        if (name === 'password') {
            // 아래 effect에서 재검증하지만 즉시 피드백을 원하면 여기서도 처리 가능
        }

        setUser((prev) => {
            const path = name.split('.');
            const next = structuredClone(prev);
            let cur = next;
            for (let i = 0; i < path.length - 1; i++) {
                cur = cur[path[i]];
            }
            cur[path[path.length - 1]] = value;
            return next;
        });
    };

    useEffect(() => {
        if (!password && !passwordCheck) {
            setPwOk(null);
            setPwMsg('');
            return;
        }
        if (!password || !passwordCheck) {
            setPwOk(false);
            setPwMsg('비밀번호와 확인값을 모두 입력해 주세요.');
            return;
        }
        if (password === passwordCheck) {
            setPwOk(true);
            setPwMsg('비밀번호가 일치합니다.');
        } else {
            setPwOk(false);
            setPwMsg('비밀번호가 일치하지 않습니다.');
        }
    }, [password, passwordCheck]);

    const members = useSelector((state) => state.auth.members);

    const checkEmail = (e) => {
        e.preventDefault();
        const trimmed = email?.trim();
        if (!trimmed) {
            setEmailStatus('idle');
            setEmailMsg('이메일을 입력해 주세요.');
            return;
        }

        const isDup = members.some((m) => m.email === trimmed);
        if (isDup) {
            setEmailStatus('dup');
            setEmailMsg('동일 이메일이 존재합니다.');
        } else {
            setEmailStatus('ok');
            setEmailMsg('가입 가능한 이메일입니다.');
        }
    };

    const onBack = () => {
        alert('회원가입이 취소되었습니다.');
        navigate(-1);
    };

    const onSubmit = (e) => {
        e.preventDefault();

        // 필수값 체크
        if (
            !name?.trim() ||
            !first?.trim() ||
            !middle?.trim() ||
            !last?.trim() ||
            !email?.trim() ||
            !password?.trim() ||
            !zipCode?.trim() ||
            !mainAddr?.trim() ||
            !detailAddr?.trim()
        ) {
            alert('필수 항목을 입력해 주세요.');
            setEmailMsg((prev) => prev || '이메일을 입력해 주세요.');
            return;
        }

        if (!pwOk) {
            setPwMsg((prev) => prev || '비밀번호가 일치하지 않습니다.');
            return;
        }
        if (emailStatus !== 'ok') {
            setEmailMsg('이메일 중복확인을 진행해 주세요.');
            return;
        }
        dispatch(authActions.signup(user));
        setUser({
            name: '',
            tel: { first: '', middle: '', last: '' },
            email: '',
            password: '',
            addr: { zipCode: '', mainAddr: '', detailAddr: '' },
            birth: { year: '', month: '', date: '', moon: 'solar' },
        });
        setPasswordCheck('');
        setPwOk(null);
        setPwMsg('');
        setEmailStatus('idle');
        setEmailMsg('');

        navigate('/join/joincomplete');
    };

    useEffect(() => {
        if (!window.daum) {
            const script = document.createElement('script');
            script.src = 'https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';
            script.async = true;
            document.body.appendChild(script);
        }
    }, []);

    const handleAddressSearch = () => {
        if (!window.daum) {
            alert('주소검색 API 로드 중입니다. 잠시 후 다시 시도해주세요.');
            return;
        }

        new window.daum.Postcode({
            oncomplete: (data) => {
                const selectedAddr = data.roadAddress || data.jibunAddress;
                changeInput({
                    target: {
                        name: 'addr.zipCode',
                        value: data.zonecode,
                    },
                });
                changeInput({
                    target: {
                        name: 'addr.mainAddr',
                        value: selectedAddr,
                    },
                });
                setIsSameAsAddress(false);
            },
        }).open();
    };

    return (
        <JoinInfoStyle>
            <div className="inner">
                <h2>회원가입</h2>
                <div className="step-indicator">
                    <span>1. 약관동의</span>
                    <span>
                        <i>
                            <TfiAngleRight />
                        </i>
                    </span>
                    <span className="on">2. 정보입력</span>
                    <span>
                        <i>
                            <TfiAngleRight />
                        </i>
                    </span>
                    <span>3. 가입완료</span>
                </div>
                <div className="txt">
                    <h3>기존정보</h3>
                    <div className="text-right">
                        <span>*</span>
                        <strong>필수입력사항</strong>
                    </div>
                </div>

                <form onSubmit={onSubmit}>
                    <TableStyle>
                        <tbody>
                            <tr>
                                <td>
                                    이메일(아이디) <span>*</span>
                                </td>
                                <td>
                                    <p>
                                        <input
                                            type="text"
                                            name="email"
                                            value={email}
                                            onChange={changeInput}
                                        />
                                        <button className="chk" onClick={checkEmail}>
                                            중복확인
                                        </button>
                                        {emailMsg && (
                                            <div
                                                className={`msg ${
                                                    emailStatus === 'ok'
                                                        ? 'ok'
                                                        : emailStatus === 'dup'
                                                        ? 'error'
                                                        : 'neutral'
                                                }`}
                                                style={{
                                                    marginTop: 6,
                                                    fontSize: 12,
                                                    color:
                                                        emailStatus === 'ok'
                                                            ? '#2e7d32'
                                                            : emailStatus === 'dup'
                                                            ? '#d32f2f'
                                                            : '#6b7280',
                                                }}
                                            >
                                                {emailMsg}
                                            </div>
                                        )}
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    비밀번호 <span>*</span>
                                </td>
                                <td>
                                    <p>
                                        <input
                                            type={showPw ? 'text' : 'password'}
                                            name="password"
                                            value={password}
                                            onChange={changeInput}
                                        />
                                        <i onClick={() => setShowPw(!showPw)}>
                                            {showPw ? <IoMdEyeOff /> : <IoMdEye />}
                                        </i>
                                    </p>
                                    <p>
                                        <span>*숫자 포함 8자 이상</span>
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    비밀번호 확인 <span>*</span>
                                </td>
                                <td>
                                    <input
                                        type={showPw ? 'text' : 'password'}
                                        name="passwordcheck"
                                        value={passwordCheck}
                                        onChange={(e) => setPasswordCheck(e.target.value)}
                                    />
                                    {pwMsg && (
                                        <div
                                            className={`msg ${pwOk ? 'ok' : 'error'}`}
                                            style={{
                                                marginTop: 6,
                                                fontSize: 12,
                                                color: pwOk ? '#2e7d32' : '#d32f2f',
                                            }}
                                        >
                                            {pwMsg}
                                        </div>
                                    )}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    이름 <span>*</span>
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        name="name"
                                        value={name}
                                        onChange={changeInput}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    주소 <span>*</span>
                                </td>
                                <td className="address">
                                    <p>
                                        <input
                                            type="text"
                                            name="addr.zipCode"
                                            value={zipCode}
                                            onChange={changeInput}
                                            placeholder="우편번호"
                                        />
                                        <button
                                            onClick={handleAddressSearch}
                                            className="chk"
                                            type="button"
                                        >
                                            주소검색
                                        </button>
                                    </p>

                                    <p>
                                        <input
                                            type="text"
                                            name="addr.mainAddr"
                                            value={mainAddr}
                                            onChange={changeInput}
                                            placeholder="기본주소"
                                        />
                                    </p>
                                    <p>
                                        <input
                                            type="text"
                                            name="addr.detailAddr"
                                            value={detailAddr}
                                            onChange={changeInput}
                                            placeholder="상세주소"
                                        />
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    휴대전화 <span>*</span>
                                </td>
                                <td className="tel">
                                    <input
                                        type="text"
                                        name="tel.first"
                                        value={first}
                                        onChange={changeInput}
                                    />
                                    <span>-</span>
                                    <input
                                        type="text"
                                        name="tel.middle"
                                        value={middle}
                                        onChange={changeInput}
                                    />
                                    <span>-</span>
                                    <input
                                        type="text"
                                        name="tel.last"
                                        value={last}
                                        onChange={changeInput}
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </TableStyle>

                    <div className="txt2">
                        <h4>
                            추가정보 <span>(선택)</span>
                        </h4>
                    </div>
                    <TableStyle>
                        <tbody>
                            <tr>
                                <td>생년월일</td>
                                <td className="birthday">
                                    <div className="date">
                                        <p>
                                            <label>
                                                <input
                                                    type="text"
                                                    name="birth.year"
                                                    value={year}
                                                    onChange={changeInput}
                                                />
                                                년
                                            </label>
                                        </p>
                                        <p>
                                            <label>
                                                <input
                                                    type="text"
                                                    name="birth.month"
                                                    value={month}
                                                    onChange={changeInput}
                                                />
                                                월
                                            </label>
                                        </p>
                                        <p>
                                            <label>
                                                <input
                                                    type="text"
                                                    name="birth.date"
                                                    value={date}
                                                    onChange={changeInput}
                                                />
                                                일
                                            </label>
                                        </p>
                                    </div>
                                    <div className="moon">
                                        <p>
                                            <label>
                                                <input
                                                    type="radio"
                                                    name="birth.moon"
                                                    value="solar"
                                                    checked={moon === 'solar'}
                                                    onChange={changeInput}
                                                />
                                                양력
                                            </label>
                                        </p>
                                        <p>
                                            <label>
                                                <input
                                                    type="radio"
                                                    name="birth.moon"
                                                    value="lunar"
                                                    checked={moon === 'lunar'}
                                                    onChange={changeInput}
                                                />
                                                음력
                                            </label>
                                        </p>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </TableStyle>
                    <BtnStyle>
                        <p>
                            <Button text="취소" width="354px" height="50px" onClick={onBack} />
                        </p>
                        <p>
                            <Button
                                text="다음"
                                width="354px"
                                height="50px"
                                bgColor="#000"
                                textColor="#fff"
                                type="submit"
                            />
                        </p>
                    </BtnStyle>
                </form>
            </div>
        </JoinInfoStyle>
    );
};

export default JoinInfo;
