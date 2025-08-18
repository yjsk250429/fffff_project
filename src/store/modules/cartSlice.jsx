import { createSlice } from '@reduxjs/toolkit';
import productData from '../../assets/api/productData';

const initialState = {
    products: localStorage.getItem('products')
        ? JSON.parse(localStorage.getItem('products'))
        : productData,
    carts: localStorage.getItem('carts') ? JSON.parse(localStorage.getItem('carts')) : [],
    priceTotal: 500,
    quantityTotal: 10,
    isChecked: false,
};
let no = 1;

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        xx: (state, action) => {},

        addCart: (state, action) => {
            const id = action.payload.id;
            const item = state.carts.find((cart) => cart.id === id);
            if (item) {
                item.quantity++;
                if (item.option && item.option[0]) {
                    item.itemTotal = item.option[0].price * item.quantity;
                }
            } else {
                state.carts.push(action.payload);
            }
            localStorage.setItem('carts', JSON.stringify(state.carts));
        },

        removeCart: (state, action) => {
            const id = action.payload;
            state.carts = state.carts.filter((cart) => cart.id !== id);
            localStorage.setItem('carts', JSON.stringify(state.carts));
        },

        emptyCart: (state) => {
            state.carts = [];
            localStorage.setItem('carts', JSON.stringify(state.carts));
        },

        totalCart: (state, action) => {
            state.priceTotal = state.carts.reduce((acc, item) => {
                if (item.option && item.option[0]) {
                    return acc + item.option[0].price * item.quantity;
                }
                return acc;
            }, 0);
            state.quantityTotal = state.carts.reduce((acc, item) => acc + item.quantity, 0);
        },

        increaseQuantity: (state, action) => {
            const id = action.payload;
            const item = state.carts.find((cart) => cart.id === id);
            if (item) {
                item.quantity++;
                if (item.option && item.option[0]) {
                    item.itemTotal = item.option[0].price * item.quantity;
                }
            }
            localStorage.setItem('carts', JSON.stringify(state.carts));
        },

        decreaseQuantity: (state, action) => {
            const id = action.payload;
            const item = state.carts.find((cart) => cart.id === id);
            if (item && item.quantity > 1) {
                item.quantity--;
                if (item.option && item.option[0]) {
                    item.itemTotal = item.option[0].price * item.quantity;
                }
            } else if (item) {
                item.quantity = 1;
                if (item.option && item.option[0]) {
                    item.itemTotal = item.option[0].price * item.quantity;
                }
            }
            localStorage.setItem('carts', JSON.stringify(state.carts));
        },
        checkAll: (state, action) => {
            state.isChecked = action.payload;
            state.carts = state.carts.map((cart) => ({
                ...cart,
                checked: action.payload,
            }));
            localStorage.setItem('carts', JSON.stringify(state.carts));
        },

        checkSelected: (state, action) => {
            const id = action.payload;
            const item = state.carts.find((cart) => cart.id === id);
            if (item) {
                item.checked = !item.checked;
            }
            // filter로 전체 체크 여부 판단
            const checkedCount = state.carts.filter((cart) => cart.checked).length;
            state.isChecked = checkedCount === state.carts.length && state.carts.length > 0;
            localStorage.setItem('carts', JSON.stringify(state.carts));
        },
    },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
