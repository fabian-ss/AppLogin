import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    username: "",
    token: "",
    email: "",
    name: "",
    last_name: "",
    phone:0,
}

export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
        setUsername: (state, action) => {
            state.username = action.payload;
        },
        setToken: (state, action) => {
            state.token = action.payload;
        },
        setEmail: (state, action) => {
            state.email = action.payload;
        },
        setName: (state, action) => {
            state.name = action.payload;
        },
        setLast_name: (state, action) => {
            state.last_name = action.payload;
        },
        setPhone: (state, action) => {
            state.phone = action.payload;
        }        
  }
});

export const { setUsername,setToken,setEmail,setName,setLast_name,phone } = navSlice.actions;

export const selectUsername = state => state.nav.username;
export const selectToken = state => state.nav.token;
export const selectEmail = state => state.nav.email;
export const selectName = state => state.nav.name;
export const selectLast_name = state => state.nav.last_name;
export const selectPhone= state => state.nav.phone;


export default navSlice.reducer;
