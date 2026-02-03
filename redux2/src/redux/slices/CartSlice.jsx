import {createSlice}  from "@reduxjs/toolkit";
const initialState={
    value:100,
}

export const CartSlice = createSlice({
    name:"cart",  // ye cart ka word me hm store me as key denge
    initialState,
    reducers:{
       
        
    }
})

export const {} = CartSlice.actions;
export default CartSlice.reducer;