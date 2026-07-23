import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status : false,
    userData : null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        // methods
        login: (state, action) => {
            state.status = true;
            state.userData = action.payload.userData;
        },
        logout: (state) =>{
            state.status = false;
            state.userData = null;
        }
    }
})

// login and logout are action we call them actions

export const {login, logout} = authSlice.actions;
export default authSlice.reducer;