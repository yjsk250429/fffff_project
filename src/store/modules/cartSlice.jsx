import { createSlice } from '@reduxjs/toolkit';
import productData from '../../assets/api/productData';

// 로컬스토리지에서 carts 불러오기
const storedCarts = (() => {
    const raw = localStorage.getItem('carts');
    if (!raw) return [];
    try {
        const arr = JSON.parse(raw);
        // 로컬에 저장되어 있던 isChecked 값을 그대로 존중(없으면 false)
        return Array.isArray(arr) ? arr.map((c) => ({ ...c, isChecked: !!c.isChecked })) : [];
    } catch {
        return [];
    }
})();

const initialState = {
    products: localStorage.getItem('products')
        ? JSON.parse(localStorage.getItem('products'))
        : productData,
    carts: storedCarts,
    priceTotal: 0, // 선택된 항목 총 가격
    quantityTotal: 0, // 선택된 항목 총 수량
    // 전체 체크 상태: 샘플 제외하고 모두 체크된 경우만 true
    isChecked: false,
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        // 장바구니에 상품 추가
        addCart: (state, action) => {
            const id = action.payload.id;
            const cart = state.carts.find((cart) => cart.id === id);
            if (cart) {
                cart.quantity+=1;
                if (cart.option?.[0]) cart.itemTotal = Number(cart.option[0].price) * cart.quantity;
            } else {
                state.carts.push({ ...action.payload, quantity: 1, isChecked: false });
            }
            localStorage.setItem('carts', JSON.stringify(state.carts));
        },
        // 특정 항목 제거
        removeCart: (state, action) => {
            state.carts = state.carts.filter((cart) => cart.id !== action.payload);
            localStorage.setItem('carts', JSON.stringify(state.carts));
        },
        // 장바구니 비우기
        emptyCart: (state) => {
            state.carts = [];
            localStorage.setItem('carts', JSON.stringify(state.carts));
        },
        // 수량 증가
        increaseQuantity: (state, action) => {
            const cart = state.carts.find((cart) => cart.id === action.payload);
            if (cart) {
                cart.quantity+=1;
                if (cart.option?.[0]) cart.itemTotal = Number(cart.option[0].price) * cart.quantity;
            }
            localStorage.setItem('carts', JSON.stringify(state.carts));
        },
        // 수량 감소
        decreaseQuantity: (state, action) => {
            const cart = state.carts.find((cart) => cart.id === action.payload);
            if (cart && cart.quantity > 1) cart.quantity--;
            if (cart?.option?.[0]) cart.itemTotal = Number(cart.option[0].price) * cart.quantity;
            localStorage.setItem('carts', JSON.stringify(state.carts));
        },
        // 전체 체크/언체크
        checkAll: (state, action) => {
            state.isChecked = action.payload; // 전체 체크 상태 갱신
            // 샘플 제외하고 개별 항목 체크 상태 동기화
            state.carts = state.carts.map((cart) =>
                cart.isSample ? cart : { ...cart, isChecked: action.payload }
            );
            localStorage.setItem('carts', JSON.stringify(state.carts));
        },
        // 특정 항목 체크/언체크 토글
        checkSelected: (state, action) => {
            const cart = state.carts.find((c) => c.id === action.payload);
            if (cart) cart.isChecked = !cart.isChecked;
            // 전체 체크 상태 자동 갱신 (샘플 제외)
            state.isChecked = state.carts.filter((c) => !c.isSample).every((c) => c.isChecked);
            localStorage.setItem('carts', JSON.stringify(state.carts));
        },
        // 선택된 항목 삭제
        removeSelected: (state) => {
            state.carts = state.carts.filter((cart) => !cart.isChecked);
            localStorage.setItem('carts', JSON.stringify(state.carts));
          
            const checkedCarts = state.carts.filter((cart) => cart.isChecked && !cart.isSample);
          
            const { price, qty } = checkedCarts.reduce((acc, c) => {
              const priceNum = Number(Array.isArray(c?.option) ? c.option?.[0]?.price : c?.option?.price) || 0;
              const q = Number(c?.quantity) || 0;
              acc.price += priceNum * q;
              acc.qty += q;
              return acc;
            }, { price: 0, qty: 0 });
          
            state.priceTotal = price;
            state.quantityTotal = qty;
          
            state.isChecked = state.carts.filter((c) => !c.isSample).every((c) => c.isChecked);
          },
        // 총 가격 및 수량 계산
        totalCart: (state) => {
            const checked = Array.isArray(state.carts) ? state.carts.filter((c) => c?.isChecked && !c?.isSample) : [];
            const { price, qty } = checked.reduce((acc, c) => {
              const priceNum = Number(Array.isArray(c?.option) ? c.option?.[0]?.price : c?.option?.price) || 0;
              const q = Number(c?.quantity) || 0;
              acc.price += priceNum * q; // ✅ 누적
              acc.qty += q;              // ✅ 누적
              return acc;
            }, { price: 0, qty: 0 });
            state.priceTotal = price;
            state.quantityTotal = qty;
          },
        // 샘플 항목 추가
        addSampleCart: (state, action) => {
            const exists = state.carts.find((c) => c.id === action.payload.id);
            if (exists) {
                exists.isChecked = true; // 이미 존재하면 체크 상태만 갱신
            } else {
                state.carts.push(action.payload);
            }
        },
        // 샘플 체크박스 토글
        toggleSample: (state, action) => {
            const cart = state.carts.find((c) => c.id === action.payload);
            if (!cart) return;

            if (cart.isChecked) {
                // 해제 → 배열에서 제거
                state.carts = state.carts.filter((c) => c.id !== action.payload);
            } else {
                // 체크 → 상태만 갱신
                cart.isChecked = true;
            }

            localStorage.setItem('carts', JSON.stringify(state.carts));
        },
        // 선택된 항목만 제거
        clearChecked: (state) => {
            state.carts = state.carts.filter((cart) => !cart.isChecked);
            localStorage.setItem('carts', JSON.stringify(state.carts));

            // 총합 초기화
            const { price, qty } = state.carts.reduce(
                (acc, c) => {
                    const priceNum =
                        Number(
                            Array.isArray(c?.option) ? c?.option?.[0]?.price : c?.option?.price
                        ) || 0;
                    const quantity = Number(c?.quantity) || 0;
                    acc.price = priceNum * quantity;
                    acc.qty = quantity;
                    return acc;
                },
                { price: 0, qty: 0 }
            );
            state.priceTotal = price;
            state.quantityTotal = qty;

            // 전체 체크상태 갱신(샘플 제외)
            state.isChecked = state.carts.filter((c) => !c.isSample).every((c) => c.isChecked);
        },
        buyNow: (state, action) => {
            const id = action.payload.id;
            const selectedOption = action.payload.option?.[0] || {};

            // 전체 체크 해제
            const newCarts = state.carts.map((cart) => ({
                ...cart,
                isChecked: false,
            }));

            const existsIndex = newCarts.findIndex((cart) => cart.id === id);

            const newItem = {
                ...action.payload,
                quantity: 1,
                isChecked: true,
                _selectedOption: selectedOption,
                option: [selectedOption], // 일관성
            };

            if (existsIndex >= 0) {
                newCarts[existsIndex] = newItem;
            } else {
                newCarts.push(newItem);
            }

            state.carts = newCarts;
            localStorage.setItem('carts', JSON.stringify(state.carts));
            console.log('[buyNow]', newCarts);
        },
    },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
