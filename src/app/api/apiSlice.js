import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
    baseUrl: "https://ifeanyi-stock-backend.herokuapp.com/"
})

const baseQueryWithChange = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);
    if (result.data) {
        result.data = result.data.data
    }
    return result
}

export const apiSlice = createApi({
    baseQuery: baseQueryWithChange,
    endpoints: builder => ({})
})