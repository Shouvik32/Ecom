import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { Product } from "./Products.slice";
import { RootState } from "../store/store";
interface Cart extends Product{
    amount:number
}
const cartSlice=createSlice({
    name:"Cart",
    initialState:[] as Cart[],
    reducers:{
        addToCart:(state,action:PayloadAction<Product>)=>{
            const selectedProductIndex=state.findIndex(product=>product.id===action.payload.id)
            if(selectedProductIndex!==-1){
                state[selectedProductIndex].amount+=1
            }
            else{
                state.push({...action.payload,amount:1})
            }
        },
        removeFromCart:(state,action:PayloadAction<Number>)=>{
            const selectedProductIndex=state.findIndex(product=>product.id===action.payload)
            if(state[selectedProductIndex].amount>1)
            {
                state[selectedProductIndex].amount-=1
            }
            else{
                return state.filter((product)=>product.id!==action.payload)
            }

        },
        deteteFromCart:(state,action:PayloadAction<Number>)=>{
            //const selectedProductIndex=state.findIndex(product=>product.id===action.payload)
            console.log("here");
            
            return state.filter((product)=>product.id!==action.payload)
                
        }
    }
})

export const {addToCart,removeFromCart,deteteFromCart}=cartSlice.actions;
export const getCartProducts=(state: RootState)=> state.cartSlice
export const getTotalAmount=(state: RootState)=> state.cartSlice.reduce((acc,current)=>(acc+=current.amount),0)
export const getTotalPrice=(state: RootState)=> state.cartSlice.reduce((acc,current)=>(acc+=current.amount*current.price),0)
export default cartSlice.reducer;