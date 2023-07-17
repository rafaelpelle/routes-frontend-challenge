import { useState, useEffect } from 'react';
import { City } from '../types/model';
import { getCities } from '../api/mock';

export function useCityInput(label: string) {
  const [value, setValue] = useState<City | null>(null);
  const [inputValue, setInputValue] = useState<string>('');
  const [options, setOptions] = useState<City[]>([]);
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onChange = (
    event: React.SyntheticEvent<Element, Event>,
    newValue: City | null,
  ) => {
    setOptions(newValue ? [newValue, ...options] : options);
    setValue(newValue);
  };

  const onInputChange = (
    event: React.SyntheticEvent<Element, Event>,
    newInputValue: string,
  ) => {
    setValue(null);
    setInputValue(newInputValue);
    setError(newInputValue ? '' : `You must choose the ${label}`);
  };

  const fetchOptions = async (newInputValue: string) => {
    try {
      setIsLoading(true);
      const data = await getCities(newInputValue);
      setOptions(data);
    } catch (error) {
      setError('Oops! Failed to search with this keyword.');
    } finally {
      setIsLoading(false);
    }
  };

  const getOptionLabel = (option: City | string) =>
    typeof option === 'string' ? option : option.name;

  useEffect(() => {
    const debounce = setTimeout(() => {
      if (!inputValue) {
        setOptions(value ? [value] : []);
      } else {
        fetchOptions(inputValue);
      }
    }, 400);

    return () => clearTimeout(debounce);
  }, [value, inputValue, label]);

  return {
    value,
    inputValue,
    options,
    error,
    isLoading,
    onChange,
    onInputChange,
    getOptionLabel,
  };
}
