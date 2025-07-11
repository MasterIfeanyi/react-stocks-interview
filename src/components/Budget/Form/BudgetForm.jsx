import {useState} from 'react'
import "./BudgetForm.css"

const categories = [
  { value: "", label: "Employment Type" },
  { value: "food", label: "Food" },
  { value: "transport", label: "Transport" },
  { value: "entertainment", label: "Entertainment" },
  { value: "utilities", label: "Utilities" },
  { value: "shopping", label: "Shopping" },
  { value: "healthcare", label: "Healthcare" },
  { value: "other", label: "Other" },
];


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
          {categories.map((each) => (
            <option key={each.label} value={each.value}>
              {each.label}
            </option>
          ))}
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