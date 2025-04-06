import {useEffect, useRef} from "react";
import MarketTable from "./MarketTable";
import { useGetLiveQuery } from '../features/stocksList/stocksListApiSlice';


const MarketWatch = () => {


    const currencyArray = ["AUDCAD", "EURGBP", "NGNUSD", "EURUSD", "GBPUSD"]

    const timerId = useRef();


    // const {
    //     data: list, 
    //     isLoading,
    //     isError,
    //     isSuccess,
    //     error,
    //     refetch
    // } = useGetLiveQuery({currencyArray})

    // useEffect(() => {

    //     timerId.current = setInterval(() => refetch(), 10000);

    //     return () => clearInterval(timerId.current);
    // })

    // if (list) {

    //     const dataArray = list.quotes.map((item) => {
    //         return { symbol:  `${item.base_currency} / ${item.quote_currency}`, price: `${item.bid}/${item.ask}` }
    //     })


    //     // save to Database
    //     const handleSaveLive = async (currencyArray) => {
    //         await axios.post("/currency/saveLive", { currencyArray })
    //     }

    //     if (dataArray.length === list.quotes.length) {
    //         handleSaveLive(dataArray);
    //     }
    // }


  return (
      <section className="section">
        <div className="container">
            <div className="row">
                <div className="col-lg-5">
                    <div>
                        <h1 className="hero-title">Currency Converter</h1>
                        <p className="">Get the best rates in the market</p>
                    </div>
                </div>


                <div className="col-lg-6"></div>
            </div>
        </div>
    </section>
  )
}

export default MarketWatch