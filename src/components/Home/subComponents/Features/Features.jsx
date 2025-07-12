import React from 'react'

const Features = () => {




  return (
    <section>
        <div classNameName="container">
            <div className="row">
                <div className="section-title">
                    <h6>Features</h6>
                    <h1 className="display-3 lead">We've got ton of features to give you the best</h1>
                </div>
            </div>


            <div className="row g-5 my-3 text-center">
                {/* 1 */}
                <div className="col-lg-4 col-sm-6">
                    <div className="features">
                        <div className="icon">
                            <img src="./images/94.svg" alt="" />
                        </div>
                        <h5>Dedicated accountability manager</h5>
                        <p>After registration, get someone assigned to your account, an actual person who looks after you and your savings, to make sure you acheive your saving goal in no time.</p>
                    </div>
                </div>
                {/* 2 */}
                <div className="col-lg-4 col-sm-6">
                    <div className="features">
                        <div className="icon">
                            <img src="./images/95.svg" alt="" />
                        </div>
                        <h5>Save automatically</h5>
                        <p>Choose between automatic daily, weekly or monthly savings. Once you choose, our system does the rest for you. You're in control, and can always change your settings anytime.</p>
                    </div>
                </div>
                {/* 3 */}
                <div className="col-lg-4 col-sm-6">
                    <div className="features">
                        <div className="icon">
                            <img src="./images/96.svg" alt="" />
                        </div>
                        <h5>Manual Topups</h5>
                        <p>Don't fancy automatic savings? No problem, you can manually top up your savings at anytime, anywhere.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Features