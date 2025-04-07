import {useEffect, useRef} from "react";
import MarketTable from "../MarketTable";
import { useGetLiveQuery } from '../../features/stocksList/stocksListApiSlice';
import Reviews from "../Reviews/Reviews";
import { CurrencyIcon } from "../../utils/Currency";
import "./MarketWatch.css"



const MarketWatch = () => {


    const currencyArray = ["AUDCAD", "EURGBP", "NGNUSD", "EURUSD", "GBPUSD"]

    const timerId = useRef();

    

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
                                    <button class="dropdown-toggle">
                                        <img src="bitcoin_logo.png" alt="BTC" /> <span class="selected-currency" >BTC</span> <span class="arrow-down">&darr;</span>
                                    </button>
                                    <div class="dropdown-menu">
                                        <a href="#" data-currency="BTC"><img src="bitcoin_logo.png" alt="BTC" /> BTC</a>


                                        <a href="#" data-currency="ETH"><img src="ethereum_logo.png" alt="ETH"/> ETH</a>


                                        <a href="#" data-currency="USDT"><img src="tether_logo.png" alt="USDT" /> USDT</a>

                                        <a href="#" data-currency="NGN"><img src="nigeria_flag.png" alt="NGN"/> NGN</a>
                                    </div>
                                </div>
                            </div>

                            <div className="currency__converter">
                                <div className="dropdown">
                                    <select className="select-tag">
                                        <option value="btc">
                                            <span class="option-icon btc-icon">฿</span> BTC
                                        </option>
                                        
                                        <option value="ngn" data-icon="./images/nigeria_flag.webp">
                                            NGN
                                        </option>
                                        <option value="eth">
                                            <span class="option-icon eth-icon">E</span> ETH
                                        </option>
                                        <option value="usdt">
                                            <span class="option-icon usdt-icon">T</span> USDT
                                        </option>
                                    </select>
                                </div>
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