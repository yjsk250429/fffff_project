import { createSlice } from '@reduxjs/toolkit';
import giftsData from '../../assets/api/giftData';

const giftSlice = createSlice({
    name: 'gift',
    initialState: {
        list: giftsData,
        activeId: giftsData[0]?.id || 1,
    },
    reducers: {
        setActiveId: (state, action) => {
            state.activeId = action.payload;
        },
    },
});

export const { setActiveId } = giftSlice.actions;
export default giftSlice.reducer;
