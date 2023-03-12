import { createSlice } from "@reduxjs/toolkit";
import { clearAllUsers } from "../actions";

const userSlice = createSlice({
    name: "user",
    initialState: [],
    reducers: {
        addUser(state, action) {
            state.push(action.payload)
            // console.log(action.payload);
        },
        removeUser(state, action) {
            // console.log("hi", action.payload);

            // Deletes last element
            state.pop(action.payload)

            // Delete clicked element(2nd arg is the no of element you want to delete)
            state.splice(action.payload, 1)

            // Other Method
            // let userIndexNum = state.indexOf(action.payload)
            // state.splice(userIndexNum,1f)
        },

        // clearAllUsers(state, action) {
        //     return []
        // },
    },
    extraReducers(builder) {
        // builder.addCase(userSlice.actions.clearAllUsers, () => {
        builder.addCase(clearAllUsers, () => {
            return []
        })
    }

});

/*
// if action is supposed to be handled by on reducer use reducers
// if action is supposed to be handled by multiple reducers use extraReducers
*/

// console.log(userSlice);
// console.log(userSlice.actions);
export default userSlice.reducer;
export const { addUser, removeUser } = userSlice.actions;