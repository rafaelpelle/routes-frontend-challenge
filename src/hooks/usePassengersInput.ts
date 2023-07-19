import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PassengersInputProps } from '../types/components';
import { parseSearchParams } from '../utils/searchParams';

export function usePassengersInput(): PassengersInputProps {
  const [value, setValue] = useState<number>(1);
  const [error, setError] = useState<string>('');
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const { passengers } = parseSearchParams(searchParams);
    if (passengers) {
      setValue(Number(passengers));
    }
    // dependencies intentionally empty to run only once
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (amount: number) => {
    const newValue = value + amount;
    if (newValue >= 0) {
      setValue(newValue);
      const newSearchParams = parseSearchParams(searchParams);
      newSearchParams.passengers = `${newValue}`;
      setSearchParams(newSearchParams);

      if (newValue === 0) {
        setError('Select passengers');
      }
    }
  };

  return {
    value,
    error,
    handleChange,
  };
}
