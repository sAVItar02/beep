import { configureStore } from "@reduxjs/toolkit";
import changesReducer from "./changesSlice";
import dropdownReducer from "./dropdownSlice";

const appStore = configureStore({
    reducer: {
        changes: changesReducer,
        dropdown: dropdownReducer
    }
})

export default appStore;