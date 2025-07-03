import { useState, useEffect } from "react"
import { formatDateHeader } from "../../../../util/formatHeader"

const BudgetTable = () => {

    const [entries, setEntries] = useState([])

    useEffect(() => {
        const fetchEntries = async () => {
            try {
                const response = await fetch("http://localhost:3500/expenses");
                const data = await response.json();
                setEntries(data);
            } catch (error) {
                console.error("Failed to fetch entries:", error);
            }
        }


        fetchEntries();

    }, [])



    const getDailyExpenses = () => {
        // Get last 7 days
        const today = new Date()
        const last7Days = []

        for (let i = 3; i >= 0; i--) {
            const date = new Date(today)
            date.setDate(today.getDate() - i)
            last7Days.push(date.toISOString().split("T")[0])
        }

        // Group expenses by date for the last 7 days
        const dailyExpenses = last7Days
        .map((date) => {
            const dayExpenses = entries.filter((expense) => expense.date === date)
            const dayTotal = dayExpenses.reduce((sum, expense) => sum + expense.amount, 0)

            return {
                date,
                expenses: dayExpenses,
                total: dayTotal,
            }
        })
        .filter((day) => day.expenses.length > 0) // Only show days with expenses

        return dailyExpenses.reverse();
    }

    // const formatDate = (dateString) => {
    //     const date = new Date(dateString)
    //     return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
    // }

    // const formatDateHeader = (dateString) => {
    //     const date = new Date(dateString)
    //     const today = new Date()
    //     const yesterday = new Date(today)
    //     yesterday.setDate(today.getDate() - 1)

    //     if (dateString === today.toISOString().split("T")[0]) {
    //         return `Today (${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()})`
    //     } else if (dateString === yesterday.toISOString().split("T")[0]) {
    //         return `Yesterday (${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()})`
    //     } else {
    //         return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
    //     }
    // }



  return (
    <div className="">
        {entries.length === 0 ? (
            <div className="text-center text-muted py-4">
                <p>No budget entries yet. Add your first entry using the form.</p>
            </div>
            ) : ( 
                <div className="table-responsive"> 
                    <table className="table table-hover">
                        {/* <thead>
                            <tr className="border-bottom">
                                <th className="py-3 cursor-pointer">Name</th>
                                <th className="py-3 cursor-pointer text-end">Price</th>
                            </tr>
                        </thead> */}

                        <div className="accordion" id="dailyExpensesAccordion">
                            {getDailyExpenses().map((dayData, index) => ( 
                                <div className="accordion-item" key={dayData.date}>
                                    <h2 className="accordion-header" id={`heading${index}`}>
                                        <button
                                            className={`accordion-button ${index !== 0 ? "collapsed" : ""}`}
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target={`#collapse${index}`}
                                            aria-expanded={index === 0 ? "true" : "false"}
                                            aria-controls={`collapse${index}`}
                                        >
                                        <div className="d-flex justify-content-between w-100 me-3">
                                            <span className="fw-bold">{formatDateHeader(dayData.date)}</span>
                                            <span className="badge bg-primary">
                                            {dayData.expenses.length} expense{dayData.expenses.length !== 1 ? "s" : ""} - ₦
                                            {dayData.total.toLocaleString()}
                                            </span>
                                        </div>
                                        </button>
                                    </h2>

                                    <div
                                        id={`collapse${index}`}
                                        className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
                                        aria-labelledby={`heading${index}`}
                                        data-bs-parent="#dailyExpensesAccordion"
                                    >
                                        <div className="accordion-body">
                                            {dayData.expenses.map((expense) => (
                                                <div
                                                    key={expense.id}
                                                    className="d-flex justify-content-between align-items-center py-2 border-bottom"
                                                >
                                                <div className="flex-grow-1">
                                                    <span className="expense-item">
                                                    {expense.description}
                                                    <span className="text-muted mx-2">
                                                        {"─".repeat(Math.max(3, 20 - expense.description.length))}
                                                    </span>
                                                    <span className="fw-bold">₦{expense.amount.toLocaleString()}</span>
                                                    </span>
                                                    <br />
                                                    <small className="text-muted">{expense.category}</small>
                                                </div>
                                                <button
                                                    className="btn btn-danger btn-sm ms-2"
                                                    
                                                    title="Delete expense"
                                                >
                                                    ✕
                                                </button>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                </div>
                            ))}
                        </div>

                    </table>
                </div>
            )
        }
    </div>
  )
}

export default BudgetTable