// src/components/AuthProvider.js
import { useState, useEffect, createContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import api from '../api';

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  
  // This query will run on app load and check if user is authenticated
  const { data, isLoading, error } = useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      try {
        const response = await api.get('/auth/me');
        return response.data.user;
      } catch (err) {
        return null;
      }
    },
    staleTime: 1000 * 60 * 60, // 1 hour
  });

  useEffect(() => {
    if (data) {
      setUser(data);
    }
  }, [data]);

  const login = async (credentials) => {
    const response = await api.post('/login', credentials);
    setUser(response.data.user);
    return response.data.user;
  };

  const logout = async () => {
    await api.post('/auth/logout');
    setUser(null);
  };

  const register = async (userData) => {
    const response = await api.post('/register', userData);
    setUser(response.data.user);
    return response.data.user;
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, error, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
}