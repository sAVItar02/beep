import { createSlice } from "@reduxjs/toolkit";

const dropdownSlice = createSlice({
    name: "dropdown",
    initialState: {
        updateType: "",
        updateValue: ""
    },
    reducers: {
        updateFunctionality: (state, action) => {
            state.updateType = action.payload.type;
            state.updateValue = action.payload.value;
        }
    }
})

export const {updateFunctionality} = dropdownSlice.actions;
export default dropdownSlice.reducer;