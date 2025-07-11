import "./Account.css"

const Account = () => {

  return (
    <section>
        <div className="container">
            <div className="row cta-container cta-padding" style={{backgroundColor: "#212529", color: "white"}}>
                <div className="col-lg-6">
                    <h6>Ready, set...go!</h6>
                    <h1 className="fs-2">Plan for your future <span>now !</span></h1>
                </div>
                {/* <div className="col-lg-6 offset-lg-1">
                    <div className="fs-6 my-4" style={{fontWeight: "500"}}>
                        <a href="" className="btn btn-brand" style={{borderRadius: "6px"}}>
                            Create free account
                        </a>
                    </div>
                </div> */}
            </div>
        </div>
    </section>
  )
}

export default Account