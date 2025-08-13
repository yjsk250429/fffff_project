import { configureStore } from '@reduxjs/toolkit';
import auth from './modules/authSlice';
import products from './modules/productSlice';
import cart from './modules/cartSlice';
import pagination from './modules/paginationSlice';
import gift from './modules/giftSlice';

const store = configureStore({
    reducer: {
        auth,
        products,
        cart,
        pagination,
        gift,
    },
});

export default store;
