import "./Features.css"

const Features = () => {




  return (
    <section className='section' style={{overflow: "hidden"}}>
        <div classNameName="container">
            <div className="row">
                <div className="section-title">
                    <h6>Features</h6>
                    <h1 className="display-3 lead">We've got ton of features to give you the best</h1>
                </div>
            </div>


            <div className="row g-5 my-3 text-center justify-content-center">
                {/* 2 */}
                <div className="col-lg-5 col-sm-6">
                    <div className="features">
                        <div className="icon">
                            <img src="./images/95.svg" alt="" />
                        </div>
                        <h6>Save automatically</h6>
                        <p>Keep track of daily, weekly or monthly expenses. Once you choose, our system does the rest for you.</p>
                        <a href="">
                            <img src="./images/56.svg" alt="" style={{width: "20px;", height: "20px"}} />
                        </a>
                    </div>
                </div>
                {/* 3 */}
                <div className="col-lg-5 col-sm-6">
                    <div className="features">
                        <div className="icon">
                            <img src="./images/96.svg" alt="" />
                        </div>
                        <h6>Currency Converter</h6>
                        <p>You can manually check exchange rates at anytime, anywhere.</p>
                        <a href="">
                            <img src="./images/56.svg" alt="" style={{width: "20px;", height: "20px"}} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Features