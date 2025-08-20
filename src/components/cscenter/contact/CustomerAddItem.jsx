import { useState } from 'react';
import Button from '../../../ui/Button';
import { CustomerAddItemStyle, DomainSelectWrapper, SelectWrapper } from './style';
import { LiaAngleUpSolid, LiaAngleDownSolid } from 'react-icons/lia';
const CustomerAddItem = () => {
    const [dropdownStates, setDropdownStates] = useState({
        inquiryType: false,
        emailDomain: false,
    });
    const [emailId, setEmailId] = useState('');
    const [emailDomain, setEmailDomain] = useState('');
    const [isCustomDomain, setIsCustomDomain] = useState(false);

    const handleSelectFocus = (selectName) => {
        setDropdownStates((prev) => ({
            ...prev,
            [selectName]: !prev[selectName],
        }));
    };
    const handleSelectBlur = (selectName) => {
        setDropdownStates((prev) => ({
            ...prev,
            [selectName]: false,
        }));
    };
    const handleDomainChange = (e) => {
        const value = e.target.value;
        if (value === 'custom') {
            setIsCustomDomain(true);
            setEmailDomain('');
        } else {
            setIsCustomDomain(false);
            setEmailDomain(value);
        }
    };
    return (
        <CustomerAddItemStyle>
            <tbody>
                <tr>
                    <td>
                        문의 유형 선택 <span>*</span>
                    </td>
                    <td className="inline-input">
                        <SelectWrapper>
                            <select
                                name="inquiryType"
                                style={{ paddingLeft: '10px' }}
                                onClick={() => handleSelectFocus('inquiryType')}
                                onBlur={() => handleSelectBlur('inquiryType')}
                            >
                                <option value="">선택하세요</option>
                                <option value="delivery">배송문의</option>
                                <option value="exchange">교환/환불</option>
                                <option value="product">상품문의</option>
                                <option value="etc">기타</option>
                            </select>
                            {dropdownStates.inquiryType ? (
                                <LiaAngleUpSolid className="icon" />
                            ) : (
                                <LiaAngleDownSolid className="icon" />
                            )}
                        </SelectWrapper>
                    </td>
                </tr>
                <tr>
                    <td>
                        이름 <span>*</span>
                    </td>
                    <td className="inline-input">
                        <input type="text" name="name" />
                    </td>
                </tr>
                <tr>
                    <td>
                        제목 <span>*</span>
                    </td>
                    <td className="inline-input">
                        <input type="text" name="title" />
                    </td>
                </tr>
                <tr>
                    <td>
                        이메일 <span>*</span>
                    </td>
                    <td colSpan={2}>
                        <div className="email-wrap">
                            <input
                                type="email"
                                name="emailId"
                                value={emailId}
                                onChange={(e) => setEmailId(e.target.value)}
                            />
                            <span className="at">@</span>
                            <input
                                type="text"
                                name="emailDomainInput"
                                value={emailDomain}
                                onChange={(e) => setEmailDomain(e.target.value)}
                                disabled={!isCustomDomain}
                            />
                            <DomainSelectWrapper>
                                <select
                                    className="domain-select"
                                    name="emailDomain"
                                    onChange={handleDomainChange}
                                    style={{
                                        paddingLeft: '10px',
                                        fontWeight: 500,
                                        color: '#A8A8A8',
                                    }}
                                    onClick={() => handleSelectFocus('emailDomain')}
                                    onBlur={() => handleSelectBlur('emailDomain')}
                                >
                                    <option value="">선택하세요</option>
                                    <option value="naver.com">naver.com</option>
                                    <option value="nate.com">nate.com</option>
                                    <option value="daum.net">daum.net</option>
                                    <option value="google.com">google.com</option>
                                    <option value="custom">직접입력</option>
                                </select>
                                {dropdownStates.emailDomain ? (
                                    <LiaAngleUpSolid className="icon" />
                                ) : (
                                    <LiaAngleDownSolid className="icon" />
                                )}
                            </DomainSelectWrapper>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        문의 내용 <span>*</span>
                    </td>
                    <td className="inline-input">
                        <textarea
                            placeholder="문의 내용을 입력하세요"
                            name="content"
                            style={{ padding: '10px' }}
                        />
                    </td>
                </tr>
                <tr>
                    <td>첨부파일</td>
                    <td className="btn">
                        <p className="btn">
                            <Button text="파일업로드" />
                        </p>
                    </td>
                </tr>
            </tbody>
        </CustomerAddItemStyle>
    );
};

export default CustomerAddItem;
