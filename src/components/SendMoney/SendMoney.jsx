import React from "react"
import FAQ from "./FAQ"
import "./Send.css"
import { useState } from "react"
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';



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
        phoneNumber: '',
        narration: '',
        name:'',
        email: ''
    });


    const config = {
        public_key: process.env.REACT_APP_FLW_PUBLIC_KEY,
        tx_ref: Date.now(),
        amount: formData.amount,
        currency: "NGN",
        payment_options: 'card,banktransfer,mobilemoney,ussd,googlepay',
        customer: {
            email: formData.email,
            phone_number: formData.phoneNumber,
            narration: formData.narration,
        },
        customizations: {
            title: "Payment Page",
            description: "Choose your preferred payment method"
        },
        callback: (response) => {
            closePaymentModal();
        },
    }


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

    const handleFlutterPayment = useFlutterwave(config);

    // {
    //     callback: (response) => {
    //        console.log(response);
    //         closePaymentModal()
    //     },
    //     onClose: () => {},
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



                <div className="col-lg-6 custom__mt">
                    <div className="outer-shell">
                        <h4 className="inner__heading-text">Xender</h4>
                        {/* <div className="inner__heading">
                        </div> */}


                        <div className="transfer__form">
                            {/* <div className="dropdown">
                                <label htmlFor="recipientBank" className="form-label">
                                    Recipient Bank
                                </label>
                                <select 
                                    name="bankCode"
                                    className="select-tag" 
                                    onChange={handleChange}
                                    aria-label="enter recipient bank"
                                    required
                                    value={formData.bankCode}  
                                >
                                    <option value="" disabled>Select Bank</option>

                                    {banks.map((bank) => (
                                        <option key={bank.code} value={bank.code}>
                                            {bank.name}
                                        </option>
                                    ))}
                                </select>
                            </div> */}

                            <div className="amount">
                                <input 
                                    type="text" 
                                    name="name" 
                                    placeholder="Enter Your Name"
                                    id="" 
                                    className="amount__input"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </div>


                            <div className="amount">
                                {/* <label htmlFor="recipientBank" className="form-label">
                                    Enter Amount
                                </label> */}
                                <input 
                                    type="email" 
                                    name="email" 
                                    id=""
                                    placeholder="Enter Your Email"
                                    className="amount__input"
                                    required
                                    value={formData.email} 
                                    onChange={handleChange}
                                />
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

                            <div className="narration">
                                <textarea className="narration__textshell" name="" placeholder="Narration" />
                            </div>

                            <div className="send__button__container">
                                <button 
                                    className="send__button"
                                    onClick={() => {
                                        handleFlutterPayment()
                                    }}>
                                    Pay with Google
                                </button>
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