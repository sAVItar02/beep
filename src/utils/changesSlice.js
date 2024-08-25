import { createSlice } from "@reduxjs/toolkit";

const changesSlice = createSlice({
    name: "changes",
    initialState: {
        changes: {
            margin: {},
            padding: {}
        },
        values: {
            margin: {},
            padding: {}
        }
    },

    reducers: {
        addChange: (state, action, position) => {
            console.log(state, action, position);
        }
    }
})

export const {addChange} = changesSlice.actions;
export default changesSlice.reducer;