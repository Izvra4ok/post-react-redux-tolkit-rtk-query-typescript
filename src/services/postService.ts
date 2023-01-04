import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {IPosts} from "../types/IPosts";

export const postAPI = createApi({
    reducerPath: "postAPI",
    tagTypes: ["Post"],
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:5000/"}),
    endpoints: (build) => ({
        fetchAllPosts: build.query<IPosts[], number>({
            query: (limit: number = 10) => ({
                url: "/posts",
                params: {
                    _limit: limit
                }
            }),
            providesTags: result => ["Post"]
        }),
        createPost: build.mutation<IPosts, IPosts>({
            query: (post) => ({
                url: "/posts",
                method: "POST",
                body: post
            }),
            invalidatesTags: ["Post"]
        }),

        updatePost: build.mutation<IPosts, IPosts>({
            query: (post) => ({
                url: `/posts/${post.id}`,
                method: "PUT",
                body: post
            }),
            invalidatesTags: ["Post"]
        }),

        deletePost: build.mutation<IPosts, IPosts>({
            query: (post) => ({
                url: `/posts/${post.id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Post"]
        }),
    })
})