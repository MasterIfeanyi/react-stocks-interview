import React from "react"
import FAQ from "./FAQ"
import { toast } from "react-toastify"
import "./Send.css"
import { useState } from "react"
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';



const SendMoney = () => {


    

    const validateForm = () => {
        for (let key in formData) {
            if (!formData[key]?.trim()) {
                toast.error(`Please fill in the ${key} field.`, {
                    position: "top-right",
                    autoClose: 3000
                });
                return false;
            }
        }
        return true;
    };

    const [showTestCardModal, setShowTestCardModal] = useState(false);

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

    

    
    const handleFlutterPayment = useFlutterwave(config);

    
    const proceedToPayment = () => {

        if (!validateForm()) return;

        setShowTestCardModal(false);
        handleFlutterPayment({
          callback: (response) => {
            console.log(response);
            closePaymentModal();
          },
          onClose: () => {},
        });
    };

    

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
                        


                        <div className="transfer__form">
                            

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
                                <textarea 
                                    className="narration__textshell" 
                                    name="narration" 
                                    placeholder="Narration" 
                                    required
                                    value={formData.narration}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="send__button__container">
                                <button 
                                    className="send__button"
                                    onClick={() => setShowTestCardModal(true)}>
                                    Pay with Google
                                </button>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>


        {showTestCardModal && (
            <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 1000,
            }}
            onClick={() => setShowTestCardModal(false)}
            >
                <div
                    style={{
                    background: '#fff',
                    padding: '20px',
                    borderRadius: '8px',
                    maxWidth: '400px',
                    width: '90%',
                    }}
                    onClick={(e) => e.stopPropagation()}
                >
                        <h2>Test Card Details</h2>
                        <p>use this to test</p>
                        <ul style={{ listStyleType: 'none', padding: 0 }}>
                        <li><strong>Authentication:</strong> Test</li>
                        <li><strong>Card Type:</strong> Mastercard</li>
                        <li><strong>Card Number:</strong> 5531 8866 5214 2950</li>
                        <li><strong>Expiry Date:</strong> 09/32</li>
                        <li><strong>CVV:</strong> 564</li>
                        <li><strong>OTP:</strong> 12345</li>
                        <li><strong>PIN:</strong> 3310</li>
                        </ul>
                        <div style={{ marginTop: '15px' }}>
                        <button className="primary-button" onClick={proceedToPayment} style={{ marginRight: '10px' }}>
                            Proceed to Payment
                        </button>
                        <button className="cancel-button" onClick={() => setShowTestCardModal(false)}>
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        )}

        <FAQ />
    </section>
  )
}

export default SendMoney