import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthProvider } from './contexts/AuthContext';
import GlobalStyle from './globalStyles'; // Import GlobalStyle

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <GlobalStyle /> {/* Add GlobalStyle here */}
      <App />
    </AuthProvider>
  </React.StrictMode>
);

