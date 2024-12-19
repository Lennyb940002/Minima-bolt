import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthForm } from './components/auth/AuthForm';
import { Header } from './components/layout/Header';
import { EcommerceDashboard } from './components/dashboard/EcommerceDashboard';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authType, setAuthType] = useState<'login' | 'register'>('login');

  const handleAuth = (email: string, password: string) => {
    // TODO: Implement actual authentication
    console.log('Auth attempt:', { email, password, type: authType });
    setIsAuthenticated(true);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-4">
        <AuthForm
          type={authType}
          onSwitch={() => setAuthType(authType === 'login' ? 'register' : 'login')}
          onSubmit={handleAuth}
        />
      </div>
    );
  }

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-black text-white">
        <Header />
        <main className="max-w-7xl mx-auto py-8">
          <Routes>
            <Route path="/ecommerce" element={<EcommerceDashboard />} />
            {/* Ajoutez d'autres routes ici */}
            <Route path="/" element={<Navigate to="/ecommerce" replace />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;