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
        status: 'PAID',      // 초기 상태
        createdAt: new Date().toISOString(),
        ...action.payload,   // orderer, address, memo, paymentMethod, items, summary, userId 등
      };
      state.payments = [...state.payments, payment];
      save('payments', state.payments);
    },


}
});

export const paymentActions = paymentSlice.actions;

// 주문번호로 조회하는 선택자(컴포넌트에서 사용)
export const selectPaymentByOrderNo = (state, orderNo) =>
  state.payment.payments.find(p => p.orderNo === orderNo);

export default paymentSlice.reducer;
