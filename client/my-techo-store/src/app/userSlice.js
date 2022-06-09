import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:'user',
    initialState:{
        isAuth: true,
        user:{}
    },
    reducers:{
        authController(state, action){
            state.isAuth = action.payload;
        },
        setUser(state,action){
            state.user = action.payload;
        }
    }
})

export const {authController, setUser} = userSlice.actions;

export default userSlice.reducer;
