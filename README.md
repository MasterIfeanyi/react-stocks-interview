# Getting Started

This project was bootstrapped with Create React App.

## Project Set-up

The dependencies required are all included in the `package.json` file. They will all be installed by running the `npm install` command.

To start the project run `npm start`.

## Check out the web app

click the link below

Open [ifeanyi-stock](https://ifeanyi-stock.netlify.app/) to view it in the browser.

## Problems

I ran into several problems while I was trying to create the project:

### problem 1: RTK query
I was struggling to understand how to use RTK query for this project, but I found an easy-to-follow tutorial on line that helped me to understand better [rtk-query-made-easy](https://blog.openreplay.com/fetching-data-in-redux-using-rtk-query)


### problem 2:  API response 
The API response data was too complicated to use. 

```javascript
[
    [
        {
            "1. Information": "Monthly Adjusted Prices and Volumes",
            "2. Symbol": "AAPL",
            "3. Last Refreshed": "2022-06-29",
            "4. Time Zone": "US/Eastern",
        },
        {
            "1999-12-31": { "1. open": '101.0000', "2. high": '118.0000', "3. low": '91.0600', "4. close": '102.8100', }
            "2000-12-31": { "1. open": '101.0000', "2. high": '118.0000', "3. low": '91.0600', "4. close": '102.8100', }
            "2001-12-31": { "1. open": '101.0000', "2. high": '118.0000', "3. low": '91.0600', "4. close": '102.8100', }
            "2002-12-31": { "1. open": '101.0000', "2. high": '118.0000', "3. low": '91.0600', "4. close": '102.8100', }
            "2003-12-31": { "1. open": '101.0000', "2. high": '118.0000', "3. low": '91.0600', "4. close": '102.8100', }
        }
    ],
    [
        {
            "1. Information": "Monthly Adjusted Prices and Volumes"
            "2. Symbol": "MSFT"
            "3. Last Refreshed": "2022-06-28 16:00:01"
            "4. Time Zone": "US/Eastern"
        }, 
        {
            "1999-12-31": { "1. open": "101.0000", "2. high": "118.0000", "3. low": "91.0600", "4. close": "102.8100" }
            "2000-12-31": { "1. open": '101.0000', "2. high": '118.0000', "3. low": '91.0600', "4. close": '102.8100', }
            "2001-12-31": { "1. open": '101.0000', "2. high": '118.0000', "3. low": '91.0600', "4. close": '102.8100', }
            "2002-12-31": { "1. open": '101.0000', "2. high": '118.0000', "3. low": '91.0600', "4. close": '102.8100', }
            "2003-12-31": { "1. open": '101.0000', "2. high": '118.0000', "3. low": '91.0600', "4. close": '102.8100', }
        }
    ],
    [
        {
            "1. Information": "Monthly Adjusted Prices and Volumes"
            "2. Symbol": "BYD"
            "3. Last Refreshed": "2022-06-28 16:00:01"
            "4. Time Zone": "US/Eastern"
        }, 
        {
            "1999-12-31": { "1. open": "101.0000", "2. high": "118.0000", "3. low": "91.0600", "4. close": "102.8100" }
            "2000-12-31": { "1. open": "101.0000", "2. high": "118.0000", "3. low": "91.0600", "4. close": "102.8100" }
            "2001-12-31": { "1. open": "101.0000", "2. high": "118.0000", "3. low": "91.0600", "4. close": "102.8100" }
            "2002-12-31": { "1. open": "101.0000", "2. high": "118.0000", "3. low": "91.0600", "4. close": "102.8100" }
            "2003-12-31": { "1. open": "101.0000", "2. high": "118.0000", "3. low": "91.0600", "4. close": "102.8100" }
        }         
    ],
]
```


I was able to research and find a solution to this problem on [stackoverflow](https://stackoverflow.com/questions/72793450/how-to-loop-through-an-array-of-array-of-two-objects-alphavantage-api/72793784)

```javascript

const dataArray = response.data

const normalizeData = (data) => {
    return data.flatMap((d) => {
      return { ...d[0], ...d[1] };
    });
};

normalizeData(dataArray);

```
### problem 3: API call
I used the useGetStocksQuery hook returned by RTK query to make the API call once the component mounts.

```javascript

const {
    data: list,
    isLoading,
    isError, 
    isSuccess,
    error
} = useGetStocksQuery({tickerArray, type});

```

### problem 4: cache
I saved the API response in cache in RTK query so that the API call is not made everytime the component mounts.

### problem 5: Customizing query responses

I made an API call and I wanted to transform the API response for all queries in apiSlice

I was able to find a solution on [stackoverflow](https://stackoverflow.com/questions/71503552/rtk-query-transform-all-query-responses-at-once) where I got the understanding to fabricate my own solution.

I created a custom `baseQueryWithChange` function to (globally) define a transformResponse for all queries and I wrap `baseQuery` with the custom `baseQueryWithChange`

**function to transform API response**

```javascript
export const changeResponse = async (list) => {
    const dataArray = list.data
    console.log(dataArray) // 10 elements
    
    const finalArray = await dataArray.filter((each) => each.length !== 1) // 6 elements

    const normalizeData = (data) => {
        return data.flatMap((d) => {
            return { ...d[0], ...d[1] };
        });
    };

    const latestList = normalizeData(finalArray)

    console.log(normalizeData(finalArray)); // 6 elements

    return latestList
}

```

**baseQuery**

```javascript

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import function to transform API response
import { changeResponse } from "../../constants/changeResponse";

const baseQuery = fetchBaseQuery({
    baseUrl: "http://localhost:3500"
})

const baseQueryWithChange = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);
    if (result.data) {
        result.data = changeResponse(result.data)
        console.log(result.data)
    }
    return result
}

export const apiSlice = createApi({
    baseQuery: baseQueryWithChange,
    endpoints: builder => ({})
})
```

### Problem 6:

what is the cause and solution ?

```javascript
Error: Can't resolve '@fortawesome/free-solid-svg-icons' in 

Error: Can't resolve '@fortawesome/react-fontawesome' in
```

**Solution**

```npm install @fortawesome/free-solid-svg-icons```

```npm install @fortawesome/react-fontawesome```


## The API used

I used three different API to fetch data because of the lack of a single API that could offer all forms of data required to build this app.

**convert two currencies**

[alphaVantage](https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=USD&to_currency=GBP&apikey=demo)

This is how I structured the URL for a request

1. baseURL: `https://www.alphavantage.co/`
2. enpoints: `query?function=CURRENCY_EXCHANGE_RATE`
3. params: `&from_currency=${from}&to_currency=${to}`
4. token: `&apikey=${process.env.ALPHA_VANTAGE_API_KEY}`

**market watch**

[marketdataTradermadeCom](https://marketdata.tradermade.com/api/v1/live?currency=USDGBP&api_key=demo)

This is how I structured my URL for a batch request

```javascript
let currArray = ["AUDCAD", "EURGBP", "NGNUSD", "EURUSD", "GBPUSD"]
```

1. baseURL: `"https://marketdata.tradermade.com/api/v1"`
2. enpoints: `/live`
3. params: `?currency=${currArray}`
4. token: `&api_key=${token_key}`

**Stock Prices**

[iexcloud](https://cloud.iexapis.com/v1/stock/market/batch?symbols=AAPL,META)

This is how I structured my URL for a batch request

1. baseUrl: `"htps://cloud.iexapis.com/v1"`
2. endpoints: `"/stock/market/batch"`
3. params: `"?symbols=aapl,fb,msft,byd,tsla&types=price"&types=quote`
4. token: `"&token=YOUR_TOKEN_HERE"`

```javascript

let tickerArray = ["aapl","fb","msft","byd","tsla"]

`https://cloud.iexapis.com/v1/stock/market/batch?symbols=${tickerArray.toString().toLowerCase()}&types=quote&token=${process.env.IEXCLOUD_API_KEY}`

```



