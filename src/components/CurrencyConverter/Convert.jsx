import {useEffect} from "react";
import Reviews from "../Reviews/Reviews";
import "./Convert.css"
import axios from "axios";
import { useState } from "react";
import useDebounce from "../../hooks/useDebounce";

const Convert = () => {

    const currencyArray = [
        { symbol: "USD", img:"bitcoin.jpg" },
        { symbol: "JPY", img:"bitcoin.jpg" },
        { symbol: "NGN", img:"bitcoin.jpg" },
        { symbol: "GBP", img:"bitcoin.jpg" },
        { symbol: "EUR", img:"bitcoin.jpg" }
    ]

    const [from, setFrom] = useState("USD");
    
    const [to, setTo] = useState("NGN");

    const [amount, setAmount] = useState("");

    const [exchangeValue, setExchangeValue] = useState("");


    const [loading, setLoading] = useState(false)


    // Use the debounce hook for the amount
    const debouncedAmount = useDebounce(amount, 500);

    const handleSelectFrom = (e) => setFrom(e.target.value)

    const handleSelectTo = (e) => setTo(e.target.value);

    // Simplified amount handler - no need for manual debounce
    const handleAmount = (e) => {
        const value = e.target.value;
        setAmount(value === "" ? "" : Number(value));
    };

    


    const convertCurrency = async (amount, fromCurrency, toCurrency) => {
        if(!amount || isNaN(amount)) return

        setLoading(true)
        try {
            const response = await axios.get(`https://v6.exchangerate-api.com/v6/b2406f81700a1c886d5e0f01/latest/${fromCurrency}`)

            if (response.data && response.data.conversion_rates) {
                const rate = response.data.conversion_rates[toCurrency]
                const result = (Number.parseFloat(amount) * rate).toFixed(2)
                setExchangeValue(result)
            }

            console.log(response)
            
        } catch (error) {
            console.error("Error fetching exchange rates:", error)
            setExchangeValue("Error")
        } finally {
            setLoading(false)
        }

    }
    

    // Effect to handle currency conversion when amount or currencies change
    useEffect(() => {
        if (debouncedAmount && from && to) {
            convertCurrency(debouncedAmount, from, to);
        } else {
            setExchangeValue("");
        }
    }, [debouncedAmount, from, to]); // Run when debounced amount or currency selections change    


  return (
    <section className="section">
        <div className="container mb-5">
            <div className="row align-items-center">
                <div className="col-lg-5">
                    <div>
                        <h1 className="hero-title">Currency Converter <img alt="currency-converter-icon" style={{width: "43px", height: "43px"}} src="./currency-converter-icon.png" /> </h1>
                        <p className="">Get the best rates in the market</p>
                    </div>
                </div>


                <div className="col-lg-6 custom__mt">
                        <div className="outer-shell">
                            <div className="inner__heading">
                                <h4 className="inner__heading-text" style={{color: "white"}}>Swap</h4>
                            </div>

                            <div className="currency__converter">
                                <div className="dropdown">
                                    
                                    <select 
                                        className="select-tag" 
                                        onChange={handleSelectFrom}
                                        aria-label="From currency"
                                        required 
                                        value={from}  
                                    >
                                        <option value="USD">USD</option>

                                        {currencyArray
                                            .filter((currency) => currency.symbol !== "USD") // Exclude USD from the array
                                            .map((currency, i) => (
                                                <option key={i} value={currency.symbol} data-icon={currency.img}>
                                                {currency.symbol}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <input 
                                    type="number"
                                    value={amount || ""}
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
                                        <option value="NGN">NGN</option>

                                        {currencyArray
                                            .filter((currency) => currency.symbol !== "NGN") // Exclude NGN from the array
                                            .map((currency, i) => (
                                                <option key={i} value={currency.symbol} data-icon={currency.img}>
                                                    {currency.symbol}
                                                </option>
                                            ))}
                                    </select>
                                </div>

                                <div 
                                    className="form-control currency__amount__input"
                                >{loading ? "Loading..." : exchangeValue ? exchangeValue : "Value"}</div>
                        </div>      
                    </div>
                </div>
            </div>
        </div>
        <Reviews />
    </section>
  )
}

export default Convert