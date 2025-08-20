import { useSelector } from 'react-redux';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { PaymentWrapStyle } from './style';
import PaymentProductItem from './PaymentProductItem';

const PaymentWrap = () => {
    const { carts, priceTotal } = useSelector((state) => state.cart);

    // 샘플 포함 모든 상품
    const allProducts = carts;

    // 샘플 포함 총 수량
    const totalQuantity = carts.reduce((sum, c) => sum + (c.quantity || 0), 0);

    const shippingFee = priceTotal > 0 && priceTotal < 50000 ? 3000 : 0;
    const discountAmount = 0; // 나중에 적용
    const finalTotal = priceTotal + shippingFee - discountAmount;

    const formatPrice = (price) => price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    return (
        <PaymentWrapStyle>
            <div className="payment-left">
                <table>
                    <colgroup>
                        <col style={{ width: '175px' }} />
                        <col style={{ width: '745px' }} />
                    </colgroup>
                    <tbody>
                        <tr className="first-line">
                            <td colSpan="2">배송지 정보 입력</td>
                        </tr>
                        <tr>
                            <td>받는 분</td>
                            <td className="inline-input">
                                <p>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="이름을 입력해 주세요."
                                    />
                                </p>
                                <p>
                                    <input
                                        type="text"
                                        name="tel"
                                        placeholder="휴대폰번호를 - 없이 입력해 주세요."
                                    />
                                </p>
                                <p>
                                    <input type="checkbox" />
                                    <label>주문자와 동일</label>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>주소</td>
                            <td className="inline-input">
                                <p>
                                    <input type="text" name="address1" placeholder="우편번호" />
                                    <button>주소 검색</button>
                                </p>
                                <p>
                                    <input type="text" name="address2" placeholder="기본주소" />
                                </p>
                                <p>
                                    <input type="text" name="address3" placeholder="상세주소" />
                                </p>
                                <p>
                                    <input type="checkbox" />
                                    <label>최근 배송지</label>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>배송메모</td>
                            <td className="inline-input">
                                <select
                                    className="domain-select"
                                    name="emailDomain"
                                    style={{
                                        paddingLeft: '10px',
                                        fontWeight: 500,
                                        color: '#A8A8A8',
                                    }}
                                >
                                    <option value="">배송 메모를 선택해주세요.</option>
                                    <option value="option1">배송 전에 연락 주세요.</option>
                                    <option value="option2">부재 시 문 앞에 놓아주세요.</option>
                                    <option value="option3">
                                        파손 위험이 있으니 조심히 다뤄주세요.
                                    </option>
                                    <option value="option4">
                                        문 앞에 놓을 공간이 없으면 경비실에 맡겨주세요.
                                    </option>
                                </select>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="payment-items">
                    <p className="title products">
                        주문상품 (총 {totalQuantity}개)
                        <i>
                            <MdKeyboardArrowDown />
                        </i>
                    </p>
                    <ul>
                        {allProducts.map((product) => (
                            <PaymentProductItem
                                key={product.id}
                                product={product} // name 통일
                            />
                        ))}
                    </ul>
                </div>
                <div className="payment-discount">
                    <p className="title discount">쿠폰 적립금</p>
                    <div className="input-wrap">
                        <p>쿠폰 코드 입력</p>
                        <input type="text" placeholder="숫자 16자리" />
                        <button>쿠폰 적용</button>
                    </div>
                </div>
                <div className="payment-tools">
                    <p className="title tools">결제수단</p>
                    <div className="tool-list">
                        <input
                            type="radio"
                            id="creditCard"
                            name="paymentMethod"
                            value="creditCard"
                            defaultChecked
                        />
                        <label htmlFor="creditCard">신용카드</label>

                        <input type="radio" id="mobilePay" name="paymentMethod" value="mobilePay" />
                        <label htmlFor="mobilePay">휴대폰 결제</label>

                        <input type="radio" id="simplePay" name="paymentMethod" value="simplePay" />
                        <label htmlFor="simplePay">간편 결제</label>

                        <input type="radio" id="kakaoPay" name="paymentMethod" value="kakaoPay" />
                        <label htmlFor="kakaoPay">카카오페이</label>
                    </div>
                </div>
            </div>
            <div className="payment-right">
                <h3>결제 정보</h3>
                <strong>
                    총 결제 금액
                    <span>{formatPrice(finalTotal)}원</span>
                </strong>
                <p>
                    상품 금액
                    <span>{formatPrice(priceTotal)}원</span>
                </p>
                <p>
                    배송비
                    <span>{formatPrice(shippingFee)}원</span>
                </p>
                <p>
                    할인 금액
                    <span>{formatPrice(discountAmount)}원</span>
                </p>
                <p>
                    첫 구매 고객 15% 할인 <span>-7,200원</span>
                </p>
                <p>
                    공식몰 상시 5% 할인 혜택 <span>-2,040원</span>
                </p>
                <div className="button-wrap">
                    <p>
                        <button>총 {totalQuantity}개</button>
                    </p>
                    <p>
                        <button>{formatPrice(finalTotal)}원 주문하기</button>
                    </p>
                </div>
            </div>
        </PaymentWrapStyle>
    );
};

export default PaymentWrap;
