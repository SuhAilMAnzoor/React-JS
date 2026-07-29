import {configureStore} from '@reduxjs/toolkit';

const store = configureStore({
    reducer: {
       authSlices
    }
});

export default store;

