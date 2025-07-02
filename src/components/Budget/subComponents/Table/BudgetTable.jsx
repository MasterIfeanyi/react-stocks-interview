import { useState } from "react"


const BudgetTable = () => {

    const [entries, setEntries] = useState([])

  return (
    <div className="col-lg-8 col-md-7">
        {entries.length === 0 ? (
            <div className="text-center text-muted py-4">
                <p>No budget entries yet. Add your first entry using the form.</p>
            </div>
            ) : ( 
                <div className="table-responsive"> 
                    <table className="table table-hover">
                        <thead>
                            <tr className="border-bottom">
                                <th className="py-3 cursor-pointer">Name</th>
                                <th className="py-3 cursor-pointer text-end">Price</th>
                            </tr>
                        </thead>



                        
                    </table>
                </div>
            )
        }
    </div>
  )
}

export default BudgetTable