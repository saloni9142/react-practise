import {createSlice}  from "@reduxjs/toolkit";
const initialState={
    value:100,
}

export const CartSlice = createSlice({
    name:"counter",
    initialState,
    reducers:{
       
        
    }
})

export const {increment,decrement} = CounterSlice.actions;
export default CounterSlice.reducer;