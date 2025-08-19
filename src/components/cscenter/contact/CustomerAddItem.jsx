import Button from '../../../ui/Button';
import { CustomerAddItemStyle } from './style';

const CustomerAddItem = () => {
    return (
        <CustomerAddItemStyle>
            <tbody>
                <tr>
                    <td>
                        문의 유형 선택 <span>*</span>
                    </td>
                    <td className="inline-input">
                        <select name="inquiryType" style={{ paddingLeft: '10px' }}>
                            <option value="">선택하세요</option>
                            <option value="delivery">배송문의</option>
                            <option value="exchange">교환/환불</option>
                            <option value="product">상품문의</option>
                            <option value="etc">기타</option>
                        </select>
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
                            <input type="email" name="emailId" />
                            <span className="at">@</span>
                            <input type="text" name="emailDomainInput" />
                            <select
                                className="domain-select"
                                name="emailDomain"
                                style={{ paddingLeft: '10px', fontWeight: 500, color: '#A8A8A8' }}
                            >
                                <option value="">선택하세요</option>
                                <option value="naver.com">naver.com</option>
                                <option value="nate.com">nate.com</option>
                                <option value="daum.net">daum.net</option>
                                <option value="google.com">google.com</option>
                                <option value="custom">직접입력</option>
                            </select>
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
