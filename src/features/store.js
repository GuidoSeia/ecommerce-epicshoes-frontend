import { configureStore } from '@reduxjs/toolkit'
import refreshSlice from './refreshSlice'
import productsApi from './productsApi'


export default configureStore({
    reducer: {
        [productsApi.reducerPath]: productsApi.reducer,
        refresh: refreshSlice,
       
    },
    middleware: (getAllProducts) => getAllProducts({
        immutableCheck: false,
        serializableCheck: false
    })
})