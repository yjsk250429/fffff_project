import { configureStore } from '@reduxjs/toolkit';
import auth from './modules/authSlice';
import product from './modules/productSlice';
import cart from './modules/cartSlice';
import pagination from './modules/paginationSlice';
import gift from './modules/giftSlice';
import nature from './modules/natureSlice';
import collection from './modules/collectionSlice';
import wish from './modules/wishSlice';
import customer from './modules/customerSlice';
import payment from './modules/paymentSlice';
import search from './modules/searchSlice';

const store = configureStore({
    reducer: {
        auth,
        product,
        cart,
        pagination,
        gift,
        nature,
        collection,
        wish,
        customer,
        payment,
        search,
    },
});

export default store;
