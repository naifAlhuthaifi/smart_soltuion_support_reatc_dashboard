import React from 'react';
import { useDarkMode } from '../providers/DarkModeProvider';
import { Line, Pie, Bar, Radar } from 'react-chartjs-2';
import { useLocalization } from  "../providers/LocalizationContext.tsx"; // Adjust the path accordingly

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  RadialLinearScale,  // Import RadialLinearScale for Radar chart
  BarElement,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  ArcElement,
  RadarController, // Correct Radar controller import
} from 'chart.js';
import { useGraphs } from '../providers/GraphsProvider'; // Import the context hook

// Register components
ChartJS.register(
  CategoryScale,
  LinearScale,
  RadialLinearScale, // Register RadialLinearScale for Radar chart
  BarElement,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  ArcElement,
  RadarController // Register RadarController for Radar chart
);

const GraphComponent: React.FC = () => {
  const { language, setLanguage, translate } = useLocalization();
  // Access graph data from context
  const { graphData } = useGraphs();
  const { darkMode } = useDarkMode();
  
  // Chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const, // Type assertion to resolve the type mismatch
      },
      title: {
        display: true,
        text:translate( 'Graph Dashboard || لوحة تحكم الرسوم البيانية'),
        
        
      },
    },
  };

  // Check if graph data is available before rendering
  if (!graphData || !graphData.barData || !graphData.lineData || !graphData.pieData || !graphData.radarData) {
    return <div>Loading chart data...</div>; // Display loading message if data is not available
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-14 py-4">
      {/* Bar Chart */}
      <div className={`col-span-1 ${darkMode ? "bg-gray-800 text-white py-4" : "bg-gray-100 text-black"}`}>
        <Bar data={graphData.barData} options={options} />
      </div>

      {/* Line Chart */}
      <div className={`col-span-1 ${darkMode ? "bg-gray-800 text-white py-4" : "bg-gray-100 text-black"}`}>
        <Line data={graphData.lineData} options={options} />
      </div>

      {/* Pie Chart */}
      <div className={`col-span-1 ${darkMode ? "bg-gray-800 text-white py-4" : "bg-gray-100 text-black"}`}>
        <Pie data={graphData.pieData} options={options} />
      </div>

      {/* Radar Chart */}
      <div className={`col-span-1 ${darkMode ? "bg-gray-800 text-white py-4" : "bg-gray-100 text-black"}`}>
        <Radar data={graphData.radarData} options={options} />
      </div>
    </div>
  );
};

export default GraphComponent;
