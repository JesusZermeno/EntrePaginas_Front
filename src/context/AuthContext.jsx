import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState('normal');
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem('isLoggedIn');
    const storedRole = localStorage.getItem('userRole');
    const storedUserData = localStorage.getItem('userData');
    
    setIsLoggedIn(stored === 'true');
    setUserRole(storedRole || 'normal');
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
  }, []);

  const login = (userInfo = null) => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
    
    if (userInfo) {
      setUserRole(userInfo.rol || 'normal');
      setUserData(userInfo);
      localStorage.setItem('userRole', userInfo.rol || 'normal');
      localStorage.setItem('userData', JSON.stringify(userInfo));
    }
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUserRole('normal');
    setUserData(null);
    localStorage.setItem('isLoggedIn', 'false');
    localStorage.removeItem('userRole');
    localStorage.removeItem('userData');
    localStorage.removeItem('cart'); // Clear cart on logout
  };

  const isAdmin = () => userRole === 'admin';

  return (
    <AuthContext.Provider value={{ 
      isLoggedIn, 
      login, 
      logout, 
      userRole, 
      userData, 
      isAdmin 
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
