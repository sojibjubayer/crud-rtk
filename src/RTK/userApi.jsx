import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";



export const userApi=createApi({
    reducerPath:'userApi',
    baseQuery:fetchBaseQuery({baseUrl:'https://67666f64410f84999657a664.mockapi.io'}),
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: () => '/users',
        }),
    }),

})
export const { useGetUsersQuery } = userApi;




