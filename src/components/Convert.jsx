import {useState} from 'react'
import axios from "../api/axios"

const Convert = () => {

    const currencyArray = [
        { name: "US dollars", symbol: "USD" },
        { name: "Japanese Yen", symbol: "JPY" },
        { name: "British pounds", symbol: "GBP" },
        { name: "Nigerian naira", symbol: "NGN" },
        {name: "European euros", symbol: "EUR"}
    ]

    const [convertedValue, setConvertedValue] = useState("")

    const [amount, setAmount] = useState("")

    const [from, setFrom] = useState("");

    const [to, setTo] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!from && !to) return 
        try {
            const response = await axios.post("/currency/getExchange", {from, to})

            const exchangeRate = response.data.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"]

            const value = exchangeRate * amount
            setConvertedValue(value);
        } catch (error) {
            console.error(error);
        }
    }

    const handleSelectFrom = (e) => setFrom(e.target.value)

    const handleSelectTo = (e) => setTo(e.target.value);

    const handleAmount = (e) => setAmount(Number(e.target.value));

    return (
        <section className="section">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <h3 className="my-3">Convert currencies</h3>
                        <p className="lead intro my-2">Get good exchange rates.</p>
                    </div>
                </div>

                <div className="row d-flex justify-content-center">
                    <div className="col-md-8">
                        <form onSubmit={handleSubmit} className="row">
                            <div className="form-group col-12">
                                <input
                                    type="text"
                                    value={amount}
                                    required
                                    onChange={handleAmount}
                                    className="form-control"
                                    placeholder="Enter Amount"
                                />
                            </div>
                            <div className="form-group col-12 d-flex">
                                <select required className="me-2 form-select select-tag" onChange={handleSelectFrom}>
                                    <option>Choose a currency</option>
                                    {currencyArray.map((currency, i) => (
                                        <option key={i} value={currency.symbol}>{currency.name}</option>
                                    ))}
                                </select>

                                <select required className='form-select select-tag' onChange={handleSelectTo}>
                                    <option>Choose a currency</option>
                                    {currencyArray.map((currency, i) => (
                                        <option key={i} value={currency.symbol}>{ currency.name }</option>
                                    ))}
                                </select>
                            </div>
                            <div className="text-center">
                                <button className="btn btn-primary form-button">
                                    Convert
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="col-md-4">
                        <div className="item">
                            {convertedValue ? Math.round(convertedValue) : "Answer"}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Convert