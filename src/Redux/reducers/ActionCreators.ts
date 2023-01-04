// import {AppDispatchType} from "../store";
import axios from "axios";
import {IUserType} from "../../types/IUser";
// import {userSlice} from "./userReducer";
import {createAsyncThunk} from "@reduxjs/toolkit";

// export const fetchUsers = () => async (dispatch: AppDispatchType) => {
//     try {
//         dispatch(userSlice.actions.usersFetching());
//         const response = await axios.get<IUserType[]>("https://jsonplaceholder.typicode.com/users");
//         dispatch(userSlice.actions.usersFetchingSuccess(response.data))
//     } catch (error: any) {
//         dispatch(userSlice.actions.usersFetchingError(error.message))
//     }
// }

export const fetchUsers = createAsyncThunk(
    "user/fetchAll",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get<IUserType>("https://jsonplaceholder.typicode.com/users");
            return response.data
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.message)
        }

    }
)