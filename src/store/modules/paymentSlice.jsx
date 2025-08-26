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
        cancelOrderItem: (state, action) => {
            const { orderNo, itemIndex } = action.payload || {};
            if (!orderNo || typeof itemIndex !== 'number') return;
      
            const idx = state.payments.findIndex((p) => p.orderNo === orderNo);
            if (idx === -1) return;
      
            const pay = state.payments[idx];
            // 결제완료(PAID) 상태에서만 취소하기 시연
            if (pay.status !== 'PAID') return;
      
            const items = Array.isArray(pay.items) ? [...pay.items] : [];
            if (itemIndex < 0 || itemIndex >= items.length) return;
      
            items.splice(itemIndex, 1);
      
            if (items.length === 0) {
              // 아이템이 모두 없어지면 전체 주문 삭제
              state.payments.splice(idx, 1);
            } else {
              state.payments[idx] = { ...pay, items };
            }
            save('payments', state.payments);
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
                itemIndex:i,
            }));
    };
    const liveRows = payments.flatMap(toRows);
    const deliveredMock = [
        {
          id: 'MOCK-DELIV-1',
          status: '배송완료',
          title: '볼륨 & 스트렝스 스트렝스닝 스칼프 세럼',
          number: 'ORD-20250801-120000-4444',
          price: 40000,
          img: '/images/products/item1.webp',
        },
        {
          id: 'MOCK-DELIV-2',
          status: '배송완료',
          title: '시어 버터 솝-밀크',
          number: 'ORD-20250802-130000-5555',
          price: 10000,
          img: '/images/products/item102.webp',
        },
        {
          id: 'MOCK-DELIV-3',
          status: '배송완료',
          title: '시어 클렌징 페이스 크림',
          number: 'ORD-20250803-140000-6666',
          price: 35000,
          img: '/images/products/item200.webp',
        },
      ];
      return [...liveRows, ...deliveredMock];
};

export default paymentSlice.reducer;
