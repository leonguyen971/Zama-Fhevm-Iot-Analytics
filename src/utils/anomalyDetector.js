import { THRESHOLDS } from './constants';

export const analyzeAnomalies = (data) => {
  const { temperature, humidity, pressure } = data.rawValues;
  
  let anomalyScore = 0;
  let anomalies = [];
  
  if (temperature > THRESHOLDS.TEMPERATURE_HIGH) {
    anomalyScore += 40;
    anomalies.push('High Temperature');
  }
  
  if (humidity > THRESHOLDS.HUMIDITY_HIGH) {
    anomalyScore += 30;
    anomalies.push('High Humidity');
  }
  
  if (pressure > THRESHOLDS.PRESSURE_HIGH || pressure < THRESHOLDS.PRESSURE_LOW) {
    anomalyScore += 20;
    anomalies.push('Pressure Anomaly');
  }
  
  const riskLevel = anomalyScore > THRESHOLDS.HIGH_RISK_SCORE ? 'high' : 
                   anomalyScore > THRESHOLDS.MEDIUM_RISK_SCORE ? 'medium' : 'low';
  
  return {
    ...data,
    anomalyScore,
    anomalies,
    riskLevel,
    analysisTime: new Date().toISOString()
  };
};

export const getRiskLevelColor = (riskLevel) => {
  switch (riskLevel) {
    case 'high': return 'bg-red-500 text-white';
    case 'medium': return 'bg-yellow-500 text-black';
    default: return 'bg-green-500 text-white';
  }
};

export const getScoreColor = (score) => {
  if (score > 70) return 'bg-red-600 text-white';
  if (score > 50) return 'bg-orange-600 text-white';
  return 'bg-yellow-600 text-black';
};