import { useState } from 'react';
import { City } from '../types/model';

export function useCityInput(inputName: string) {
  const [value, setValue] = useState<City | null>(null);
  const [inputValue, setInputValue] = useState<string>('');
  const [options, setOptions] = useState<City[]>([]);
  const [error, setError] = useState<string>('');

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
    setInputValue(newInputValue);

    if (!newInputValue) {
      setOptions(value ? [value] : []);
      setError(value ? '' : `You must choose the ${inputName}`);
    } else {
      fetchOptions(newInputValue);
    }
  };

  const fetchOptions = async (newInputValue: string) => {
    try {
      // TO-DO fake API request
    } catch (error) {
      setError('Oops! Failed to search with this keyword.');
    }
  };

  const getOptionLabel = (option: City | string) =>
    typeof option === 'string' ? option : option.name;

  return {
    value,
    inputValue,
    options,
    error,
    onChange,
    onInputChange,
    getOptionLabel,
  };
}
