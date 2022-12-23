import { configureStore } from '@reduxjs/toolkit'
import refreshSlice from './refreshSlice'
import productsApi from './productsApi'
import cartSlice from './cartSlice'
import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const persistConfig = {
    key: "root",
    version: 1,
    storage
}

const rootReducer = combineReducers({
    cart: cartSlice
})

const persistedReducer = persistReducer(persistConfig, rootReducer)


export default configureStore({
    
    reducer: {
        [productsApi.reducerPath]: productsApi.reducer,
        refresh: refreshSlice,
        cart: persistedReducer
       
    },
    middleware: (getAllProducts) => 
    getAllProducts().concat(productsApi.middleware),
    },
    )
