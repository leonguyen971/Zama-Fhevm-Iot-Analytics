import { useState, useEffect } from 'react';
import { DEVICE_CONFIG, RANGES, UPDATE_INTERVALS } from '../utils/constants';
import { generateRandomValue } from '../utils/dataGenerator';

export const useDeviceData = () => {
  const [devices, setDevices] = useState(
    DEVICE_CONFIG.map(device => ({
      ...device,
      currentValues: { ...device.initialValues }
    }))
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setDevices(prev => prev.map(device => ({
        ...device,
        currentValues: {
          temperature: generateRandomValue(device.currentValues.temperature, RANGES.TEMPERATURE, 8),
          humidity: generateRandomValue(device.currentValues.humidity, RANGES.HUMIDITY, 12),
          pressure: generateRandomValue(device.currentValues.pressure, RANGES.PRESSURE, 6)
        }
      })));
    }, UPDATE_INTERVALS.DEVICE_DATA);

    return () => clearInterval(interval);
  }, []);

  return devices;
};