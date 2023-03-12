import { createSlice } from "@reduxjs/toolkit";
import { clearAllUsers } from "../actions";

const adminSlice = createSlice({
    name: "admins",
    initialState: [],
    reducers: {
        addAdmin(state, action) {
            state.push(action.payload)
        },
        removeAdmin(state, action) {
            state.splice(action.payload, 1)
        },
        // clearAllAdmins(state, action) {
        //     return []
        // },
    },
    extraReducers(builder) {
        builder.addCase(clearAllUsers, () => {
            return []
        })
    }
})

export default adminSlice.reducer;
export const { addAdmin, removeAdmin, clearAllAdmins } = adminSlice.actions;
