import "./Account.css"

const Account = () => {

  return (
    <section>
        <div class="container cta-container">
            <div class="row cta-padding" style={{backgroundColor: "black", color: "white"}}>
                <div class="col-lg-6">
                    <h6>Ready, set...go!</h6>
                    <h1 class="fs-2">Plan for your future <span>now !</span></h1>
                </div>
                {/* <div class="col-lg-6 offset-lg-1">
                    <div class="fs-6 my-4" style={{fontWeight: "500"}}>
                        <a href="" class="btn btn-brand" style={{borderRadius: "6px"}}>
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