import { configureStore } from '@reduxjs/toolkit'
import { createStore } from "redux";
import {rootReducer} from "./reducers";
import authReducer from './slices/authSlice'
import { userRtkApi } from './services/usersrtk'
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
    reducer: {
        auth: authReducer,
        [userRtkApi.reducerPath]: userRtkApi.reducer,
    },

    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userRtkApi.middleware),
})

setupListeners(store.dispatch)