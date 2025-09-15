// app/components/PasswordProtection.tsx
'use client';

import { useState, useEffect } from 'react';
import { AUTH_CONFIG } from '../config/auth';

interface PasswordProtectionProps {
  children: React.ReactNode;
}

export default function PasswordProtection({ children }: PasswordProtectionProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  // Removed separate loading state to avoid being stuck on static export

  useEffect(() => {
    try {
      const authStatus = typeof window !== 'undefined' ? localStorage.getItem(AUTH_CONFIG.STORAGE_KEY) : null;
      const authTime = typeof window !== 'undefined' ? localStorage.getItem(`${AUTH_CONFIG.STORAGE_KEY}_time`) : null;
      if (authStatus === 'true' && authTime) {
        const currentTime = Date.now();
        const authTimestamp = parseInt(authTime);
        if (AUTH_CONFIG.SESSION_TIMEOUT === 0 || (currentTime - authTimestamp) < AUTH_CONFIG.SESSION_TIMEOUT) {
          setIsAuthenticated(true);
        } else {
          localStorage.removeItem(AUTH_CONFIG.STORAGE_KEY);
          localStorage.removeItem(`${AUTH_CONFIG.STORAGE_KEY}_time`);
        }
      }
    } catch {}
  }, []);

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === AUTH_CONFIG.WEBSITE_PASSWORD) {
      setIsAuthenticated(true);
      localStorage.setItem(AUTH_CONFIG.STORAGE_KEY, 'true');
      localStorage.setItem(`${AUTH_CONFIG.STORAGE_KEY}_time`, Date.now().toString());
      setError('');
    } else {
      setError('Incorrect password. Please try again.');
      setPassword('');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem(AUTH_CONFIG.STORAGE_KEY);
    localStorage.removeItem(`${AUTH_CONFIG.STORAGE_KEY}_time`);
    setPassword('');
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{AUTH_CONFIG.WEBSITE_TITLE}</h1>
            <p className="text-gray-600">Password Protected Access</p>
          </div>
          
          <form onSubmit={handlePasswordSubmit} className="space-y-6">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Enter Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter website password"
                required
                autoFocus
              />
            </div>
            
            {error && (
              <div className="text-red-600 text-sm text-center bg-red-50 p-3 rounded-md">
                {error}
              </div>
            )}
            
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
            >
              Access Website
            </button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500">
              {AUTH_CONFIG.CONTACT_INFO}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Logout button */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors text-sm shadow-lg"
          title="Logout from website"
        >
          Logout
        </button>
      </div>
      
      {/* Main content */}
      {children}
    </div>
  );
}
