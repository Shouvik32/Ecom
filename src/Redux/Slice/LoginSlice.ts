import { createAsyncThunk, createSlice,PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store/store";

export interface login{
    username:string,
    firstName:string,
    lastName:string,
    gender:string,
    image:string,
    email:string,
    token:string,
    loading:boolean,

}

export const logindata:any={
    username:"",
    firstName:"",
    lastName:"",
    gender:"",
    image:"",
    email:"",
    token:"",
    loading:false,
     
}

export const loginUser=createAsyncThunk('login',(body:any)=>{
    return axios.post("https://dummyjson.com/auth/login",{
        username:body.username ,
        password:body.password

     }, {
        headers: {
            'Content-Type': 'application/json',
            Authorization:localStorage.getItem("token")
        }})
    .then(res=>res.data)
    })

  

export const LoginSlice=createSlice({
    name:'login',
    initialState:logindata,
    reducers:{
        addToken:(state,action)=>{
            state.token=action.payload.token;
        },
        addUser:(state,{ payload:{username,firstName,lastName,gender,image,email,token} })=>{
            state.username=username;
            state.firstName=firstName;
            state.lastName=lastName;
            state.gender=gender;
            state.image=image;
            state.email=email;
        },
        logout:(state,action)=>{
            state.username="";
            state.firstName="";
            state.lastName="";
            state.gender="";
            state.image="";
            state.email="";
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(loginUser.fulfilled,(state, { payload:{username,firstName,lastName,gender,image,email,token} }) => {
            state.loading=false;
            state.token=token;
            state.username=username;
            state.firstName=firstName;
            state.lastName=lastName;
            state.gender=gender;
            state.image=image;
            state.email=email;
           /* localStorage.setItem("username",username)
            localStorage.setItem("firstName",firstName)
            localStorage.setItem("lastName",lastName)
            localStorage.setItem("gender",gender)
            localStorage.setItem("image",image)
            localStorage.setItem("email",email) */
            localStorage.setItem("token",token)
          })
    }
})

export const {addUser,addToken,logout}=LoginSlice.actions;
export default LoginSlice.reducer;





