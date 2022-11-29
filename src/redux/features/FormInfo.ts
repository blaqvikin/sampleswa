import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  CapabilityForm,
  StateWithArrayStructure,
  StateWithString,
} from "../../@types";
// @ts-ignore

const initialState: CapabilityForm = {
  "Business Details": {
    about: "",
    address: "",
    email: "",
    entityType: "",
    name: "",
    phoneNumber: "",
    revenue: "",
    website: "",
    logo: "",
  },
  codesAndCertification: [],
  mbeCertificate: [],
  companyCodes: {
    ARIBIA: "",
    CAGE: "",
    DUNS: "",
    ENI: "",
    SAM: "",
  },
  coreCompetencies: [],
  "client list": [],
  differentiators: [],
  documentColor: "rgb(27, 104, 52)",
};
export const formInfoSlice = createSlice({
  name: "formInfo",
  initialState,
  reducers: {
    updateBusinessDetails: (
      state,
      action: PayloadAction<CapabilityForm["Business Details"]>
    ) => {
      state["Business Details"] = { ...action.payload };
    },
    updateCompanyCodes: (
      state,
      action: PayloadAction<CapabilityForm["companyCodes"]>
    ) => {
      state["companyCodes"] = { ...action.payload };
    },
    updateStateWithString: (
      state,
      action: PayloadAction<{ name: keyof StateWithString; value: string }>
    ) => {
      const { name, value } = action.payload;
      state[name] = value;
    },
    updateStateWithArray: (
      state,
      action: PayloadAction<{
        name: keyof StateWithArrayStructure;
        value: any[];
      }>
    ) => {
      const { name, value } = action.payload;
      state[name] = value;
    },
    resetEntireState: (state, action: PayloadAction<CapabilityForm>) => {
      const keys = Object.keys(state) as Array<keyof CapabilityForm>;

      keys.forEach((item) => {
        //@ts-ignore
        state[item] = action.payload[item];
      });
    },
  },
});

export const {
  updateBusinessDetails,
  updateCompanyCodes,
  updateStateWithString,
  updateStateWithArray,
  resetEntireState,
} = formInfoSlice.actions;

export default formInfoSlice.reducer;
