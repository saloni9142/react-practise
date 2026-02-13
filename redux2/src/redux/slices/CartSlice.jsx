import {createSlice}  from "@reduxjs/toolkit";

export const CartSlice = createSlice({
    name:"cart",  // ye cart ka word me hm store me as key denge
    initialState:[],
    reducers:{
        add:(state,action) =>{
            state.push(action.payload);
        },
        remove:(state,action) =>{
            return state.filter((item)=> item.id !== action.payload);

        },
       
        
    }
})

export const {} = CartSlice.actions;
export default CartSlice.reducer;