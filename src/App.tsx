// /src/App.tsx
import React from 'react';
import Dashboard from './pages/Dashboard';
import Header from './ui/Header';
import Footer from './ui/Footer';
import './index.css'; // Ensure the path matches your CSS file's location
const App: React.FC = () => {
  return (
    <><Header></Header><Dashboard /><Footer></Footer></>
    
  );
};

export default App;
