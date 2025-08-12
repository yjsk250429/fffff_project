import { createSlice } from '@reduxjs/toolkit';
import productData from '../../assets/api/productData';

const initialState = { 
    products:productData,
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
