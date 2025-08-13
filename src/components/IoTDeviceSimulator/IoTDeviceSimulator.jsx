import React, { useState } from 'react';
import { useDeviceData } from '../../hooks/useDeviceData';
import { useAutoGenerate } from '../../hooks/useAutoGenerate';
import { generateEncryptedData } from '../../utils/dataGenerator';
import './IoTDeviceSimulator.css';

const IoTDeviceSimulator = ({ onDataGenerated, onAutoGenerate }) => {
  const devices = useDeviceData();
  const [isGenerating, setIsGenerating] = useState(false);
  const countdown = useAutoGenerate(onAutoGenerate);

  const generateEncryptedDataHandler = () => {
    setIsGenerating(true);
    
    const newData = generateEncryptedData(devices);
    
    setTimeout(() => {
      onDataGenerated(newData, true);
      setIsGenerating(false);
    }, 1500);
  };

  return (
    <div className="bg-gray-800 rounded-lg p-6 shadow-xl">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                        <i className="fas fa-microchip mr-2 text-green-400"></i>
                        IoT Device Simulator
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                        {devices.map(device => (
                            <div key={device.id} className="bg-gray-700 rounded-lg p-4">
                                <div className="flex items-center justify-between mb-3">
                                    <h4 className="font-semibold text-white">{device.name}</h4>
                                    <span className={`px-2 py-1 rounded-full text-xs ${
                                        device.status === 'active' ? 'bg-green-500 text-white' : 'bg-yellow-500 text-black'
                                    }`}>
                                        {device.status}
                                    </span>
                                </div>
                                <p className="text-gray-300 text-sm mb-3">{device.location}</p>
                                
                                {/* Real-time sensor values */}
                                <div className="space-y-2 mb-3">
                                    <div className="flex items-center justify-between">
                                        <span className="text-gray-400 text-xs flex items-center">
                                            <i className="fas fa-thermometer-half mr-1 text-red-400"></i>
                                            Temperature
                                        </span>
                                        <span className="text-white font-mono text-sm">
                                            {device.currentValues.temperature.toFixed(1)}°C
                                        </span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-gray-400 text-xs flex items-center">
                                            <i className="fas fa-tint mr-1 text-blue-400"></i>
                                            Humidity
                                        </span>
                                        <span className="text-white font-mono text-sm">
                                            {device.currentValues.humidity.toFixed(1)}%
                                        </span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-gray-400 text-xs flex items-center">
                                            <i className="fas fa-gauge mr-1 text-purple-400"></i>
                                            Pressure
                                        </span>
                                        <span className="text-white font-mono text-sm">
                                            {device.currentValues.pressure.toFixed(0)} hPa
                                        </span>
                                    </div>
                                </div>
                                
                                <div className="pt-2 border-t border-gray-600">
                                    <p className="text-gray-400 text-xs">ID: {device.id}</p>
                                    <div className="flex items-center mt-1">
                                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-2"></div>
                                        <span className="text-gray-400 text-xs">Live Data</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    <div className="space-y-3">
                        <div className="bg-gray-600 rounded-lg p-3 text-center">
                            <p className="text-gray-300 text-sm mb-1">Auto-generate in:</p>
                            <p className="text-white font-bold text-xl">{countdown}s</p>
                        </div>
                        
                        <button
                            onClick={generateEncryptedDataHandler}
                            disabled={isGenerating}
                            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
                        >
                            {isGenerating ? (
                                <>
                                    <i className="fas fa-spinner fa-spin mr-2"></i>
                                    Generating Encrypted Data...
                                </>
                            ) : (
                                <>
                                    <i className="fas fa-shield-alt mr-2"></i>
                                    Generate Encrypted IoT Data
                                </>
                            )}
                        </button>
                    </div>
                </div>
  );
};

export default IoTDeviceSimulator;