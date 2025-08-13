import { JoinInfoStyle } from './style';

const JoinInfo = () => {
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
                <h3>기존정보</h3>
                <strong>
                    <span>*</span> 필수입력사항
                </strong>
                <table>
                    <tbody>
                        <tr>
                            <th>
                                이메일(아이디) <span>*</span>
                            </th>
                            <td>
                                <input
                                    type="text"
                                    name="username"
                                    style={{ width: '400px', height: '35px' }}
                                />
                            </td>
                            <button>중복확인</button>
                        </tr>
                        <tr>
                            <th>비밀번호 *</th>
                            <td>
                                <input
                                    type="text"
                                    name="password"
                                    style={{ width: '400px', height: '35px' }}
                                />
                                *숫자 포함 8자 이상이면서 영문, 숫자, 특수문자를 모두 포함하세요
                            </td>
                        </tr>
                        <tr>
                            <th>
                                비밀번호 확인 <span>*</span>
                            </th>
                            <td>
                                <input
                                    type="text"
                                    name="passwordcheck"
                                    style={{ width: '400px', height: '35px' }}
                                />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                이름 <span>*</span>
                            </th>
                            <td>
                                <input
                                    type="text"
                                    name="name"
                                    style={{ width: '400px', height: '40px' }}
                                />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                주소 <span>*</span>
                            </th>
                            <td>
                                <input
                                    type="text"
                                    name="username"
                                    placeholder="우편번호"
                                    style={{ width: '400px', height: '40px' }}
                                />
                                <button>주소검색</button>
                            </td>
                            <td>
                                <input
                                    type="text"
                                    name="username"
                                    placeholder="기본주소"
                                    style={{ width: '400px', height: '40px' }}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    name="username"
                                    placeholder="상세주소"
                                    style={{ width: '400px', height: '40px' }}
                                />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                휴대전화 <span>*</span>
                            </th>
                            <td>
                                <input
                                    type="text"
                                    name="year"
                                    style={{ width: '50px', height: '35px' }}
                                />
                            </td>
                            -
                            <td>
                                <input
                                    type="text"
                                    name="month"
                                    style={{ width: '50px', height: '35px' }}
                                />
                            </td>
                            -
                            <td>
                                <input
                                    type="text"
                                    name="date"
                                    style={{ width: '50px', height: '35px' }}
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <h4>
                    추가 정보 <span>(선택)</span>
                </h4>
                <tr>
                    <th>생년월일</th>
                    <td>
                        <input type="text" name="year" style={{ width: '50px', height: '35px' }} />
                    </td>
                    년
                    <td>
                        <input type="text" name="month" style={{ width: '50px', height: '35px' }} />
                    </td>
                    월
                    <td>
                        <input type="text" name="date" style={{ width: '50px', height: '35px' }} />
                    </td>
                    일
                </tr>
                <p>
                    <button>취소</button>
                    <button>다음</button>
                </p>
            </div>
        </JoinInfoStyle>
    );
};

export default JoinInfo;
