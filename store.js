import {configureStore} from '@reduxjs/toolkit';
import NavReducer from './src/LoRe/slices/navSlice'

export const store = configureStore({
    reducer: {
        nav: NavReducer
    },
});