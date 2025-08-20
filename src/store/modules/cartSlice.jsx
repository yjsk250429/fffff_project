import { createSlice } from '@reduxjs/toolkit';
import productData from '../../assets/api/productData';

// 로컬스토리지에서 carts 불러오기
const storedCarts = localStorage.getItem('carts')
    ? JSON.parse(localStorage.getItem('carts')).map((cart) => ({
          ...cart,
          isChecked: cart.isChecked !== undefined ? cart.isChecked : true, // 기존 체크 상태 유지, 없으면 true
      }))
    : [];

const initialState = {
    products: localStorage.getItem('products')
        ? JSON.parse(localStorage.getItem('products'))
        : productData,
    carts: storedCarts,
    priceTotal: 0, // 선택된 항목 총 가격
    quantityTotal: 0, // 선택된 항목 총 수량
    // 전체 체크 상태: 샘플 제외하고 모두 체크된 경우만 true
    isChecked: storedCarts.filter((c) => !c.isSample).every((c) => c.isChecked),
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
                cart.quantity++;
                if (cart.option?.[0]) cart.itemTotal = Number(cart.option[0].price) * cart.quantity;
            } else {
                state.carts.push({ ...action.payload, quantity: 1, isChecked: true });
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
                cart.quantity++;
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

            const checkedCarts = state.carts.filter((cart) => cart.isChecked);
            state.priceTotal = checkedCarts.reduce(
                (sum, cart) =>
                    sum + (Number(cart.option?.[0]?.price) || 0) * (Number(cart.quantity) || 0),
                0
            );
            state.quantityTotal = checkedCarts.reduce(
                (sum, cart) => sum + (Number(cart.quantity) || 0),
                0
            );

            state.isChecked = state.carts.filter((c) => !c.isSample).every((c) => c.isChecked);
        },
        // 총 가격 및 수량 계산
        totalCart: (state) => {
            const checkedCarts = state.carts.filter((cart) => cart.isChecked && !cart.isSample);
            state.priceTotal = checkedCarts.reduce(
                (sum, cart) =>
                    sum + (Number(cart.option?.[0]?.price) || 0) * (Number(cart.quantity) || 0),
                0
            );
            state.quantityTotal = checkedCarts.reduce(
                (sum, cart) => sum + (Number(cart.quantity) || 0),
                0
            );
        },
        // 샘플 항목 추가
        addSampleCart: (state, action) => {
            const sample = {
                id: `sample-${action.payload.id}`,
                title: action.payload.title,
                option: [{ id: 'sample-option', size: 1, price: 0 }],
                quantity: 1,
                isChecked: true,
                isSample: true,
                sampleImg: action.payload.sampleImg,
            };
            state.carts.push(sample);
            localStorage.setItem('carts', JSON.stringify(state.carts));
        },
        // 샘플 체크박스 토글
        toggleSample: (state, action) => {
            const cart = state.carts.find((c) => c.id === action.payload);
            if (cart) cart.isChecked = !cart.isChecked;
            localStorage.setItem('carts', JSON.stringify(state.carts));
        },
    },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
