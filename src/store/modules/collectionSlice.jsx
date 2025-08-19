import { createSlice } from '@reduxjs/toolkit';
import collectionData from '../../assets/api/collectionData';
import productData from '../../assets/api/productData';

const initialState = {
    products: productData,
    collections: collectionData, // 전체 데이터
    selectedId: collectionData[0]?.id || null, // 기본 선택
    showProducts: false,
};

export const collectionSlice = createSlice({
    name: 'collection',
    initialState,
    reducers: {
        selectCollection: (state, action) => {
            state.selectedId = action.payload;
            state.showProducts = false; // 컬렉션 변경시 제품 목록 숨김
        },
        toggleProducts: (state) => {
            state.showProducts = !state.showProducts;
        },
        showProducts: (state) => {
            state.showProducts = true;
        },
    },
});

export const collectionActions = collectionSlice.actions;
export default collectionSlice.reducer;
