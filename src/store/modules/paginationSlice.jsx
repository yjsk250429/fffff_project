import { createSlice } from '@reduxjs/toolkit';

const initialState = {   
    pageData: [], // 전체 데이터
    totalCount: 0, // 전체 데이터 수
    perPage: 12, // 페이지당 개수
    currentPage: 1, // 현재 페이지
    totalPages: 1, // 전체 페이지 수
};

export const paginationSlice = createSlice({
    name: 'pagination',
    initialState,
    reducers: {
        setData(state, action) {
            // state.pageData = action.payload; // notices, customers 같은 데이터를 넘겨줄것임
            state.pageData = [...action.payload].sort((a,b)=> b.id - a.id );
            state.totalCount = state.pageData.length;
            state.currentPage = 1;
            state.totalPages = Math.ceil(state.totalCount / state.perPage);
        },         
        nextPage(state) {
            if( state.currentPage < state.totalPages)
            state.currentPage++;
        },         
        prevPage(state) {
            if( state.currentPage > 1)
            state.currentPage--;
        },         
        goToPage(state, action) {
            // state.currentPage = action.payload;
            const num = action.payload;
            if(num>= 1 && num <= state.totalPages)
            state.currentPage = num;
        },         
       
    },
});

export const paginationActions = paginationSlice.actions;
export default paginationSlice.reducer;
