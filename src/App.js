import React, { useState } from 'react';
import Header from './components/common/Header/Header';
import Footer from './components/common/Footer/Footer';
import IoTDeviceSimulator from './components/IoTDeviceSimulator/IoTDeviceSimulator';
import AlertSystem from './components/AlertSystem/AlertSystem';
import EncryptedDataDisplay from './components/EncryptedDataDisplay/EncryptedDataDisplay';
import DataAnalytics from './components/DataAnalytics/DataAnalytics';
import ErrorHistoryTable from './components/ErrorHistoryTable/ErrorHistoryTable';
import SmartContract from './components/SmartContract/SmartContract';
import { useErrorHistory } from './hooks/useErrorHistory';
import { generateAutoData } from './utils/dataGenerator';
import './App.css';

function App() {
  const [encryptedData, setEncryptedData] = useState([]);
  const [alerts, setAlerts] = useState([]);
  const [contractInfo, setContractInfo] = useState({});
  const { errorHistory, addErrors } = useErrorHistory();

  const handleDataGenerated = (newData, shouldReset = false) => {
    if (shouldReset) {
      setEncryptedData(newData);
      setAlerts([]);
    } else {
      setEncryptedData(prev => [...newData, ...prev].slice(0, 10));
    }
  };

  const handleAnomalyDetected = (anomalies) => {
    setAlerts(prev => [...anomalies, ...prev].slice(0, 5));
    addErrors(anomalies);
  };

  const handleContractUpdate = (info) => {
    setContractInfo(info);
  };

  const handleAutoGenerate = () => {
    const newData = generateAutoData();
    handleDataGenerated(newData, true);
  };

  return (
    <div className="app bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 min-h-screen">
      <div className="app-container">
        <Header />

        <div className="main-grid">
          <IoTDeviceSimulator 
            onDataGenerated={handleDataGenerated} 
            onAutoGenerate={handleAutoGenerate}
          />
          <AlertSystem alerts={alerts} />
        </div>

        <div className="secondary-grid">
          <EncryptedDataDisplay data={encryptedData} />
          <DataAnalytics 
            encryptedData={encryptedData} 
            onAnomalyDetected={handleAnomalyDetected} 
          />
        </div>

        <div className="full-width-section">
          <ErrorHistoryTable errorHistory={errorHistory} />
        </div>

        <div className="full-width-section">
          <SmartContract onContractUpdate={handleContractUpdate} />
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default App;