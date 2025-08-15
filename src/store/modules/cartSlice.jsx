import { createSlice } from '@reduxjs/toolkit';
import productData from '../../assets/api/productData';

const initialState = { 
    products: productData,
    carts: localStorage.getItem('carts') ? JSON.parse(localStorage.getItem('carts')) : [],
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        xx:(state, action)=>{      
        },      
    },

});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
