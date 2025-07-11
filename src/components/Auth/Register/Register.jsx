import React from 'react'
import "./Register.css"

const Register = () => {
  return (
    <form className='row g-3 custom-form mt-2 mb-5'>
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