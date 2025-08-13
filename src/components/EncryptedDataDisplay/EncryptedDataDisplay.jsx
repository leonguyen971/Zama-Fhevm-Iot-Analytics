import React from 'react';
import './EncryptedDataDisplay.css';

const EncryptedDataDisplay = ({ data }) => {
            return (
                <div className="bg-gray-800 rounded-lg p-6 shadow-xl">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                        <i className="fas fa-lock mr-2 text-yellow-400"></i>
                        Encrypted Data Stream
                    </h3>
                    
                    {data.length > 0 ? (
                        <div className="space-y-4  overflow-y-auto h-[796px]">
                            {data.map((item, index) => (
                                <div key={index} className="bg-gray-700 rounded-lg p-4">
                                    <div className="flex items-center justify-between mb-2">
                                        <h4 className="font-semibold text-white">{item.deviceName}</h4>
                                        <span className="text-xs text-gray-400">
                                            {new Date(item.timestamp).toLocaleString('vi-VN')}
                                        </span>
                                    </div>
                                    
                                    <div className="space-y-2 text-sm">
                                        <div>
                                            <span className="text-gray-300">Encrypted Temperature:</span>
                                            <p className="text-green-400 font-mono break-all">{item.encryptedTemp}</p>
                                        </div>
                                        <div>
                                            <span className="text-gray-300">Encrypted Humidity:</span>
                                            <p className="text-blue-400 font-mono break-all">{item.encryptedHumidity}</p>
                                        </div>
                                        <div>
                                            <span className="text-gray-300">Encrypted Pressure:</span>
                                            <p className="text-purple-400 font-mono break-all">{item.encryptedPressure}</p>
                                        </div>
                                    </div>
                                    
                                    <div className="mt-3 pt-3 border-t border-gray-600">
                                        <p className="text-xs text-gray-400">
                                            🔐 Data được mã hóa bằng FHEVM - có thể xử lý mà không giải mã
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-8 text-gray-400">
                            <i className="fas fa-stream text-4xl mb-4"></i>
                            <p>No encrypted data received</p>
                            <p className="text-sm">Waiting for IoT devices to send data...</p>
                        </div>
                    )}
                </div>
            );
        };

export default EncryptedDataDisplay;