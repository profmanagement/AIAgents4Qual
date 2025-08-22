'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { setCookie, getCookie, deleteCookie } from '@/app/utils/cookies'

interface AuthContextType {
  isAuthenticated: boolean
  login: (password: string) => boolean
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    // Check if user is already authenticated on page load
    const authStatus = getCookie('qualaisummit_auth')
    if (authStatus === 'true') {
      setIsAuthenticated(true)
    }
  }, [])

  const login = (password: string): boolean => {
    if (password === 'QualAISummit') {
      setIsAuthenticated(true)
      setCookie('qualaisummit_auth', 'true', 1) // Cookie expires in 1 day
      return true
    }
    return false
  }

  const logout = () => {
    setIsAuthenticated(false)
    deleteCookie('qualaisummit_auth')
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
