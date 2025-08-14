import { useNavigate } from 'react-router-dom';
import { JoinInfoStyle } from './style';

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
                    <strong>
                        <span>*</span> 필수입력사항
                    </strong>
                </div>

                <table>
                    <tbody>
                        <tr>
                            <td>
                                이메일(아이디) <span>*</span>
                            </td>
                            <td className="inline-input">
                                <input
                                    className="input-btn"
                                    type="text"
                                    name="username"
                                    style={{ width: '400px', height: '35px' }}
                                />
                                <button className="chk">중복확인</button>
                            </td>
                        </tr>
                        <tr>
                            <td>비밀번호 *</td>
                            <td className="pass">
                                <p>
                                    <input
                                        type="text"
                                        name="password"
                                        style={{ width: '400px', height: '35px' }}
                                    />
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
                                    style={{ width: '400px', height: '40px' }}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                주소 <span>*</span>
                            </td>
                            <td className="inline-input">
                                <p>
                                    <input
                                        className="input-btn"
                                        type="text"
                                        name="post"
                                        placeholder="우편번호"
                                    />
                                    <button className="chk">주소검색</button>
                                </p>
                                <p>
                                    <input type="text" name="adress" placeholder="기본주소" />
                                </p>
                                <p>
                                    <input type="text" name="ditail" placeholder="상세주소" />
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                휴대전화 <span>*</span>
                            </td>
                            <td>
                                <input type="text" name="year" />
                                -
                                <input type="text" name="month" />
                                -
                                <input type="text" name="date" />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <h4>
                    추가 정보 <span>(선택)</span>
                </h4>
                <tr>
                    <td>생년월일</td>
                    <td>
                        <input type="text" name="year" />
                        년
                        <input type="text" name="month" />
                        월
                        <input type="text" name="date" />
                    </td>
                    일
                </tr>
                <p className="btns">
                    <button className="on">취소</button>
                    <button className="off" onClick={goJoinCom}>
                        다음
                    </button>
                </p>
            </div>
        </JoinInfoStyle>
    );
};

export default JoinInfo;
