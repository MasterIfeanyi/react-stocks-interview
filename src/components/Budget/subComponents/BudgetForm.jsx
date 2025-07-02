import {useState} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faLock, faEye, faEyeSlash, faCalendar } from "@fortawesome/free-solid-svg-icons"

import "./BudgetForm.css"


const BudgetForm = () => {

  const [name, setName] = useState("")
  const [amount, setAmount] = useState(0)
  const [date, setDate] = useState("")
  const [category, setCategory] = useState("")

  const handleSubmit = () => {

  }


  return (
    <form onSubmit={handleSubmit} className='row g-3'>

      <div className="input-group custom-input-group">

        <input
          type="text"
          className="form-control"
          placeholder="Title"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>


      <div className="input-group custom-input-group">
        

        <input
          type="number"
          className="form-control"
          placeholder="Price"
          min="0"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>


      <div className="input-group custom-input-group">
      
        <input 
          type="date" 
          className='form-control'
          id="date"
          name="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>



      <div className="input-group custom-input-group">
        <select
          className="form-select"
          id="category"
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Select category</option>
          <option value="food">Food</option>
          <option value="transport">Transport</option>
          <option value="entertainment">Entertainment</option>
          <option value="utilities">Utilities</option>
          <option value="shopping">Shopping</option>
          <option value="healthcare">Healthcare</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className='w-100 custom-btn-group'>
        <button type="submit" className="btn btn-brand w-100">
          Add Entry
        </button>
      </div>
    </form>
  )
}

export default BudgetForm