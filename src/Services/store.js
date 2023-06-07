import { configureStore } from "@reduxjs/toolkit";
import { cryptoApi } from "./cryptoApi";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { cryptoNew } from "./cryptoNew";
const store=configureStore({
    reducer:{
        [cryptoApi.reducerPath]:cryptoApi.reducer,
        [cryptoNew.reducerPath]:cryptoNew.reducer,
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat([cryptoNew.middleware,cryptoApi.middleware]),
});
setupListeners(store.dispatch);
export default store;