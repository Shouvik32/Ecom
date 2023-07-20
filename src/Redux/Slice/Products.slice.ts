import { createAsyncThunk, createSlice,PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store/store";


export interface Product{
    id:number,
    title:string,
    price: number,
    description:string,
    image:string,
    category:string,
}
export let initialproductsList:Product[]=[]

   export const fetchProduct=createAsyncThunk('products/fetchproduct',()=>{
    return axios.get("https://fakestoreapi.com/products")
    .then(res=>res.data)

  })
  export const fetchSingleProduct=createAsyncThunk('products/fetchsingleproduct', async (id:string)=>{
    const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
      return res.data;

  })
  
    const productSlice=createSlice({
        name:'products',
        initialState:initialproductsList,
        reducers:{
            addProduct:(state,action: PayloadAction<Product>)=>{
                return [...state,action.payload]
            },
            removeProduct:(state,action:PayloadAction<Number>)=>{
                return state.filter((product:Product)=>product.id!==action.payload)
            }
        },
        extraReducers:(builder)=>{
            builder.addCase(fetchProduct.fulfilled,(state,action: PayloadAction<Product[]>)=>{
                return state=action.payload
            })
            .addCase(fetchSingleProduct.fulfilled,(state,action: PayloadAction<any>)=>{
                return state=action.payload
            })
        }
    })

    export const {addProduct,removeProduct}=productSlice.actions;
    export const getProducts=(state:RootState)=> state.ProductsSlice;
    export const getProduct=(state:RootState)=> state.ProductsSlice;
    export default productSlice.reducer;