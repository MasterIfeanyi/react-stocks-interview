import { useState, useEffect } from "react"
import { formatDateHeader } from "../../../util/formatHeader"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash } from "@fortawesome/free-solid-svg-icons"


import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";


const BudgetTable = () => {

    const { user } = useAuth();
    const queryClient = useQueryClient();


    // Fetch budget entries
    const { data: entries = [], isLoading, error } = useQuery({
        queryKey: ['budget'],
        queryFn: async () => {
        const response = await api.get("/budget");
        return response.data;
        },
        enabled: !!user, // Only fetch if user is authenticated
        staleTime: 1000 * 60 * 5, // 5 minutes
    });

    // Delete mutation
    const deleteMutation = useMutation({
        mutationFn: async (id) => {
        await api.delete(`/expenses/${id}`);
        },
        onSuccess: () => {
        // Invalidate and refetch budget data
        queryClient.invalidateQueries({ queryKey: ['budget'] });
        },
        onError: (error) => {
        alert("Error deleting entry: " + error.message);
        }
    });



    const getDailyExpenses = () => {
        // Get last 4 days
        const today = new Date()
        const last4days = []

        for (let i = 3; i >= 0; i--) {
            const date = new Date(today)
            date.setDate(today.getDate() - i)
            last4days.push(date.toISOString().split("T")[0])
        }

        // Group expenses by date for the last 4 days
        const dailyExpenses = last4days
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

    // Delete function
    const handleDelete = async (id) => {
        try {
            const response = await fetch(`http://localhost:3500/expenses/${id}`, {
                method: "DELETE",
            });
            if (!response.ok) throw new Error("Failed to delete entry");
            setEntries(entries.filter(entry => entry.id !== id));
        } catch (error) {
            alert("Error deleting entry: " + error.message);
        }
    };



  return (
    <div className="">
        {entries.length === 0 ? (
            <div className="text-center text-muted py-4">
                <p>No budget entries yet. Add your first entry using the form.</p>
            </div>
            ) : ( 
                <div className="table-responsive">     
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
                                        {dayData.expenses.map((expense, idx) => (
                                            <div
                                                key={expense.id}
                                                className={`d-flex justify-content-between align-items-center py-2 ${idx !== dayData.expenses.length - 1 ? " border-bottom" : ""}`}
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
                                                onClick={() => handleDelete(expense.id)}
                                                title="Delete expense"
                                            >
                                                <FontAwesomeIcon icon={faTrash} />
                                            </button>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>                    
                </div>
            )
        }
    </div>
  )
}

export default BudgetTable