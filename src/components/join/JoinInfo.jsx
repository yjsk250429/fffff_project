import { useNavigate } from 'react-router-dom';
import { BtnStyle, JoinInfoStyle, TableStyle } from './style';

const JoinInfo = () => {
    const navigate = useNavigate();

    const goJoinCom = () => {
        navigate('/join/joincomplete');
    };
    return (
        <JoinInfoStyle>
            <div className="inner">
                <h2>회원가입</h2>
                <div className="step-indicator">
                    <span className="step step1">1.약관동의</span>
                    <span className="separator">{' > '}</span>
                    <span className="step step2">2.정보입력</span>
                    <span className="separator">{' > '}</span>
                    <span className="step step3">3.가입완료</span>
                </div>
                <div className="txt">
                    <h3>기존정보</h3>
                    <div className="text-right">
                        <span>*</span>
                        <strong>필수입력사항</strong>
                    </div>
                </div>

                <TableStyle>
                    <tbody>
                        <tr>
                            <td>
                                이메일(아이디) <span>*</span>
                            </td>
                            <td className="inline-input">
                                <p>
                                    <input
                                        className="input-btn"
                                        type="text"
                                        name="username"
                                        style={{ width: '400px', height: '35px' }}
                                    />
                                    <button className="chk">중복확인</button>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                비밀번호 <span>*</span>
                            </td>
                            <td className="pass">
                                <p>
                                    <input
                                        type="text"
                                        name="password"
                                        style={{ width: '400px', height: '35px' }}
                                    />
                                </p>
                                <p>
                                    <span className="sub">
                                        *숫자 포함 8자 이상이면서 영문, 숫자, 특수문자를 모두
                                        포함하세요
                                    </span>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                비밀번호 확인 <span>*</span>
                            </td>
                            <td>
                                <input
                                    type="text"
                                    name="passwordcheck"
                                    style={{ width: '400px', height: '35px' }}
                                />
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
                                    style={{ width: '400px', height: '35px' }}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                주소 <span>*</span>
                            </td>
                            <td className="inline-input">
                                <div className="adress">
                                    <p>
                                        <input
                                            style={{ width: '160px', height: '35px' }}
                                            className="post-input"
                                            type="text"
                                            name="post"
                                            placeholder="우편번호"
                                        />
                                        <button className="chk">주소검색</button>
                                    </p>

                                    <p>
                                        <input
                                            className="addr-input"
                                            style={{ width: '400px', height: '35px' }}
                                            type="text"
                                            name="adress"
                                            placeholder="기본주소"
                                        />
                                    </p>

                                    <input
                                        style={{ width: '400px', height: '35px' }}
                                        type="text"
                                        name="ditail"
                                        placeholder="상세주소"
                                    />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                휴대전화 <span>*</span>
                            </td>
                            <td className="tell">
                                <input
                                    style={{ width: '50px', height: '25px' }}
                                    type="text"
                                    name="year"
                                />
                                -
                                <input
                                    style={{ width: '50px', height: '25px' }}
                                    type="text"
                                    name="month"
                                />
                                -
                                <input
                                    style={{ width: '50px', height: '25px' }}
                                    type="text"
                                    name="date"
                                />
                            </td>
                        </tr>
                    </tbody>
                </TableStyle>

                <div className="txt2">
                    <h4>
                        기존정보 <span>(선택)</span>
                    </h4>
                </div>
                <TableStyle>
                    <tbody>
                        <tr>
                            <td>생년월일</td>
                            <td className="choices">
                                <div className="time">
                                    <p>
                                        <input
                                            style={{ width: '80px', height: '25px' }}
                                            type="text"
                                            name="year"
                                        />
                                        년
                                    </p>
                                    <p>
                                        <input
                                            style={{ width: '50px', height: '25px' }}
                                            type="text"
                                            name="month"
                                        />
                                        월
                                    </p>
                                    <p>
                                        <input
                                            style={{ width: '50px', height: '25px' }}
                                            type="text"
                                            name="date"
                                        />
                                        일
                                    </p>
                                </div>
                                <div className="time2">
                                    <label>
                                        <p>
                                            <input
                                                style={{ width: '15px', height: '15px' }}
                                                type="radio"
                                                name="choice"
                                                value="양력"
                                            />
                                            양력
                                        </p>
                                        <p>
                                            <input
                                                style={{ width: '15px', height: '15px' }}
                                                type="radio"
                                                name="choice"
                                                value="음력"
                                            />
                                            음력
                                        </p>
                                    </label>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </TableStyle>
                <BtnStyle>
                    <p>
                        <button className="off">취소</button>
                    </p>
                    <p>
                        <button className="on" onClick={goJoinCom}>
                            다음
                        </button>
                    </p>
                </BtnStyle>
            </div>
        </JoinInfoStyle>
    );
};

export default JoinInfo;
