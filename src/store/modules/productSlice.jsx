import { createSlice } from '@reduxjs/toolkit';
import productData from '../../assets/api/productData';

const initialState = {
    products: productData,
};

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        xx: (state, action) => {
        },
    },
});

export const productActions = productSlice.actions;
export default productSlice.reducer;
