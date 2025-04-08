import React from 'react'
import "./FAQ.css"

const FAQ = () => {


    
  return (
    <div class="container">
        <div class="intro-header">
            <h3 className='text-center'>FREQUENTLY ASKED QUESTIONS</h3>
        </div>
        <div class="accordion accordion-flush" id="accordionFlushExample">
            <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingOne">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    Where is Mustard Available ?
                </button>
                </h2>
                <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">LemFi provides global financial services to immigrants. LemFi is available in Canada, Europe, the United Kingdom and the United States. We are expanding to more countries with tailored services soon and we will keep you informed.</div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                    What is spot trading
                </button>
                </h2>
                <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">Spot trading is the buying and selling of assets at their current markett price.</div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                    What is a block chain
                </button>
                </h2>
                <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">Blockchain is a sophisticated database system designed to securely record transactions across many computers, these transactions are grouped into blocks, these blocks are chained together in a chronological order to create a tamper-proof record.</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FAQ