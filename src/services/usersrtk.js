import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const userRtkApi = createApi({
    reducerPath: 'userRtkApi',
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/api/v1/" }),
    endpoints: (builder) => ({
        getusers: builder.query({
            query: () => ({
                url: `users`,
                method: 'GET',

            }),
            providesTags: ["users"]

          }),
        postuser: builder.mutation({
        query: (user) => ({
            url: `users`,
            method: 'POST',
            body:user
        })
        , invalidatesTags: ["users"]
        }),
        deleteuser: builder.mutation({
            query: (data) => ({
                url: `users/$user.id`,
                method: 'DELETE',
                body:data.user
            })
            , invalidatesTags: ["users"]
            })
    })
});

export const {
    useGetUsersQuery,
    usePostUserMutation,
    useDeleteUserMutation } = userRtkApi