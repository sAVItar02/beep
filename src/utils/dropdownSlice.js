import { createSlice } from "@reduxjs/toolkit";

const dropdownSlice = createSlice({
    name: "dropdown",
    initialState: {
        values: {
            updateType: "",
            updateValue: "",
            isPadding: "",
            updatePosition: ""
        }
    },
    reducers: {
        updateFunctionality: (state, action) => {
            state.values.updateType = action.payload.type;
            state.values.updateValue = action.payload.value;
        },
        updateIfPadding: (state, action) => {
            state.values.isPadding = action.payload;
        },
        updatePositionValue: (state, action) => {
            state.values.updatePosition = action.payload;
        } 
    }
})

export const {updateFunctionality, updateIfPadding, updatePositionValue} = dropdownSlice.actions;
export default dropdownSlice.reducer;