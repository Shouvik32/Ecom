import { configureStore } from "@reduxjs/toolkit"
import ProductsSlice from "../Components/Products/Products.slice";
import cartSlice from "../Components/Cart/cart.slice";
import CategorySlice from "../Components/Categories/Category.slice";
const store=configureStore({
    reducer:{
        ProductsSlice,
        cartSlice,
        CategorySlice,
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})
export type RootState=ReturnType<typeof store.getState>
export default store;
export type AppDispatch = typeof store.dispatch;