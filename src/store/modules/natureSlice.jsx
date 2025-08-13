import { createSlice } from '@reduxjs/toolkit';
import natureData from '../../assets/api/natureData';

const initialState = { 
    natures: natureData,
};

export const natureSlice = createSlice({
    name: 'nature',
    initialState,
    reducers: {
        xx:(state, action)=>{           
        },      
    },

});

export const natureActions = natureSlice.actions;
export default natureSlice.reducer;
