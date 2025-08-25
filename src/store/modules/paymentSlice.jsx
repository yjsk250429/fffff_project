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
        // ✅ payload에 들어온 상품 항목을 정제하여 저장
        onPay: (state, action) => {
            const orderNo = makeOrderNo();
            const payment = {
                orderNo,
                status: 'PAID',
                createdAt: new Date().toISOString(),
                ...action.payload,
                items: (action.payload.items || []).map((item) => {
                    const selectedOpt = item._selectedOption || item.option || {};
                    return {
                        id: item.id,
                        title: item.title || item.name || '(상품명)',
                        quantity: item.quantity || 1,
                        option: {
                            name: selectedOpt.name || '',
                            price: Number(selectedOpt.price) || 0,
                        },
                        _selectedOption: selectedOpt,
                        itemTotal: Number(selectedOpt.price || 0) * (item.quantity || 1),
                        image:
                            selectedOpt.image ||
                            item.image ||
                            (typeof item.id === 'number'
                                ? `/images/products/item${item.id}.webp`
                                : ''),
                    };
                }),
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

// 주문번호로 조회하는 선택자
export const selectPaymentByOrderNo = (state, orderNo) =>
    state.payment.payments.find((p) => p.orderNo === orderNo);

export const selectPaymentByGuest = (state) => {
    const gl = state.payment.guestLookup;
    if (!gl?.orderNo) return null;
    const pay = state.payment.payments.find((p) => p.orderNo === gl.orderNo);
    if (!pay) return null;

    const payName = (pay.orderer?.name || '').trim().toLowerCase();
    const lookupName = (gl.name || '').trim().toLowerCase();
    const nameOk = !lookupName || payName === lookupName;

    return nameOk ? pay : null;
};

// 샘플 상품 여부 확인 유틸
const isSampleItem = (it) => {
    const id = it?.id;
    if (typeof id !== 'string') return false;
    if (!id.startsWith('sample-')) return false;
    const n = Number(id.replace('sample-', ''));
    return n >= 1000 && n <= 1002;
};

// 마이페이지용 주문 리스트 반환
export const selectDisplayableRowsByUser = (state, userName) => {
    const name = (userName || '').trim().toLowerCase();
    if (!name) return [];

    const payments = state.payment.payments.filter(
        (p) => (p?.orderer?.name || '').trim().toLowerCase() === name
    );

    const statusMap = {
        PAID: '결제완료',
        READY: '상품준비중',
        SHIPPED: '배송중',
        DELIVERED: '배송완료',
        CANCELLED: '취소',
        REFUNDED: '환불완료',
    };

    const toRows = (payment) => {
        const status = statusMap[payment.status] || payment.status || '결제완료';
        const number = payment.orderNo;
        const items = Array.isArray(payment.items) ? payment.items : [];

        return items
            .filter((it) => !isSampleItem(it))
            .map((it, i) => ({
                id: `${number}-${i}`,
                status,
                title: it?.title || it?.name || '(상품명)',
                number,
                price:
                    it?._selectedOption?.price ??
                    it?.option?.price ??
                    it?.price ??
                    it?.summary?.total ??
                    0,
                img:
                    it?.image ||
                    it?._selectedOption?.image ||
                    (typeof it?.id === 'number' ? `/images/products/item${it.id}.webp` : ''),
            }));
    };

    return payments.flatMap(toRows);
};

export default paymentSlice.reducer;
