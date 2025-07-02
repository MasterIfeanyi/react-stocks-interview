import BudgetForm from "./subComponents/BudgetForm"

const Budget = () => {



  return (
    <section className='section'>
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-4 col-md-6">
                    <BudgetForm />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Budget