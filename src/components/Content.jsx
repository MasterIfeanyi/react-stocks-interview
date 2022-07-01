import { useGetStocksQuery } from '../features/stocksList/stocksListApiSlice';
import TableData from './TableData';
import axios from "../api/axios";



const Content = () => {

    const tickerArray = [
        "AAPL",
        "TSLA",
        "NKE",
        "MSFT",
        "AMZN",
        "PLTR",
        "BYND",
        "BX",
        "GOOGL",
        "JPM",
        "META"
    ]

    // const type = "monthly";

    let {
        data: list,
        isLoading,
        isError, 
        isSuccess,
        error
    } = useGetStocksQuery({tickerArray});
    

    if (list) {

        const dataArray = list.map((item) => {
            return { name: item.name, price: item.price }
        })


        // save to Database
        const handleSaveStocks = async (tickerArray) => {
            await axios.post("/stocks/saveStocks", { tickerArray })
        }

        if(dataArray.length === list.length) {
            handleSaveStocks(dataArray);
        }

    }
    

  return (
    <section className="section">
        <div className="container">
              
            <div className="row">
                <div className="col-12">
                    <h3 className="text-center mt-3">Stock Prices</h3>
                    <p className="lead intro my-2 text-center">Get real-time data about all your favourite stocks in one place</p>
                </div>
            </div>
              
            <div className="row d-flex justify-content-center">
                <div className="col-12">
                    {isLoading && (<p className="text-center">Loading...</p>)}
                    {isSuccess && (
                        <div className="table-responsive">
                            <table className="table tableDesign">
                                <thead>
                                    <tr>
                                        <th scope="col" className="ps-2 py-3 text-left text-uppercase">Stocks</th>
                                        <th scope="col" className="ps-2 py-3 text-left text-uppercase">Close price</th>
                                    </tr>
                                </thead>
                            
                                <tbody className="bg-white" id="tbody">
                                {list.map((item, i) => (
                                    <TableData key={i} item={item} />
                                ))}
                                </tbody>
                            </table>
                        </div>
                    )}  
                    {isError && (<p className="text-center text-danger">An error occured {error.error}</p>)}                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default Content