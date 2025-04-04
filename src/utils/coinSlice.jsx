import { createSlice } from "@reduxjs/toolkit";

const coinSlice=createSlice({
    name:'coin',
    initialState:{
        currency:'usd',
    },
    reducers:{
        setCurrency: (state, action) => {
            state.currency = action.payload;
          },
    },
});

export const{setCurrency}=coinSlice.actions;
export default coinSlice.reducer;