import { configureStore } from '@reduxjs/toolkit';
import auth from './modules/authSlice';
import products from './modules/productSlice';
import cart from './modules/cartSlice';
import pagination from './modules/paginationSlice';

const store = configureStore({
    reducer: {
        auth,
        products,
        cart,
        pagination,
    },
});

export default store;
