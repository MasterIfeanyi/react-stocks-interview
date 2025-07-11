import React from 'react'

const Register = () => {
  return (
    <form className='row g-3 custom-form'>
        <div className="input-group custom-input-group">
            <input
                type="text"
                className="form-control"
                placeholder="Name"
            />
        </div>
        <div className="input-group custom-input-group">
            <input
                type="email"
                className="form-control"
                placeholder="Email"
            />
        </div>
        <div className="input-group custom-input-group">
            <input
                type="password"
                className="form-control"
                placeholder="Password"
            />
        </div>
        <div className="input-group custom-input-group">
            <select
                className="form-select"
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
                className="form-select"
                id="category"
                name="category"
            >
                <option value="">Employment Type</option>
                <option value="food">Food</option>
                <option value="transport">Transport</option>
                <option value="entertainment">Entertainment</option>
                <option value="utilities">Utilities</option>
                <option value="shopping">Shopping</option>
                <option value="healthcare">Healthcare</option>
                <option value="other">Other</option>
            </select>
        </div>
    </form>
  )
}

export default Register