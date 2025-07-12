import "./Login.css"
import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/AuthProvider';
import api from '../../../api/axios';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    

    const loginMutation = useMutation({
        mutationFn: (credentials) => api.post('/auth/login', credentials),
        onSuccess: (data) => {
            login(data.data.user);
            navigate('/budget');
        },
        onError: (error) => {
            setError(error.response?.data?.message || 'Login failed');
        },
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        loginMutation.mutate({ email, password });
    };

  return (
    <form className='row g-3 custom-form my-2' onSubmit={handleSubmit}>
        <div className="input-group custom-input-group">
            <input
                type="email"
                className="custom-form-control"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
        </div>
        <div className="input-group custom-input-group">
            <input
                type="password"
                className="custom-form-control"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
        </div>
        <div className=''>
            <button 
                type="submit" 
                className="btn btn-brand w-100 create-btn"
                disabled={loginMutation.isPending}
            >
                Add Entry
            </button>
        </div>
    </form>
  )
}

export default Login