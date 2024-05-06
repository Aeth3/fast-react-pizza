import { createSlice } from "@reduxjs/toolkit";

const initialState = { firstname: "", phone: "", address: "", priority: false };

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    submitOrder: {
      prepare(firstname, phone, address, priority) {
        return { payload: { firstname, phone, address, priority } };
      },
      reducer(state, action) {
        state.firstname = action.payload.firstname;
        state.phone = action.payload.phone;
        state.address = action.payload.address;
        state.priority = action.payload.priority;
      },
    },
  },
});

export const { submitOrder } = orderSlice.actions;
export default orderSlice.reducer;
