import axios from "../api/axios";
import MarketTable from "./MarketTable";
import { useGetLiveQuery } from '../features/stocksList/stocksListApiSlice';


const MarketWatch = () => {


    const currencyArray = ["AUDCAD", "EURGBP", "NGNUSD", "EURUSD", "GBPUSD"]


    const {
        data: list, 
        isLoading,
        isError,
        isSuccess,
        error
    } = useGetLiveQuery({currencyArray})

    if (list) {

        const dataArray = list.quotes.map((item) => {
            return { symbol:  `${item.base_currency} / ${item.quote_currency}`, price: `${item.bid}/${item.ask}` }
        })


        // save to Database
        const handleSaveLive = async (currencyArray) => {
            await axios.post("/currency/saveLive", { currencyArray })
        }

        if (dataArray.length === list.quotes.length) {
            handleSaveLive(dataArray);
        }
    }


  return (
      <section className="section">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h3 className="text-center mt-3">Market Watch</h3>
                    <p className="lead text-center">Live Rates of currencies</p>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    { isLoading && <p className="text-center">Loading...</p> }
                    {isSuccess && (
                        <div className="table-responsive">
                            <table className="table tableDesign">
                                <thead>
                                    <tr>
                                        <th scope="col" className="ps-2 py-3 text-left text-uppercase">Symbol</th>
                                        <th scope="col" className="ps-2 py-3 text-left text-uppercase">Bid price</th>
                                        <th scope="col" className="ps-2 py-3 text-left text-uppercase">Ask price</th>
                                    </tr>
                                </thead>

                                <tbody className="bg-white" id="tbody">
                                    {list.quotes.map((item, i) => (
                                        <MarketTable key={i} item={item} />
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                    {isError && <p className="text-center text-danger">{error.message}</p> }
                </div>
            </div>
        </div>
    </section>
  )
}

export default MarketWatch