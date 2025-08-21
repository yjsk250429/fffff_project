import { useSelector } from 'react-redux';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { PaymentWrapStyle } from './style';
import PaymentProductItem from './PaymentProductItem';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import React from 'react';

const PaymentWrap = () => {
    const { carts, priceTotal } = useSelector((state) => state.cart);
    const { user, authed } = useSelector((state) => state.auth); // 로그인 정보 추가
    const {} = user;
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(true); // 아코디언 상태

    // 체크박스 상태
    const [isSameAsOrderer, setIsSameAsOrderer] = useState(false);
    const [isSameAsAddress, setIsSameAsAddress] = useState(false);

    const onBack = () => {
        navigate(-1);
    };
    const onComplete = () => {
        navigate(`/cart/paycomplete`);
    };

    // 아코디언 토글
    const toggleOpen = () => setIsOpen((prev) => !prev);

    const allProducts = carts;
    const checkedCarts = carts.filter((cart) => cart.isChecked);
    const totalQuantity = checkedCarts.reduce((sum, cart) => sum + (cart.quantity || 0), 0);
    const shippingFee = priceTotal > 0 && priceTotal < 50000 ? 3000 : 0;
    const discountAmount = 0;
    const finalTotal = priceTotal + shippingFee - discountAmount;

    const formatPrice = (price) => price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    // 체크된 상품들 (샘플 포함)

    // Daum API 스크립트 동적 로드
    useEffect(() => {
        if (!window.daum) {
            const script = document.createElement('script');
            script.src = 'https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';
            script.async = true;
            document.body.appendChild(script);
        }
    }, []);

    // 주문자와 동일 체크박스 핸들러
    const handleSameAsOrderer = (e) => {
        const checked = e.target.checked;
        setIsSameAsOrderer(checked);

        if (checked && authed && user) {
            // 로그인 정보로 자동 입력
            document.getElementsByName('name')[0].value = user.name || '';
            document.getElementsByName('tel')[0].value = user.tel || '';
        } else {
            // 체크 해제 시 입력값 초기화
            document.getElementsByName('name')[0].value = '';
            document.getElementsByName('tel')[0].value = '';
        }
    };

    // 가입 주소와 동일 체크박스 핸들러
    const handleSameAsAddress = (e) => {
        const checked = e.target.checked;
        setIsSameAsAddress(checked);

        if (checked && authed && user) {
            // 로그인 주소 정보로 자동 입력
            document.getElementsByName('zipCode')[0].value = user.zipCode || ''; // 우편번호
            document.getElementsByName('mainAddr')[0].value = user.mainAddr || ''; // 기본주소
            document.getElementsByName('detailAddr')[0].value = user.detailAddr || ''; // 상세주소
        } else {
            // 체크 해제 시 입력값 초기화
            document.getElementsByName('zipCode')[0].value = '';
            document.getElementsByName('mainAddr')[0].value = '';
            document.getElementsByName('detailAddr')[0].value = '';
        }
    };

    // 주소 검색 핸들러
    const handleAddressSearch = () => {
        if (!window.daum) {
            alert('주소검색 API 로드 중입니다. 잠시 후 다시 시도해주세요.');
            return;
        }

        new window.daum.Postcode({
            oncomplete: (data) => {
                document.getElementsByName('zipCode')[0].value = data.zonecode;
                document.getElementsByName('mainAddr')[0].value =
                    data.roadAddress || data.jibunAddress;
                // 주소 검색 시 체크박스 해제
                setIsSameAsAddress(false);
            },
        }).open();
    };

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
                                    <input
                                        type="checkbox"
                                        checked={isSameAsOrderer}
                                        onChange={handleSameAsOrderer}
                                        disabled={!authed} // 로그인 안 되어 있으면 비활성화
                                    />
                                    <label>주문자와 동일</label>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>주소</td>
                            <td className="inline-input">
                                <p>
                                    <input type="text" name="zipCode" placeholder="우편번호" />
                                    <button onClick={handleAddressSearch}>주소 검색</button>
                                </p>
                                <p>
                                    <input type="text" name="mainAddr" placeholder="기본주소" />
                                </p>
                                <p>
                                    <input type="text" name="detailAddr" placeholder="상세주소" />
                                </p>
                                <p>
                                    <input
                                        type="checkbox"
                                        checked={isSameAsAddress}
                                        onChange={handleSameAsAddress}
                                        disabled={!authed} // 로그인 안 되어 있으면 비활성화
                                    />
                                    <label>가입 주소와 동일</label>
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

                {/* 주문상품 아코디언 */}
                <div className="payment-items">
                    <p className="title products" onClick={toggleOpen}>
                        주문상품 (총 {totalQuantity}개)
                        <motion.i
                            animate={{ rotate: isOpen ? 180 : 0 }} // 열릴 때 회전
                            transition={{ duration: 0.3 }}
                        >
                            <MdKeyboardArrowDown />
                        </motion.i>
                    </p>

                    <AnimatePresence>
                        {isOpen && (
                            <motion.ul
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                {allProducts.map((product) => (
                                    <PaymentProductItem key={product.id} product={product} />
                                ))}
                            </motion.ul>
                        )}
                    </AnimatePresence>
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

            {/* 결제 요약 */}
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
                        <button onClick={onBack}>취소</button>
                    </p>
                    <p>
                        <button onClick={onComplete}>{formatPrice(finalTotal)}원 주문하기</button>
                    </p>
                </div>
            </div>
        </PaymentWrapStyle>
    );
};

export default PaymentWrap;
