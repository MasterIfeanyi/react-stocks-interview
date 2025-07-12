import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
    // baseUrl: "https://mustardng-backend.onrender.com"
    // baseUrl: "https://ifeanyi-stock-backend.herokuapp.com/"
    baseUrl: "http://localhost:5000"
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
    // refetchOnMountOrArgChange: 5,
    endpoints: builder => ({})
})