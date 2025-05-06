import React, { createContext, useState, useEffect, useContext } from 'react';

// Create the context
const AuthContext = createContext();

// Create a provider component
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null); // Can store user info later
  const [loading, setLoading] = useState(true); // To check token on initial load

  useEffect(() => {
    // Check for the fake token in localStorage on initial load
    const token = localStorage.getItem('fakeToken');
    if (token) {
      // In a real app, you'd validate the token here
      setIsAuthenticated(true);
      // You could potentially decode the fake token to get user info if stored there
      // For now, just set a generic user
      setUser({ name: 'Usuário Logado' });
    }
    setLoading(false); // Finished checking token
  }, []);

  const login = (token, userData = { name: 'Usuário Logado' }) => {
    localStorage.setItem('fakeToken', token);
    setIsAuthenticated(true);
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem('fakeToken');
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout, loading }}>
      {!loading && children} {/* Render children only after checking token */}
    </AuthContext.Provider>
  );
};

// Custom hook to use the auth context
export const useAuth = () => {
  return useContext(AuthContext);
};
