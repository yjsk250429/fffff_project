import { createSlice } from '@reduxjs/toolkit';
import customerData from '../../assets/api/customerData';

const initialState = {
    customers: customerData,
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
        },
    },
});

export const customerActions = customerSlice.actions;
export default customerSlice.reducer;
