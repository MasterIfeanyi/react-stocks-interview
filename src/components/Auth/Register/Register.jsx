import "./Register.css"

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


const Register = () => {
  return (
    <form className='row g-3 custom-form mt-2 mb-2'>
        <div className="input-group custom-input-group">
            <input
                type="text"
                className="custom-form-control"
                placeholder="Name"
            />
        </div>
        <div className="input-group custom-input-group">
            <input
                type="email"
                className="custom-form-control"
                placeholder="Email"
            />
        </div>
        <div className="input-group custom-input-group">
            <input
                type="password"
                className="custom-form-control"
                placeholder="Password"
            />
        </div>
        <div className="input-group custom-input-group">
            <input
                type="date"
                className="custom-form-control"
                placeholder="Date"
            />
        </div>
        <div className="input-group custom-input-group">
            <select
                className="custom-form-select"
                id="gender"
                name="gender"
            >
                <option value="">Gender</option>
                <option value="food">Male</option>
                <option value="transport">Female</option>
            </select>
        </div>
        <div className="input-group custom-input-group">
            <select
                className="custom-form-select"
                id="category"
                name="category"
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

export default Register