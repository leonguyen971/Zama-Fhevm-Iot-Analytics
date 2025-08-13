import { RANGES } from './constants';

export const generateRandomValue = (current, range, variation) => {
  const newValue = current + (Math.random() - 0.5) * variation;
  return Math.max(range.min, Math.min(range.max, newValue));
};

export const generateEncryptedData = (devices) => {
  return devices.map(device => ({
    deviceId: device.id,
    deviceName: device.name,
    encryptedTemp: `0x${Math.random().toString(16).substr(2, 64)}`,
    encryptedHumidity: `0x${Math.random().toString(16).substr(2, 64)}`,
    encryptedPressure: `0x${Math.random().toString(16).substr(2, 64)}`,
    timestamp: new Date().toISOString(),
    rawValues: {
      temperature: device.currentValues.temperature + (Math.random() - 0.5) * 4,
      humidity: device.currentValues.humidity + (Math.random() - 0.5) * 6,
      pressure: device.currentValues.pressure + (Math.random() - 0.5) * 3
    }
  }));
};

export const generateAutoData = () => {
  return [
    { id: 'device_001', name: 'Temperature Sensor A' },
    { id: 'device_002', name: 'Humidity Monitor B' },
    { id: 'device_003', name: 'Pressure Gauge C' }
  ].map(device => ({
    deviceId: device.id,
    deviceName: device.name,
    encryptedTemp: `0x${Math.random().toString(16).substr(2, 64)}`,
    encryptedHumidity: `0x${Math.random().toString(16).substr(2, 64)}`,
    encryptedPressure: `0x${Math.random().toString(16).substr(2, 64)}`,
    timestamp: new Date().toISOString(),
    rawValues: {
      temperature: Math.floor(Math.random() * 60) + 10,
      humidity: Math.floor(Math.random() * 90) + 10,
      pressure: Math.floor(Math.random() * 80) + 980
    }
  }));
};