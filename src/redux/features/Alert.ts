import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type alert = { id: number; message: string };
const initialState: { data: alert[]; count: number } = {
  data: [],
  count: 0,
};

const alertSlice = createSlice({
  name: "Alert",
  initialState,
  reducers: {
    addAlert(state, action: PayloadAction<alert>) {
      state.data = [...state.data, action.payload];
      state.count = state.count + 1;
    },
    removeAlert(state, action: PayloadAction<Pick<alert, "id">>) {
      state.data = state.data.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addAlert, removeAlert } = alertSlice.actions;
export default alertSlice.reducer;
