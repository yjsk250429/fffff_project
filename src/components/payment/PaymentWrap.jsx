import { useDispatch, useSelector } from 'react-redux';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { PaymentWrapStyle } from './style';
import PaymentProductItem from './PaymentProductItem';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import React from 'react';
import { paymentActions } from '../../store/modules/paymentSlice';

const PaymentWrap = () => {
    const { carts, priceTotal } = useSelector((state) => state.cart);
    const { user, authed } = useSelector((state) => state.auth);
    const [first, setFirst] = useState('');
    const [middle, setMiddle] = useState('');
    const [last, setLast] = useState('');
    const dispatch = useDispatch();

    const changeInput = (e) => {
        const { value, name } = e.target;

        // 숫자만 입력 허용
        const numericValue = value.replace(/[^0-9]/g, '');

        if (name === 'tel.first') {
            setFirst(numericValue);
            // 3자리 입력 시 다음 필드로 포커스 이동
            if (numericValue.length === 3) {
                setTimeout(() => {
                    document.getElementsByName('tel.middle')[0]?.focus();
                }, 0);
            }
        } else if (name === 'tel.middle') {
            setMiddle(numericValue);
            // 4자리 입력 시 다음 필드로 포커스 이동
            if (numericValue.length === 4) {
                setTimeout(() => {
                    document.getElementsByName('tel.last')[0]?.focus();
                }, 0);
            }
        } else if (name === 'tel.last') {
            setLast(numericValue);
        }
    };
    // 비회원 주문
    const name = user?.name || '';
    const tel = user?.tel || '';
    const addr1 = user?.addr?.zipCode || user?.addr1 || ''; // 우편번호
    const addr2 = user?.addr?.mainAddr || user?.addr2 || ''; // 기본주소
    const addr3 = user?.addr?.detailAddr || user?.addr3 || ''; // 상세주소

    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(true);

    // 체크박스 상태
    const [isSameAsOrderer, setIsSameAsOrderer] = useState(false);
    const [isSameAsAddress, setIsSameAsAddress] = useState(false);

    const onBack = () => {
        navigate(-1);
    };

    // 아코디언 토글
    const toggleOpen = () => setIsOpen((prev) => !prev);

    const checkedCarts = carts.filter((cart) => cart.isChecked);
    const totalQuantity = checkedCarts.reduce((sum, cart) => sum + (cart.quantity || 0), 0);
    const shippingFee = priceTotal > 0 && priceTotal < 50000 ? 3000 : 0;
    const discountAmount = 0;
    const finalTotal = priceTotal + shippingFee - discountAmount;

    const formatPrice = (price) => price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

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
            document.getElementsByName('name')[0].value = name;
            // tel이 객체 형태인지 문자열 형태인지 확인
            if (typeof user.tel === 'object' && user.tel.first) {
                setFirst(user.tel.first);
                setMiddle(user.tel.middle);
                setLast(user.tel.last);
            } else if (typeof user.tel === 'string') {
                const telParts = user.tel.split('-');
                if (telParts.length === 3) {
                    setFirst(telParts[0]);
                    setMiddle(telParts[1]);
                    setLast(telParts[2]);
                }
            }
        } else {
            document.getElementsByName('name')[0].value = '';
            setFirst('');
            setMiddle('');
            setLast('');
        }
    };

    // 가입 주소와 동일 체크박스 핸들러
    const handleSameAsAddress = (e) => {
        const checked = e.target.checked;
        setIsSameAsAddress(checked);

        if (checked && authed && user) {
            // addr이 객체 형태인지 확인
            if (typeof user.addr === 'object') {
                document.getElementsByName('zipCode')[0].value = user.addr.zipCode || '';
                document.getElementsByName('mainAddr')[0].value = user.addr.mainAddr || '';
                document.getElementsByName('detailAddr')[0].value = user.addr.detailAddr || '';
            } else {
                // 기존 방식 (addr1, addr2, addr3)
                document.getElementsByName('zipCode')[0].value = user.addr1 || '';
                document.getElementsByName('mainAddr')[0].value = user.addr2 || '';
                document.getElementsByName('detailAddr')[0].value = user.addr3 || '';
            }
        } else {
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
                setIsSameAsAddress(false);
            },
        }).open();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const fd = new FormData(e.currentTarget);
        const data = Object.fromEntries(fd.entries());

        // payload 구성
        const payload = {
            orderer: {
                name: data.name || '',
                tel: `${first}-${middle}-${last}`, // 3개 필드를 합쳐서 전송
            },
            address: {
                zipCode: data.zipCode || '',
                mainAddr: data.mainAddr || '',
                detailAddr: data.detailAddr || '',
            },
            memo: data.memo || '',
            paymentMethod: data.paymentMethod || 'creditCard',
            userId: authed && user ? user.id : null, // 비회원이면 null

            // 장바구니 스냅샷(필요한 필드만 보관 권장)
            items: checkedCarts.map((c) => ({
                id: c.id,
                title: c.title,
                quantity: c.quantity,
                option: c?.option?.[0]
                    ? { name: c.option[0].name, price: Number(c.option[0].price) }
                    : null,
                itemTotal: c?.option?.[0] ? Number(c.option[0].price) * c.quantity : 0,
                // 썸네일, sku 등 조회용 추가 가능
            })),

            summary: {
                productTotal: priceTotal,
                shippingFee,
                discountAmount,
                finalTotal,
                quantity: totalQuantity,
            },
        };

        dispatch(paymentActions.onPay(payload));

        // (선택) 결제 완료 후 체크된 항목만 장바구니에서 제거하고 싶다면 cartSlice에 clearChecked 추가하여 디스패치
        // dispatch(cartActions.clearChecked());

        // 완료 페이지로 이동
        // 주문번호를 확인 페이지에서 쓰고 싶다면 URL 파라미터/쿼리로 넘기는 방식 추천:
        // ex) navigate(`/cart/paycomplete?ts=${Date.now()}`)
        navigate('/cart/paycomplete');
    };

    return (
        <PaymentWrapStyle>
            <div className="payment-left">
                <form id="paymentForm" onSubmit={handleSubmit}>
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
                                    <p className="tel-wrap">
                                        <input
                                            type="text"
                                            name="tel.first"
                                            value={first}
                                            onChange={changeInput}
                                            placeholder="010"
                                            maxLength={3}
                                            style={{ width: '60px', textAlign: 'center' }}
                                        />
                                        <input
                                            type="text"
                                            name="tel.middle"
                                            value={middle}
                                            onChange={changeInput}
                                            placeholder="0000"
                                            maxLength={4}
                                            style={{ width: '100px', textAlign: 'center' }}
                                        />
                                        <input
                                            type="text"
                                            name="tel.last"
                                            value={last}
                                            onChange={changeInput}
                                            placeholder="0000"
                                            maxLength={4}
                                            style={{ width: '100px', textAlign: 'center' }}
                                        />
                                    </p>
                                    <p>
                                        <input
                                            type="checkbox"
                                            checked={isSameAsOrderer}
                                            onChange={handleSameAsOrderer}
                                            disabled={!authed}
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
                                        <button type="button" onClick={handleAddressSearch}>
                                            주소 검색
                                        </button>
                                    </p>
                                    <p>
                                        <input type="text" name="mainAddr" placeholder="기본주소" />
                                    </p>
                                    <p>
                                        <input
                                            type="text"
                                            name="detailAddr"
                                            placeholder="상세주소"
                                        />
                                    </p>
                                    <p>
                                        <input
                                            type="checkbox"
                                            checked={isSameAsAddress}
                                            onChange={handleSameAsAddress}
                                            disabled={!authed}
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
                                        name="memo"
                                        style={{
                                            paddingLeft: '10px',
                                            paddingRight: '10px',
                                            fontWeight: 500,
                                            color: '#A8A8A8',
                                        }}
                                    >
                                        <option value="">배송 메모를 선택해주세요.</option>
                                        <option>배송 전에 연락 주세요.</option>
                                        <option>부재 시 문 앞에 놓아주세요.</option>
                                        <option>파손 위험이 있으니 조심히 다뤄주세요.</option>
                                        <option>
                                            문 앞에 놓을 공간이 없으면 경비실에 맡겨주세요.
                                        </option>
                                    </select>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
                {/* 주문상품 아코디언 */}
                <div className="payment-items">
                    <p className="title products" onClick={toggleOpen}>
                        주문상품 (총 {totalQuantity}개)
                        <motion.i
                            animate={{ rotate: isOpen ? 180 : 0 }}
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
                                {checkedCarts.map((product) => (
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
                        <button type="button">쿠폰 적용</button>
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
                        <button type="submit" form="paymentForm">
                            {formatPrice(finalTotal)}원 주문하기
                        </button>
                    </p>
                </div>
            </div>
        </PaymentWrapStyle>
    );
};

export default PaymentWrap;
