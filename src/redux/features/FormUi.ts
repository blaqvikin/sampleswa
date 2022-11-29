import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  value: {
    "Business Details": {
      "Phone number": true,
      Address: true,
      Email: true,
      Name: true,
      Website: true,
      About: true,
      CAGE: true,
      DUNS: true,
      "Entity type": true,
      Revenue: true,
    },
    codesAndCertification: true,
    mbeCertificate: true,
    companyCodes: true,
    "core competencies": true,
    "client list": false,
    differentiators: true,
    showTemplate: false,
  },
};
export const formUiSlice = createSlice({
  name: "formUI",
  initialState,
  reducers: {
    updateFormUi: (
      state,
      action: PayloadAction<typeof initialState["value"]>
    ) => {
      console.log(action.payload);
      state.value = { ...action.payload };
    },
    resetFormui: (state, action) => {
      state.value = initialState.value;
    },
  },
});

export type uiStateType = typeof initialState["value"];
export const { updateFormUi, resetFormui } = formUiSlice.actions;
export default formUiSlice.reducer;
