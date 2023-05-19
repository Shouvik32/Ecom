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
export let initialproductsList:string[]=[]

   export const fetchCategoryData=createAsyncThunk('products/fetchcategory',()=>{
    return axios.get("https://fakestoreapi.com/products/categories")
    .then(res=>res.data)

  })
  export const fetchProductsByCategory=createAsyncThunk('products/fetchproduct',(category:string)=>{
    return axios.get(`https://fakestoreapi.com/products/category/${category}`)
    .then(res=>res.data)
  })
    const categorySlice=createSlice({
        name:'category',
        initialState:initialproductsList,
        reducers:{
            
        },
        
            extraReducers:(builder)=>{
                builder.addCase(fetchCategoryData.fulfilled,(state,action: PayloadAction<string[]>)=>{
                    return state=action.payload
                })
                
                .addCase(fetchProductsByCategory.fulfilled,(state,action:PayloadAction<any>)=>{
                    return state=action.payload
                })
        }
    })
    export const getCategory=(state:RootState)=> state.CategorySlice
    export const getProducts=(state:RootState)=> state.ProductsSlice
    export default categorySlice.reducer;