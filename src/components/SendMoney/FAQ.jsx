import React from 'react'
import "./FAQ.css"

const FAQ = () => {


    
  return (
    <div className="container">
        <div className="intro-header my-5">
            <h3 className='text-center'>FREQUENTLY ASKED QUESTIONS</h3>
        </div>
        <div className="accordion accordion-flush" id="accordionFlushExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingOne">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    Where is Mustard Available ?
                </button>
                </h2>
                <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">Mustard provides global financial services to immigrants. Mustard is available in Canada, Europe, the United Kingdom and the United States. We are expanding to more countries with tailored services soon and we will keep you informed.</div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                    How does Mustard work ?
                </button>
                </h2>
                <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">Download the Mustard app on your Android or iPhone mobile device and sign up for free. Verify your identity and add money into your Mustard account by topping up via your card or bank account. Choose your destination country and currency. Enter your recipient's details and approve the payment instruction. Learn more</div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                    Is Mustard a bank ?
                </button>
                </h2>
                <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">Mustard is a financial technology company and is not a bank. RightCard Payment Services Limited is registered with the Financial Conduct Authority, in the UK as an Electronic Money Institution. In Canada, LemFi is registered and regularised by the Financial Transactions and Report Analysis Centre of Canada. In the United States, the remittance and bank services program is sponsored by Community Federal Savings Bank</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FAQ