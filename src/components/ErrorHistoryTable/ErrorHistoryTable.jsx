import React, { useState } from 'react';
// import { getScoreColor } from '../../utils/anomalyDetector';
import { PAGINATION } from '../../utils/constants';
import './ErrorHistoryTable.css';

const ErrorHistoryTable = ({ errorHistory }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(errorHistory.length / PAGINATION.ITEMS_PER_PAGE);
  
  const startIndex = (currentPage - 1) * PAGINATION.ITEMS_PER_PAGE;
  const endIndex = startIndex + PAGINATION.ITEMS_PER_PAGE;
  const currentItems = errorHistory.slice(startIndex, endIndex);

//   const handlePrevPage = () => {
//     setCurrentPage(prev => Math.max(1, prev - 1));
//   };

//   const handleNextPage = () => {
//     setCurrentPage(prev => Math.min(totalPages, prev + 1));
//   };

  return (
    <div className="bg-gray-800 rounded-lg p-6 shadow-xl">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                        <i className="fas fa-history mr-2 text-orange-400"></i>
                        Error History ({errorHistory.length} total)
                    </h3>
                    
                    {errorHistory.length > 0 ? (
                        <>
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm">
                                    <thead>
                                        <tr className="border-b border-gray-600">
                                            <th className="text-left text-gray-300 py-2 px-3">Time</th>
                                            <th className="text-left text-gray-300 py-2 px-3">Device</th>
                                            <th className="text-left text-gray-300 py-2 px-3">Score</th>
                                            <th className="text-left text-gray-300 py-2 px-3">Errors</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {currentItems.map((error, index) => (
                                            <tr key={startIndex + index} className="border-b border-gray-700 hover:bg-gray-700">
                                                <td className="py-3 px-3 text-gray-300">
                                                    {new Date(error.timestamp).toLocaleString('vi-VN')}
                                                </td>
                                                <td className="py-3 px-3 text-white font-medium">
                                                    {error.deviceName}
                                                </td>
                                                <td className="py-3 px-3">
                                                    <span className={`px-2 py-1 rounded text-xs font-bold ${
                                                        error.anomalyScore > 70 ? 'bg-red-600 text-white' :
                                                        error.anomalyScore > 50 ? 'bg-orange-600 text-white' :
                                                        'bg-yellow-600 text-black'
                                                    }`}>
                                                        {error.anomalyScore}/100
                                                    </span>
                                                </td>
                                                <td className="py-3 px-3">
                                                    <div className="flex flex-wrap gap-1">
                                                        {error.anomalies.map((anomaly, i) => (
                                                            <span key={i} className="bg-red-600 text-white px-1 py-0.5 rounded text-xs">
                                                                {anomaly}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            
                            {totalPages > 1 && (
                                <div className="flex justify-between items-center mt-4">
                                    <p className="text-gray-400 text-sm">
                                        Showing {startIndex + 1}-{Math.min(endIndex, errorHistory.length)} of {errorHistory.length}
                                    </p>
                                    <div className="flex space-x-2">
                                        <button
                                            onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                                            disabled={currentPage === 1}
                                            className="px-3 py-1 bg-gray-600 hover:bg-gray-500 disabled:bg-gray-700 text-white rounded text-sm"
                                        >
                                            Previous
                                        </button>
                                        <span className="px-3 py-1 bg-blue-600 text-white rounded text-sm">
                                            {currentPage} / {totalPages}
                                        </span>
                                        <button
                                            onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                                            disabled={currentPage === totalPages}
                                            className="px-3 py-1 bg-gray-600 hover:bg-gray-500 disabled:bg-gray-700 text-white rounded text-sm"
                                        >
                                            Next
                                        </button>
                                    </div>
                                </div>
                            )}
                        </>
                    ) : (
                        <div className="text-center py-8 text-gray-400">
                            <i className="fas fa-clipboard-list text-4xl mb-4"></i>
                            <p>No error history yet</p>
                            <p className="text-sm">Errors will be logged here automatically</p>
                        </div>
                    )}
                </div>
  );
};

export default ErrorHistoryTable;