import { createSlice } from '@reduxjs/toolkit';
import productData from '../../assets/api/productData';

const initialState = {
    products: localStorage.getItem('products')
        ? JSON.parse(localStorage.getItem('products'))
        : productData,
    carts: localStorage.getItem('carts')
        ? JSON.parse(localStorage.getItem('carts')).map((cart) => ({
              ...cart,
              isChecked: cart.isChecked !== undefined ? cart.isChecked : true,
          }))
        : [],
    priceTotal: 0,
    quantityTotal: 0,
    isChecked: true,
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
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
        removeCart: (state, action) => {
            state.carts = state.carts.filter((cart) => cart.id !== action.payload);
            localStorage.setItem('carts', JSON.stringify(state.carts));
        },
        emptyCart: (state) => {
            state.carts = [];
            localStorage.setItem('carts', JSON.stringify(state.carts));
        },
        increaseQuantity: (state, action) => {
            const cart = state.carts.find((cart) => cart.id === action.payload);
            if (cart) {
                cart.quantity++;
                if (cart.option?.[0]) cart.itemTotal = Number(cart.option[0].price) * cart.quantity;
            }
            localStorage.setItem('carts', JSON.stringify(state.carts));
        },
        decreaseQuantity: (state, action) => {
            const cart = state.carts.find((cart) => cart.id === action.payload);
            if (cart && cart.quantity > 1) cart.quantity--;
            if (cart?.option?.[0]) cart.itemTotal = Number(cart.option[0].price) * cart.quantity;
            localStorage.setItem('carts', JSON.stringify(state.carts));
        },
        checkAll: (state, action) => {
            state.isChecked = action.payload;
            state.carts = state.carts.map((cart) => ({ ...cart, isChecked: action.payload }));
            localStorage.setItem('carts', JSON.stringify(state.carts));
        },
        checkSelected: (state, action) => {
            const cart = state.carts.find((cart) => cart.id === action.payload);
            if (cart) cart.isChecked = !cart.isChecked;
            state.isChecked = state.carts.length > 0 && state.carts.every((cart) => cart.isChecked);
            localStorage.setItem('carts', JSON.stringify(state.carts));
        },

        removeSelected: (state) => {
            // isChecked가 true인 항목만 삭제
            state.carts = state.carts.filter((cart) => !cart.isChecked);

            // 로컬스토리지 갱신
            localStorage.setItem('carts', JSON.stringify(state.carts));

            // 총계 재계산
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

            // 전체 체크 상태 재계산
            state.isChecked = state.carts.length > 0 && state.carts.every((cart) => cart.isChecked);
        },

        totalCart: (state) => {
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
        },
    },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
