import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
    name: "admins",
    initialState: [],
    reducers: {
        addAdmin(state, action) {
            state.push(action.payload)
            // console.log(action.payload);
        },
        removeAdmin(state, action) {
            // console.log("hi", action.payload);

            // Deletes last element
            state.pop(action.payload)

            // Delete clicked element(2nd arg is the no of element you want to delete)
            state.splice(action.payload, 1)

            // Other Method
            // let userIndexNum = state.indexOf(action.payload)
            // state.splice(userIndexNum,1f)
        },

        clearAllAdmins(state, action) {
            return []
        },
    },

});

/*
// if action is supposed to be handled by on reducer use reducers
// if action is supposed to be handled by multiple reducers use extraReducers
*/

// console.log(userSlice);
// console.log(userSlice.actions);
export default adminSlice.reducer;
export const { addAdmin, removeAdmin, clearAllAdmins } = adminSlice.actions;