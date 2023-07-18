import { useState } from 'react';
import { PassengersInputProps } from '../types/components';

export function usePassengersInput(): PassengersInputProps {
  const [value, setValue] = useState<number>(0);
  const [error, setError] = useState<string>('');

  const handleIncrease = () => {
    setValue(value + 1);

    if (error) {
      setError('');
    }
  };

  const handleDecrease = () => {
    if (value > 0) {
      const newValue = value - 1;
      setValue(newValue);

      if (newValue === 0) {
        setError('Select passengers');
      }
    }
  };

  return {
    value,
    error,
    handleIncrease,
    handleDecrease,
  };
}
