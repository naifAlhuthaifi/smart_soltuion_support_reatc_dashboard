// /src/pages/Dashboard.tsx
import React from 'react';
import { Box, Grid, Paper, Typography, Button } from '@mui/material';
import { useGraphs } from '../providers/GraphsProvider';  // Import context provider
import GraphComponent from '../ui/Graph';                         // Graph component
import InfoWidgets from '../ui/InfoBar';
import { useDarkMode } from '../providers/DarkModeProvider';

const Dashboard: React.FC = () => {
  const { graphData } = useGraphs();
  const { darkMode } = useDarkMode();
  return (
   
    
    <div className={` ${darkMode ? "bg-gray-800 text-white py-4" : "bg-gray-100 text-black"}`}>
      <InfoWidgets />
      <GraphComponent />
    </div>
  );
};

export default Dashboard;
