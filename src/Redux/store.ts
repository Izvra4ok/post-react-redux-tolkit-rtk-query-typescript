import {combineReducers, configureStore} from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer";
import {postAPI} from "../services/postService";


const rootReducers = combineReducers({
    userReducer,
    [postAPI.reducerPath]: postAPI.reducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducers,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(postAPI.middleware)
    })
}

export type RootStateType = ReturnType<typeof rootReducers>
export type AppStoreType = ReturnType<typeof setupStore>
export type AppDispatchType = AppStoreType["dispatch"]