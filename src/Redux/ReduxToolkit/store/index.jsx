import { configureStore } from "@reduxjs/toolkit";
import AdminSlice from "./slices/AdminSlice";
import userSlice from "./slices/UserSlice";

const store = configureStore({
    reducer: {
        users: userSlice,
        admins: AdminSlice,
    },
});

export default store;