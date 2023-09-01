import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { Product } from "./Products.slice";
import { RootState } from "../store/store";
export interface Wish extends Product{
    amount:number,
   exists:boolean
}
const wishSlice=createSlice({
    name:"Wishlist",
    initialState:[] as Wish[],
    reducers:{
        addToWishlist:(state,action:PayloadAction<Product>)=>{
            const selectedProductIndex=state.findIndex(product=>product.id===action.payload.id)
            if(selectedProductIndex!==-1){
             // state[]  
            }
            else{
                
                state.push({...action.payload,amount:1,exists:false})   
            }
        },
        removeFromWishlist:(state,action:PayloadAction<Number>)=>{    
                return state.filter((product)=>product.id!==action.payload)
        },
       
    }
})

export const {addToWishlist,removeFromWishlist}=wishSlice.actions;
export const wishlistProducts=(state: RootState)=> state.wishlistSlice;
export default wishSlice.reducer;