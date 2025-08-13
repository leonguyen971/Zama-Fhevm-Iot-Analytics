export const DEVICE_CONFIG = [
  { 
    id: 'device_001', 
    name: 'Temperature Sensor A', 
    status: 'active', 
    location: 'Server Room',
    initialValues: { temperature: 25, humidity: 45, pressure: 1013 }
  },
  { 
    id: 'device_002', 
    name: 'Humidity Monitor B', 
    status: 'active', 
    location: 'Data Center',
    initialValues: { temperature: 22, humidity: 55, pressure: 1015 }
  },
  { 
    id: 'device_003', 
    name: 'Pressure Gauge C', 
    status: 'warning', 
    location: 'HVAC System',
    initialValues: { temperature: 28, humidity: 65, pressure: 1018 }
  }
];

export const THRESHOLDS = {
  TEMPERATURE_HIGH: 45,
  HUMIDITY_HIGH: 80,
  PRESSURE_HIGH: 1040,
  PRESSURE_LOW: 1010,
  HIGH_RISK_SCORE: 50,
  MEDIUM_RISK_SCORE: 25
};

export const RANGES = {
  TEMPERATURE: { min: 10, max: 70 },
  HUMIDITY: { min: 10, max: 100 },
  PRESSURE: { min: 980, max: 1060 }
};

export const UPDATE_INTERVALS = {
  DEVICE_DATA: 2000,
  AUTO_GENERATE: 10000,
  COUNTDOWN: 1000
};

export const PAGINATION = {
  ITEMS_PER_PAGE: 6
};