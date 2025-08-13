import React, { useState, useEffect } from 'react';
import { analyzeAnomalies } from '../../utils/anomalyDetector';
import './DataAnalytics.css';

const DataAnalytics = ({ encryptedData, onAnomalyDetected }) => {
  const [analysisResults, setAnalysisResults] = useState([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  useEffect(() => {
    if (encryptedData.length > 0) {
      setAnalysisResults([]);
      analyzeData();
    } else {
      setAnalysisResults([]);
    }
  }, [encryptedData]);

  const analyzeData = () => {
    setIsAnalyzing(true);
    
    setTimeout(() => {
      const results = encryptedData.map(analyzeAnomalies);
      setAnalysisResults(results);
      setIsAnalyzing(false);
      
      const highRiskDevices = results.filter(r => r.riskLevel === 'high');
      if (highRiskDevices.length > 0) {
        onAnomalyDetected(highRiskDevices);
      }
    }, 2000);
  };

  return (
    <div className="bg-gray-800 rounded-lg p-6 shadow-xl h-[888px]">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                        <i className="fas fa-chart-line mr-2 text-purple-400"></i>
                        FHEVM Analytics Results
                    </h3>
                    
                    {isAnalyzing ? (
                        <div className="text-center py-8 mt-[150px]">
                            <i className="fas fa-cog fa-spin text-4xl text-blue-400 mb-4"></i>
                            <p className="text-white">Analyzing encrypted data with FHEVM...</p>
                            <p className="text-gray-400 text-sm mt-2">Processing homomorphic computations</p>
                        </div>
                    ) : analysisResults.length > 0 ? (
                        <div className="space-y-4">
                            {analysisResults.map((result, index) => (
                                <div key={index} className="bg-gray-700 rounded-lg p-4 h-[241px]">
                                    <div className="flex items-center justify-between mb-3">
                                        <h4 className="font-semibold text-white">{result.deviceName}</h4>
                                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                                            result.riskLevel === 'high' ? 'bg-red-500 text-white' :
                                            result.riskLevel === 'medium' ? 'bg-yellow-500 text-black' :
                                            'bg-green-500 text-white'
                                        }`}>
                                            {result.riskLevel.toUpperCase()} RISK
                                        </span>
                                    </div>
                                    
                                    <div className="grid grid-cols-2 gap-4 mb-3">
                                        <div>
                                            <p className="text-gray-300 text-sm">Anomaly Score</p>
                                            <p className="text-white font-bold text-lg">{result.anomalyScore}/100</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-300 text-sm">Detected Issues</p>
                                            <p className="text-white">{result.anomalies.length || 'None'}</p>
                                        </div>
                                    </div>
                                    
                                    {result.anomalies.length > 0 && (
                                        <div className="mb-3">
                                            <p className="text-gray-300 text-sm mb-1">Anomalies:</p>
                                            <div className="flex flex-wrap gap-2">
                                                {result.anomalies.map((anomaly, i) => (
                                                    <span key={i} className="bg-red-600 text-white px-2 py-1 rounded text-xs">
                                                        {anomaly}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                    
                                    <div className="text-xs text-gray-400">
                                        <p>Device: {result.deviceId}</p>
                                        <p>Analysis: {new Date(result.analysisTime).toLocaleString('vi-VN')}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-8 text-gray-400">
                            <i className="fas fa-database text-4xl mb-4"></i>
                            <p>No data to analyze yet</p>
                            <p className="text-sm">Generate IoT data to see analytics results</p>
                        </div>
                    )}
                </div>
  );
};

export default DataAnalytics;