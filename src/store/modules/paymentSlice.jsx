// store/modules/paymentSlice.js
import { createSlice } from '@reduxjs/toolkit';

const load = (k, d) => JSON.parse(localStorage.getItem(k) || d);
const save = (k, v) => localStorage.setItem(k, JSON.stringify(v));

// 주문번호 생성 유틸: ORD-YYYYMMDD-HHmmss-XXXX
const pad = (n) => n.toString().padStart(2, '0');
const rand4 = () => Math.floor(1000 + Math.random() * 9000);
const makeOrderNo = () => {
    const d = new Date();
    const y = d.getFullYear();
    const m = pad(d.getMonth() + 1);
    const day = pad(d.getDate());
    const hh = pad(d.getHours());
    const mm = pad(d.getMinutes());
    const ss = pad(d.getSeconds());
    return `ORD-${y}${m}${day}-${hh}${mm}${ss}-${rand4()}`;
};

const initialState = {
    payments: load('payments', '[]'), // 과거 주문 목록
    guestLookup: load('guestLookup', 'null'),
};

export const paymentSlice = createSlice({
    name: 'payment',
    initialState,
    reducers: {
        // payload: 아래 PaymentWrap에서 만드는 객체 구조
        onPay: (state, action) => {
            const orderNo = makeOrderNo();
            const payment = {
                orderNo,
                status: 'PAID', // 초기 상태
                createdAt: new Date().toISOString(),
                ...action.payload, // orderer, address, memo, paymentMethod, items, summary, userId 등
            };
            state.payments = [...state.payments, payment];
            save('payments', state.payments);
        },
        setGuestLookup: (state, action) => {
            const { orderNo, name } = action.payload || {};
            state.guestLookup = {
                orderNo: (orderNo || '').trim(),
                name: (name || '').trim(),
            };
            save('guestLookup', state.guestLookup);
        },

        clearGuestLookup: (state) => {
            state.guestLookup = null;
            save('guestLookup', state.guestLookup);
        },
    },
});

export const paymentActions = paymentSlice.actions;

// 주문번호로 조회하는 선택자(컴포넌트에서 사용)
export const selectPaymentByOrderNo = (state, orderNo) =>
    state.payment.payments.find((p) => p.orderNo === orderNo);
export const selectPaymentByGuest = (state) => {
    const gl = state.payment.guestLookup;
    if (!gl?.orderNo) return null;
    const pay = state.payment.payments.find((p) => p.orderNo === gl.orderNo);
    if (!pay) return null;

    // 이름 체크(대소문자/공백 무시). 필요 없으면 항상 true로 바꿔도 됨
    const payName = (pay.orderer?.name || '').trim().toLowerCase();
    const lookupName = (gl.name || '').trim().toLowerCase();
    const nameOk = !lookupName || payName === lookupName;

    return nameOk ? pay : null;
};
// store/modules/paymentSlice.js

// 샘플 판별 유틸(선택자에서도 재사용)
const isSampleItem = (it) => {
    const id = it?.id;
    if (typeof id !== 'string') return false;
    if (!id.startsWith('sample-')) return false;
    const n = Number(id.replace('sample-', ''));
    return n >= 1000 && n <= 1002;
  };
  
  // 로그인 유저 이름으로 결제건 가져오되, 샘플 제외한 아이템만 남겨서 반환
  export const selectDisplayableRowsByUser = (state, userName) => {
    const name = (userName || '').trim().toLowerCase();
    if (!name) return [];
  
    const payments = state.payment.payments.filter(
      (p) => (p?.orderer?.name || '').trim().toLowerCase() === name
    );
  
    // 결제건들을 화면 행으로 평탄화(샘플 제외)
    const statusMap = { PAID:'결제완료', READY:'상품준비중', SHIPPED:'배송중', DELIVERED:'배송완료', CANCELLED:'취소', REFUNDED:'환불완료' };
  
    const toRows = (payment) => {
      const status = statusMap[payment.status] || payment.status || '결제완료';
      const number = payment.orderNo;
      const items = Array.isArray(payment.items) ? payment.items : [];
      const rows = items
        .filter((it) => !isSampleItem(it))
        .map((it, i) => ({
          id: `${number}-${i}`,
          status,
          title: it?.title || it?.name || '(상품명)',
          number,
          price: it?._selectedOption?.price ?? it?.option?.price ?? it?.price ?? it?.summary?.total ?? 0,
          img:
            it?.image ||
            it?._selectedOption?.image ||
            (typeof it?.id === 'number' ? `/images/products/item${it.id}.webp` : '/images/products/item.png'),
        }));
      return rows;
    };
  
    return payments.flatMap(toRows);
  };
  

export default paymentSlice.reducer;
