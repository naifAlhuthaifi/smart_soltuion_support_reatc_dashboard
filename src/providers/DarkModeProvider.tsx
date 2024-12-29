import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import Cookies from 'js-cookie';

interface DarkModeContextType {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const DarkModeContext = createContext<DarkModeContextType | undefined>(undefined);

export const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error('useDarkMode must be used within a DarkModeProvider');
  }
  return context;
};

interface DarkModeProviderProps {
  children: ReactNode;
}

export const DarkModeProvider: React.FC<DarkModeProviderProps> = ({ children }) => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    // Retrieve the saved dark mode state from cookies
    const savedDarkMode = Cookies.get('darkMode');
    if (savedDarkMode !== undefined) {
      setDarkMode(savedDarkMode === 'true');
    }
  }, []);

  const toggleDarkMode = () => {
    // Toggle dark mode and save it in cookies
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      Cookies.set('darkMode', newMode.toString(), { expires: 30 }); // Persist for 30 days
      return newMode;
    });
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
