import { createSlice } from '@reduxjs/toolkit';

const initialState = { 
   
};

export const paginationSlice = createSlice({
    name: 'pagination',
    initialState,
    reducers: {
        xx:(state, action)=>{           
        },      
    },

});

export const paginationActions = paginationSlice.actions;
export default paginationSlice.reducer;
