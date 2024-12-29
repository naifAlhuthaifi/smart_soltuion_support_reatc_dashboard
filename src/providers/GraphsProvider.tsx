import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { useLocalization } from './LocalizationContext';

interface GraphsContextType {
  graphData: any;  // Replace with actual data type if necessary
}

const GraphsContext = createContext<GraphsContextType | undefined>(undefined);

export const useGraphs = () => {
  const context = useContext(GraphsContext);
  if (!context) {
    throw new Error('useGraphs must be used within a GraphsProvider');
  }
  return context;
};

interface GraphsProviderProps {
  children: ReactNode;
}

export const GraphsProvider: React.FC<GraphsProviderProps> = ({ children }) => {
  const { language, translate } = useLocalization();

  // State to hold the graph data
  const [graphData, setGraphData] = useState<any>(null);

  useEffect(() => {
    // Update graph data when language changes
    const updatedGraphData = {
      radarData: {
        labels: [
          translate('January||يناير'),
          translate('February||فبراير'),
          translate('March||مارس'),
          translate('April||أبريل'),
          translate('May||مايو')
        ],
        datasets: [
          {
            label: translate('Performance||الأداء'),
            data: [65, 59, 80, 81, 56],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
      },
      // Bar Chart Data
      barData: {
        labels: [
          translate('January||يناير'),
          translate('February||فبراير'),
          translate('March||مارس'),
          translate('April||أبريل'),
          translate('May||مايو')
        ],
        datasets: [
          {
            label: translate('Sales||المبيعات'),
            data: [65, 59, 80, 81, 56], // Example sales data
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
      },

      // Line Chart Data
      lineData: {
        labels: [
          translate('January||يناير'),
          translate('February||فبراير'),
          translate('March||مارس'),
          translate('April||أبريل'),
          translate('May||مايو')
        ],
        datasets: [
          {
            label: translate('Revenue||الإيرادات'),
            data: [50, 60, 70, 80, 90], // Example revenue data
            borderColor: 'rgba(54, 162, 235, 1)',
            fill: false,
          },
        ],
      },

      // Pie Chart Data
      pieData: {
        labels: [
          translate('Red||أحمر'),
          translate('Blue||أزرق'),
          translate('Yellow||أصفر')
        ],
        datasets: [
          {
            data: [300, 50, 100], // Example data for pie chart
            backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)'],
            borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
            borderWidth: 1,
          },
        ],
      },
    };

    // Update the state with the translated data
    setGraphData(updatedGraphData);
  }, [language,]);  // Re-run when the language changes

  return (
    <GraphsContext.Provider value={{ graphData }}>
      {children}
    </GraphsContext.Provider>
  );
};
