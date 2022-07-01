import { apiSlice } from "../../app/api/apiSlice"


export const stocksListApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getStocks: builder.query({
            query: (credentials) => ({
                url: "/stocks/getBatchStocks",
                keepUnusedDataFor: 300, 
                method: "POST",
                body: { ...credentials }
            })
        }),
        getLive: builder.query({
            query: (credentials) => ({
                url: "/currency/getLive",
                keepUnusedDataFor: 300,
                method: "POST",
                body: { ...credentials }
            })
        })
    })
})


export const {
    useGetStocksQuery,
    useGetLiveQuery
} = stocksListApiSlice

