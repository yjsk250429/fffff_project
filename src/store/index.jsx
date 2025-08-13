import { configureStore } from '@reduxjs/toolkit';
import auth from './modules/authSlice';
import product from './modules/productSlice';
import cart from './modules/cartSlice';
import pagination from './modules/paginationSlice';
import gift from './modules/giftSlice';
import nature from './modules/natureSlice';

const store = configureStore({
    reducer: {
        auth,
        product,
        cart,
        pagination,
        gift,
        nature,
    },
});

export default store;
