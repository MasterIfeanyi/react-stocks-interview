import {useEffect, useRef} from "react";
import MarketTable from "../MarketTable";
import { useGetLiveQuery } from '../../features/stocksList/stocksListApiSlice';
import Reviews from "../Reviews/Reviews";
import { CurrencyIcon } from "../../utils/Currency";
import "./MarketWatch.css"
import { useState } from "react";


const MarketWatch = () => {


    // const currencyArray = ["AUDCAD", "EURGBP", "NGNUSD", "EURUSD", "GBPUSD"]

    const timerId = useRef();


    const currencyArray = [
        { symbol: "USD", img:"bitcoin.jpg" },
        { symbol: "JPY", img:"bitcoin.jpg" },
        { symbol: "NGN", img:"bitcoin.jpg" },
        { symbol: "GBP", img:"bitcoin.jpg" },
        { symbol: "EUR", img:"bitcoin.jpg" }
    ]

    const [from, setFrom] = useState("");
    
    const [to, setTo] = useState("");

    const [amount, setAmount] = useState(0);

    const [exchangeValue, setExchangeValue] = useState(0);

    const handleSelectFrom = (e) => setFrom(e.target.value)

    const handleSelectTo = (e) => setTo(e.target.value);

    const handleAmount = (e) => setAmount(Number(e.target.value));
    

    // Currency Icon Component
   


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
        <div className="container mb-5">
            <div className="row align-items-center">
                <div className="col-lg-5">
                    <div>
                        <h1 className="hero-title">Currency Converter</h1>
                        <p className="">Get the best rates in the market</p>
                    </div>
                </div>


                    <div className="col-lg-6">

                        <div className="outer-shell">
                            <div className="inner__heading">
                                <h4 className="inner__heading-text">Trade Currencies</h4>
                            </div>

                            <div className="currency__converter">
                                <div class="dropdown">
                                    
                                    <select 
                                        className="select-tag" 
                                        onChange={handleSelectFrom}
                                        aria-label="From currency"
                                        required 
                                        value={from}  
                                    >
                                        <option value="USD" selected>USD</option>

                                        {currencyArray
                                            .filter((currency) => currency.symbol !== "USD") // Exclude USD from the array
                                            .map((currency, i) => (
                                                <option key={i} value={currency.symbol} data-icon={currency.img}>
                                                <span className="option-icon">{currency.symbol}</span>
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <input 
                                    type="number"
                                    value={amount}
                                    required
                                    onChange={handleAmount}
                                    className="form-control currency__amount__input"
                                    placeholder="Enter Amount"
                                />


                            </div>

                            <div className="currency__converter">
                                <div className="dropdown">
                                    <select 
                                        className="select-tag" 
                                        onChange={handleSelectTo}
                                        aria-label="To currency"
                                        required
                                        value={to}  
                                    >
                                        <option value="" selected>NGN</option>

                                        {currencyArray
                                            .filter((currency) => currency.symbol !== "NGN") // Exclude NGN from the array
                                            .map((currency, i) => (
                                                <option key={i} value={currency.symbol} data-icon={currency.img}>
                                                    <span className="option-icon">{currency.symbol}</span>
                                                </option>
                                            ))}
                                    </select>
                                </div>

                                <input 
                                    type="number"
                                    value={exchangeValue}
                                    required
                                    className="form-control currency__amount__input"
                                    placeholder="Enter Amount"
                                />


                            </div>

                            <button className="swap__button">Swap</button>
                            
                        </div>


                    </div>
            </div>
        </div>
        <Reviews />
    </section>
  )
}

export default MarketWatch