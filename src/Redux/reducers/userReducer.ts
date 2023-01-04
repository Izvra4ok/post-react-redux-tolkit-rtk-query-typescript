import {IUserType, UserStateType} from "../../types/IUser";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchUsers} from "./ActionCreators";


const initialState: UserStateType = {
    users: [],
    isLoading: false,
    error: "",

}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        // usersFetching(state) {
        //     state.isLoading = true;
        // },
        // usersFetchingSuccess(state, action: PayloadAction<IUserType[]>) {
        //     state.isLoading = false;
        //     state.error = ""
        //     state.users = action.payload;
        // },
        // usersFetchingError(state, action: PayloadAction<string>) {
        //     state.isLoading = false;
        //     state.error = action.payload;
        // },
    },
    extraReducers: {
        [fetchUsers.fulfilled.type]: (state, action: PayloadAction<IUserType[]>) => {
            state.isLoading = false;
            state.error = "";
            state.users = action.payload
        },
        [fetchUsers.pending.type]: (state) => {
            state.isLoading = true;
        },
        [fetchUsers.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    }
})

export default userSlice.reducer