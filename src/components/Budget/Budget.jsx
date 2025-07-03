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
                <div className="col-lg-8 col-md-7">
                    <BudgetTable />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Budget