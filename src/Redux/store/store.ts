import { configureStore } from "@reduxjs/toolkit"
import ProductsSlice from "../Slice/Products.slice";
import cartSlice from "../Slice/cart.slice";
import CategorySlice from "../Slice/Category.slice";
import wishlistSlice from "../Slice/wishlist.slice";
import LoginSlice from "../Slice/LoginSlice";
const store=configureStore({
    reducer:{
        ProductsSlice,
        cartSlice,
        CategorySlice,
        LoginSlice,
        wishlistSlice
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})
export type RootState=ReturnType<typeof store.getState>
export default store;
export type AppDispatch = typeof store.dispatch;