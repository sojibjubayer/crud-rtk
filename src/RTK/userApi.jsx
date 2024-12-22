import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";



export const userApi=createApi({
    reducerPath:'userApi',
    baseQuery:fetchBaseQuery({baseUrl:'https://67666f64410f84999657a664.mockapi.io'}),
    tagTypes:['User'],
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: () => '/users',
            providesTags:['User']
        }),
        // getSIngleUser by id
        getUser: builder.query({
            query: (id) => `/users/${id}`,
            providesTags:['User']
        }),
        // CREATE 
        addUser: builder.mutation({
            query: (user) => ({
                url: '/users',
                method:'POST',
                body:user
            }),
            invalidatesTags:['User']
        }),

        // UPDATE 
        updateUser: builder.mutation({
            query: (user) => ({
                url: `/users/${user.id}`,
                method:'PUT',
                body:user
            }),
            invalidatesTags:['User']
        }),
        // DELETE
        deleteUser: builder.mutation({
            query: (id) => ({
                url: `/users/${id}`,
                method:'DELETE',
            }),
            invalidatesTags:['User']
        }),
    }),

})
export const { useGetUsersQuery,useGetUserQuery, useAddUserMutation,useUpdateUserMutation,useDeleteUserMutation } = userApi;




