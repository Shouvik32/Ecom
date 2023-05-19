import { createAsyncThunk, createSlice,PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store/store";


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
            localStorage.setItem("username",username)
            localStorage.setItem("firstName",firstName)
            localStorage.setItem("lastName",lastName)
            localStorage.setItem("gender",gender)
            localStorage.setItem("image",image)
            localStorage.setItem("email",email)
            localStorage.setItem("token",token)
          })
    }
})

export const {addUser,addToken}=LoginSlice.actions;
export default LoginSlice.reducer;





