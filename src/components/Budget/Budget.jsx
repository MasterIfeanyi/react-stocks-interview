import FAQ from "../SendMoney/FAQ"
import BudgetForm from "./Form/BudgetForm"
import BudgetTable from "./Table/BudgetTable"

const Budget = () => {



  return (
    <section className='section'>
        <div className="container">
            <div className="row align-items-start">
                <div className="col-lg-4 col-md-6">
                    <BudgetForm />
                </div>
                <div className="offset-lg-1 col-lg-7 col-md-6">
                    <BudgetTable />
                </div>
            </div>
        </div>
        <FAQ /> 
    </section>
  )
}

export default Budget