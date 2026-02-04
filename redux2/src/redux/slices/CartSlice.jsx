import {createSlice}  from "@reduxjs/toolkit";

export const CartSlice = createSlice({
    name:"cart",  // ye cart ka word me hm store me as key denge
    initialState:[],
    reducers:{
        add:() =>{},
        remove :() =>{},
       
        
    }
})

export const {} = CartSlice.actions;
export default CartSlice.reducer;