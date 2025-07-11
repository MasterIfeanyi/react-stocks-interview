import {useState} from 'react'

import "./BudgetForm.css"


const BudgetForm = () => {

  const [description, setDescription] = useState("")
  const [amount, setAmount] = useState(0)
  const [date, setDate] = useState("")
  const [category, setCategory] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation (optional)
    if (!description || !amount || !date || !category) {
      alert("Please fill in all fields.");
      return;
    }

    const newEntry = {
      description,
      amount: Number(amount),
      date,
      category,
    };

    try {
      const response = await fetch("http://localhost:5000/api/budget", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "include",
        body: JSON.stringify(newEntry)
      });

      if (!response.ok) {
        throw new Error("Failed to add entry");
      }

      // Optionally clear form after successful submission
      setDescription("");
      setAmount(0);
      setDate("");
      setCategory("");
      alert("Entry added!");
    } catch (error) {
      alert("Error: " + error.message);
    }
  }

  return (
    <form onSubmit={handleSubmit} className='row g-3 custom-form'>

      <div className="input-group custom-input-group">

        <input
          type="text"
          className="form-control"
          placeholder="Title"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
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

      <div className=''>
        <button type="submit" className="btn btn-brand w-100 create-btn">
          Add Entry
        </button>
      </div>
    </form>
  )
}

export default BudgetForm