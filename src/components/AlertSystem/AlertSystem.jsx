import React from 'react';
import './AlertSystem.css';

const AlertSystem = ({ alerts }) => {
            return (
                <div className="bg-gray-800 rounded-lg p-6 shadow-xl">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                        <i className="fas fa-exclamation-triangle mr-2 text-red-400"></i>
                        Current Security Alerts
                    </h3>
                    
                    {alerts.length > 0 ? (
                        <div className="space-y-3">
                            {alerts.map((alert, index) => (
                                <div key={index} className="bg-red-900 border border-red-600 rounded-lg p-4">
                                    <div className="flex items-center justify-between mb-2">
                                        <h4 className="font-semibold text-red-100">{alert.deviceName}</h4>
                                        <span className="bg-red-600 text-white px-2 py-1 rounded text-xs">
                                            CRITICAL
                                        </span>
                                    </div>
                                    <p className="text-red-200 text-sm mb-2">
                                        Anomaly Score: {alert.anomalyScore}/100
                                    </p>
                                    <div className="flex flex-wrap gap-1">
                                        {alert.anomalies.map((anomaly, i) => (
                                            <span key={i} className="bg-red-700 text-red-100 px-2 py-1 rounded text-xs">
                                                {anomaly}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-6 text-gray-400">
                            <i className="fas fa-shield-alt text-3xl mb-3"></i>
                            <p>All systems normal</p>
                            <p className="text-sm">No security alerts detected</p>
                        </div>
                    )}
                </div>
            );
        };

export default AlertSystem;