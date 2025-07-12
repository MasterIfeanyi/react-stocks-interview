import "./Register.css"

import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import api from '../../api';
import { useNavigate } from 'react-router-dom';

const categories = [
  { value: "", label: "Employment Type" },
  { value: "teacher", label: "Teacher" },
  { value: "musician", label: "Music Artist" },
  { value: "designer", label: "UI Design" },
  { value: "developer", label: "Software Development" },
  { value: "engineer", label: "Engineer" },
  { value: "doctor", label: "Doctor" },
  { value: "other", label: "Other" },
];


const Register = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        dob: '',
        gender: '',
        employmentType: ''
    });

    const registerMutation = useMutation({
        mutationFn: async (userData) => {
            const response = await api.post('/auth/register', userData);
            return response.data;
        },
        onSuccess: (data) => {
            // Clear all form fields
            setFormData({
                name: '',
                email: '',
                password: '',
                dob: '',
                gender: '',
                employmentType: ''
            });
            alert('Registration successful! Please login.');
            navigate('/login');
        },
        onError: (error) => {
            alert(`Registration failed: ${error.response?.data?.message || error.message}`);
        }
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
        ...prev,
        [name]: value
        }));
    };

    

    const handleSubmit = (e) => {
        e.preventDefault();


        registerMutation.mutate(formData);
    }




  return (
    <form onSubmit={handleSubmit} className='row g-3 custom-form mt-2 mb-2'>
        <div className="input-group custom-input-group">
            <input
                type="text"
                className="custom-form-control"
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
            />
        </div>
        <div className="input-group custom-input-group">
            <input
                type="email"
                className="custom-form-control"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
            />
        </div>
        <div className="input-group custom-input-group">
            <input
                type="password"
                className="custom-form-control"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
            />
        </div>
        <div className="input-group custom-input-group">
            <input
                type="date"
                className="custom-form-control"
                placeholder="Date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
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
                id="employmentType"
                name="employmentType"
                value={formData.employmentType}
                onChange={handleChange}
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