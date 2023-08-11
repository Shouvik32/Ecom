import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { Product } from "./Products.slice";
import { RootState } from "../store/store";
export interface Wish extends Product{
    amount:number;
}
const wishSlice=createSlice({
    name:"Wishlist",
    initialState:[] as Wish[],
    reducers:{
        addToWishlist:(state,action:PayloadAction<Product>)=>{
                state.push({...action.payload,amount:1})   
        },
        removeFromWishlist:(state,action:PayloadAction<Number>)=>{    
                return state.filter((product)=>product.id!==action.payload)
        },
       
    }
})

export const {addToWishlist,removeFromWishlist}=wishSlice.actions;
export const wishlistProducts=(state: RootState)=> state.wishlistSlice;
export default wishSlice.reducer;