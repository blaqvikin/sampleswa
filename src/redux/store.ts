import { configureStore } from "@reduxjs/toolkit";
import FormInfoReducer from "./features/FormInfo";
import FormUiReducer from "./features/FormUi";
import AlertReducer from "./features/Alert";
export const store = configureStore({
  reducer: {
    formInfo: FormInfoReducer,
    formUI: FormUiReducer,
    Alert: AlertReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
