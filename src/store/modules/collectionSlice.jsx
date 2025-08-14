/*
import { createSlice } from '@reduxjs/toolkit';
// import productData from '../../assets/api/productData';

const initialState = {
    products: productData,
    collections: localStorage.getItem('collections')
        ? JSON.parse(localStorage.getItem('collections'))
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
*/

import { createSlice } from '@reduxjs/toolkit';
import collectionData from '../../assets/api/collectionData';
import productData from '../../assets/api/productData';

const initialState = {
    products: localStorage.getItem('products')
        ? JSON.parse(localStorage.getItem('products'))
        : productData,
    collections: localStorage.getItem('collections')
        ? JSON.parse(localStorage.getItem('collections'))
        : collectionData, // 전체 데이터
    selectedId: collectionData[0]?.id || null, // 기본 선택
};

export const collectionSlice = createSlice({
    name: 'collection',
    initialState,
    reducers: {
        selectCollection: (state, action) => {
            state.selectedId = action.payload; // 클릭한 id로 변경
        },
    },
});

export const collectionActions = collectionSlice.actions;
export default collectionSlice.reducer;
