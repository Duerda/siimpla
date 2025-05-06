import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from './contexts/AuthContext';

// Import Components and Pages
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ToDoList from './pages/ToDoList';
import Converter from './pages/Converter';
import RemoveBackground from './pages/RemoveBackground'; // Placeholder page
import QrGenerator from './pages/QrGenerator'; // New QR Generator page

// Styled component for the main layout
const AppLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex-grow: 1;
  /* Padding-top is handled globally in GlobalStyle to avoid header overlap */
`;

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

// App Component with Routing
function App() {
  return (
    <Router>
      <AppLayout>
        <Header />
        <MainContent>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            {/* TODO: Add Sign-up route if needed */}

            {/* Protected Routes */}
            <Route
              path="/dashboard"
              element={<ProtectedRoute><Dashboard /></ProtectedRoute>}
            />
            <Route
              path="/todo-list"
              element={<ProtectedRoute><ToDoList /></ProtectedRoute>}
            />
            <Route
              path="/converter"
              element={<ProtectedRoute><Converter /></ProtectedRoute>}
            />
            <Route
              path="/qr-generator" // Route for QR Generator
              element={<ProtectedRoute><QrGenerator /></ProtectedRoute>}
            />
            <Route
              path="/remove-background" // Route for placeholder
              element={<ProtectedRoute><RemoveBackground /></ProtectedRoute>}
            />

            {/* Fallback for unknown routes (optional) */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </MainContent>
        <Footer />
      </AppLayout>
    </Router>
  );
}

export default App;
