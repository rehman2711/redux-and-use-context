import { configureStore } from "@reduxjs/toolkit"
import shoeCounterReducer from "@/redux/slices/shoe-count/shoe-count-slice"

export default configureStore({
  reducer: {
    shoeCount: shoeCounterReducer,
  },
})
