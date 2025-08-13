import { useState, useEffect } from 'react';
import { UPDATE_INTERVALS } from '../utils/constants';

export const useAutoGenerate = (onAutoGenerate) => {
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    const autoInterval = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          onAutoGenerate();
          return 10;
        }
        return prev - 1;
      });
    }, UPDATE_INTERVALS.COUNTDOWN);

    return () => clearInterval(autoInterval);
  }, []);

  return countdown;
};