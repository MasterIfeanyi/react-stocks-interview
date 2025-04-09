import React from "react"
import FAQ from "./FAQ"
import "./Send.css"
import { useState } from "react"



const SendMoney = () => {


    const banks = [
        { name: "Access Bank", code: "044" },
        { name: "First Bank", code: "011" },
        { name: "GTBank", code: "058" },
        { name: "UBA", code: "033" },
        { name: "Zenith Bank", code: "057" },
    ]

    const [formData, setFormData] = useState({
        amount: '',
        bankCode: '',
        accountNumber: '',
        narration: '',
        pin: '' // User's transaction PIN
    });

    const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
    }; 

    const [selectBank, setSelectBank] = useState("")

    const handleBankChange = (e) => {
        setSelectBank(e.target.value)
    }

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
                            <h4 className="inner__heading-text">Xender</h4>
                        </div>


                        <div className="transfer__form">
                            <div className="dropdown">
                                {/* <label htmlFor="recipientBank" className="form-label">
                                    Recipient Bank
                                </label> */}
                                <select 
                                    name="bankCode"
                                    className="select-tag" 
                                    onChange={handleChange}
                                    aria-label="enter recipient bank"
                                    required
                                    value={formData.bankCode}  
                                >
                                    <option value="">Select Bank</option>

                                    {banks.map((bank) => (
                                        <option key={bank.code} value={bank.code}>
                                            {bank.name}
                                        </option>
                                    ))}
                                </select>
                            </div>



                            <div className="amount">
                                {/* <label htmlFor="recipientBank" className="form-label">
                                    Enter Amount
                                </label> */}
                                <input 
                                    type="number" 
                                    name="amount" 
                                    id=""
                                    placeholder="Enter Amount"
                                    className="amount__input"
                                    required
                                    value={formData.amount} 
                                    onChange={handleChange}
                                />
                            </div>






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