import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    wishes: localStorage.getItem('wishes') ? JSON.parse(localStorage.getItem('wishes')) : [],
};

export const wishSlice = createSlice({
    name: 'wish',
    initialState,
    reducers: {
        addWish: (state, action) => {
            const product = action.payload;
            const existingItem = state.wishes.find((item) => item.id === product.id);

            if (!existingItem) {
                state.wishes.push(product);
                localStorage.setItem('wishes', JSON.stringify(state.wishes));
            }
        },

        removeWish: (state, action) => {
            const productId = action.payload;
            state.wishes = state.wishes.filter((item) => item.id !== productId);
            localStorage.setItem('wishes', JSON.stringify(state.wishes));
        },

        toggleWish: (state, action) => {
            const product = action.payload;
            const existingItemIndex = state.wishes.findIndex((item) => item.id === product.id);

            if (existingItemIndex >= 0) {
                // 이미 있으면 제거
                state.wishes.splice(existingItemIndex, 1);
            } else {
                // 없으면 추가
                state.wishes.push(product);
            }
            localStorage.setItem('wishes', JSON.stringify(state.wishes));
        },

        clearWish: (state) => {
            state.wishes = [];
            localStorage.setItem('wishes', JSON.stringify(state.wishes));
        },

        //위시리스트 내에서 체크 선택/해제
        toggleCheck: (state, action) => {
            const id = action.payload;
            const item = state.wishes.find((wish) => wish.id === id);
            if (item) {
                item.isChecked = !item.isChecked;
            }
            localStorage.setItem('wishes', JSON.stringify(state.wishes));
        },
    },
});

export const wishActions = wishSlice.actions;
export default wishSlice.reducer;
