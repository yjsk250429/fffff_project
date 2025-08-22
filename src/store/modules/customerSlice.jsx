import { createSlice } from '@reduxjs/toolkit';
import customerData from '../../assets/api/customerData';

const saveCustmoers = JSON.parse(localStorage.getItem('customers')) || customerData;

const initialState = {
    customers: saveCustmoers,
    current: null,
};
let no = initialState.customers.length + 1;
export const customerSlice = createSlice({
    name: 'customer',
    initialState,
    reducers: {
        addCustomer: (state, action) => {
            action.payload.id = no++;
            state.customers = [...state.customers, action.payload];
            localStorage.setItem('customers', JSON.stringify(state.customers));
        },
    },
});

export const customerActions = customerSlice.actions;
export default customerSlice.reducer;
