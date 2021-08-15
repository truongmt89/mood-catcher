import {configureStore,combineReducers,getDefaultMiddleware } from "@reduxjs/toolkit";
import appInit from './feature/appInit.js'




 const reducer = combineReducers({
    appInit:appInit
 })





const store = configureStore({
    reducer,
    middleware:[...getDefaultMiddleware()]
})

export default store;