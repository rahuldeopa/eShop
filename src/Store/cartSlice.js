import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:'cart',
    initialState:{
        cartItems:[]
    },
    reducers:{
        addItems:(state,action)=>{
            state.cartItems.push(action.payload)
        },
        removeItems:(state,action)=>{
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id);
        },
        clearItems:(state,action)=>{
            state.cartItems.length=0;
        }
    }
});
export const{addItems,removeItems,clearItems}=cartSlice.actions;
export default cartSlice.reducer;