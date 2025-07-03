import BudgetForm from "./subComponents/Form/BudgetForm"
import BudgetTable from "./subComponents/Table/BudgetTable"

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
    </section>
  )
}

export default Budget