import { createSlice } from "@reduxjs/toolkit"

export const shoeCountSlice = createSlice({
  name: "shoe-count",
  initialState: 0,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
    customIncrement: (state, action) => state + action.payload,
    customDecrement: (state, action) => state - action.payload,
  },
})

export const { increment, decrement, customIncrement, customDecrement } =
  shoeCountSlice.actions

export default shoeCountSlice.reducer
