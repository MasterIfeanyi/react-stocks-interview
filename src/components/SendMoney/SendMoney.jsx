import React from "react"
import FAQ from "./FAQ"
import "./Send.css"




const SendMoney = () => {


    // const renderProgressIndicator = () => {
    //     const steps = ["Amount", "Recipient", "Review", "Complete"]
    
    //     return (
    //       <div className="progress-indicator">
    //         {steps.map((step, index) => (
    //           <React.Fragment key={index}>
    //             <div
    //               className={`step ${currentStep > index + 1 ? "completed" : ""} ${currentStep === index + 1 ? "active" : ""}`}
    //             >
    //               <div className="step-circle">{currentStep > index + 1 ? "✓" : index + 1}</div>
    //               <div className="step-label">{step}</div>
    //             </div>
    //             {index < steps.length - 1 && (
    //               <div className={`step-connector ${currentStep > index + 1 ? "completed" : ""}`}></div>
    //             )}
    //           </React.Fragment>
    //         ))}
    //       </div>
    //     )
    // }


  return (
    <section className='section'>
        <div className="container mb-5">
            <div className="row align-items-center">
                <div className="col-lg-5">
                    <div>
                        <h1 className="hero-title">Send Money</h1>
                        <p className="">Distance is not a barrier at all</p>
                    </div>
                </div>



                <div className="col-lg-6">
                    <div className="outer-shell">
                        <div className="inner__heading">
                            <h4 className="inner__heading-text">Zend It</h4>
                        </div>
                    </div>
                </div>



            </div>
        </div>

        <FAQ />
    </section>
  )
}

export default SendMoney