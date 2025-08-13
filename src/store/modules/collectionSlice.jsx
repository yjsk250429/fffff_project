import { createSlice } from '@reduxjs/toolkit';
// import productData from '../../assets/api/productData';

const initialState = {
    // products: productData,
    collection: localStorage.getItem('collection')
        ? JSON.parse(localStorage.getItem('collection'))
        : [],
};

export const collectionSlice = createSlice({
    name: 'collection',
    initialState,
    reducers: {
        xx: (state, action) => {},
    },
});

export const collectionActions = collectionSlice.actions;
export default collectionSlice.reducer;
