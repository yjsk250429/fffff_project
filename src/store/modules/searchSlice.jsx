// store/modules/searchSlice.js
import { createSlice } from '@reduxjs/toolkit';
import productData from '../../assets/api/productData';
const normalize = (v) => (v ?? '').toString().toLowerCase();
const initialState = {
    keyword:'',
    results: [],
};

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setKeyword: (state, action) => {
            state.keyword = action.payload;
        },
        onSearch: (state, action) => {
            const q = normalize(action.payload).trim();

            if (!q) {
                state.results = []; // ← 검색어 없으면 빈 배열
                return;
            }

            const filtered = productData.filter((p) => {
                const cat = normalize(p.category);
                const type = Array.isArray(p.type)
                    ? p.type.map(normalize).join(' ')
                    : normalize(p.type);
                const title = normalize(p.title);

                return cat.includes(q) || type.includes(q) || title.includes(q);
            });

            state.results = filtered; // ← 덮어쓰기
        },
    },
});

export const searchActions = searchSlice.actions;
export default searchSlice.reducer;
