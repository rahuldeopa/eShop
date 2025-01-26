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
            state.cartItems.pop();
        },
        clearItems:(state,action)=>{
            state.cartItems.length=0;
        }
    }
});
export const{addItems,removeItems,clearItems}=cartSlice.actions;
export default cartSlice.reducer;