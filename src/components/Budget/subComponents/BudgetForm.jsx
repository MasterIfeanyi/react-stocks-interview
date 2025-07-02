import {useState} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faLock, faEye, faEyeSlash, faCalendar } from "@fortawesome/free-solid-svg-icons"


const BudgetForm = () => {

  const [name, setName] = useState("")
  const [amount, setAmount] = useState(0)
  const [date, setDate] = useState("")
  const [category, setCategory] = useState("")

  const handleSubmit = () => {

  }


  return (
    <form onSubmit={handleSubmit} className='row g-3 px-3'>

      <div className="input-group custom-input-group">
        <span className="input-group-text bg-white border-end-0">
          <FontAwesomeIcon icon={faEnvelope} />
        </span>

        <input
          type="text"
          className="form-control border-start-0"
          placeholder="Enter your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>


      <div className="input-group custom-input-group">
        <span className="input-group-text bg-white border-end-0">
          <FontAwesomeIcon icon={faEnvelope} />
        </span>

        <input
          type="number"
          className="form-control border-start-0"
          placeholder="Price"
          min="0"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>


      <div className="input-group custom-input-group">
        <span className="input-group-text bg-white border-end-0">
          <FontAwesomeIcon icon={faCalendar} />
        </span>

        <input 
          type="date" 
          className='form-control border-start-0'
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

      <button type="submit" className="btn btn-primary w-100">
        Add Entry
      </button>
    </form>
  )
}

export default BudgetForm