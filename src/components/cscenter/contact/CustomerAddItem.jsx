import { useState } from 'react';
import Button from '../../../ui/Button';
import { CustomerAddItemStyle, DomainSelectWrapper, SelectWrapper } from './style';
import { LiaAngleUpSolid, LiaAngleDownSolid } from 'react-icons/lia';

const CustomerAddItem = ({ data, onChange, errors }) => {
    const [dropdownStates, setDropdownStates] = useState({
        type: false,
        emailDomain: false,
    });
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
            onChange({ target: { name: 'emailDomain', value: '' } });
        } else {
            setIsCustomDomain(false);
            onChange({ target: { name: 'emailDomain', value } });
        }
    };

    // 이메일 에러 상태 확인 함수
    const hasEmailError = () => {
        return errors?.email || errors?.emailId || errors?.emailDomain;
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
                                name="type"
                                value={data.type}
                                onChange={onChange}
                                style={{
                                    paddingLeft: '10px',
                                    borderColor: errors?.type ? 'red' : '#ccc',
                                }}
                                onClick={() => handleSelectFocus('type')}
                                onBlur={() => handleSelectBlur('type')}
                            >
                                <option value="">선택하세요</option>
                                <option value="배송문의">배송문의</option>
                                <option value="교환/환불">교환/환불</option>
                                <option value="상품문의">상품문의</option>
                                <option value="기타">기타</option>
                            </select>
                            {dropdownStates.type ? (
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
                        <input
                            type="text"
                            name="name"
                            value={data.name}
                            onChange={onChange}
                            placeholder={errors?.name ? errors.name : ''}
                            style={{ borderColor: errors?.name ? 'red' : '#ccc' }}
                        />
                    </td>
                </tr>
                <tr>
                    <td>
                        제목 <span>*</span>
                    </td>
                    <td className="inline-input">
                        <input
                            type="text"
                            name="title"
                            value={data.title}
                            onChange={onChange}
                            placeholder={errors?.title ? errors.title : ''}
                            style={{ borderColor: errors?.title ? 'red' : '#ccc' }}
                        />
                    </td>
                </tr>
                <tr>
                    <td>
                        이메일 <span>*</span>
                    </td>
                    <td colSpan={2}>
                        <div className="email-wrap">
                            <input
                                type="text"
                                name="emailId"
                                value={data.emailId}
                                onChange={onChange}
                                placeholder={errors?.emailId || errors?.email || ''}
                                style={{ borderColor: hasEmailError() ? 'red' : '#ccc' }}
                            />
                            <span className="at">@</span>
                            <input
                                type="text"
                                name="emailDomain"
                                value={data.emailDomain}
                                onChange={onChange}
                                placeholder={isCustomDomain ? '직접 입력' : ''}
                                readOnly={!isCustomDomain}
                                style={{ borderColor: hasEmailError() ? 'red' : '#ccc' }}
                            />
                            <DomainSelectWrapper>
                                <select
                                    className="domain-select"
                                    name="emailDomainSelect"
                                    value={isCustomDomain ? 'custom' : data.emailDomain || ''}
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
                            name="content"
                            value={data.content}
                            onChange={onChange}
                            placeholder={errors?.content ? errors.content : ''}
                            style={{ borderColor: errors?.content ? 'red' : '#ccc' }}
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
