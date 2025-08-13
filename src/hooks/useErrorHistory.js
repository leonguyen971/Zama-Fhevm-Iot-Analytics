import { useState } from 'react';

export const useErrorHistory = () => {
  const [errorHistory, setErrorHistory] = useState([]);

  const addErrors = (anomalies) => {
    const newErrors = anomalies.map(anomaly => ({
      ...anomaly,
      timestamp: new Date().toISOString(),
      id: Date.now() + Math.random()
    }));
    
    setErrorHistory(prev => [...newErrors, ...prev]);
  };

  return { errorHistory, addErrors };
};