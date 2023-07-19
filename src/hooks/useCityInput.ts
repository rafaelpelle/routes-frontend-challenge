import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { City } from '../types/model';
import { getCities } from '../api/mock';
import { parseSearchParams } from '../utils/searchParams';

export function useCityInput() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [values, setValues] = useState<(City | null)[]>([null, null]);
  const [inputValues, setInputValues] = useState<string[]>(['', '']);
  const [options, setOptions] = useState<City[][]>([[], []]);
  const [errors, setErrors] = useState<string[]>(['', '']);
  const [loadings, setLoadings] = useState<boolean[]>([false, false]);

  useEffect(() => {
    const currentSearchParams = parseSearchParams(searchParams);
    const newValues = [...values];
    const newOptions = [...options];
    Object.keys(currentSearchParams).forEach((key) => {
      if (key.includes('city')) {
        const index = Number(key.split('city')[1]);
        const value = JSON.parse(currentSearchParams[key] || '');
        newValues[index] = value;
        newOptions[index] = value ? [value] : [];
      }
    });
    setValues(newValues);
    setOptions(newOptions);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onChange = (_: any, newValue: City | null, index: number) => {
    console.log('onChange');
    const newValues = [...values];
    const newInputValues = [...inputValues];
    const newOptions = [...options];
    newValues[index] = newValue;
    newInputValues[index] = newValue?.name || '';
    newOptions[index] = newValue ? [newValue] : [];
    setValues(newValues);
    setInputValues(newInputValues);
    setOptions(newOptions);
    const newSearchParams = parseSearchParams(searchParams);
    newSearchParams[`city${index}`] = JSON.stringify(newValue);
    setSearchParams(newSearchParams);
  };

  const onInputChange = (_: any, newInputValue: string, index: number) => {
    if (!newInputValue) {
      const newValues = [...values];
      const newInputValues = [...inputValues];
      const newOptions = [...options];
      const newErrors = [...errors];
      newValues[index] = null;
      newInputValues[index] = newInputValue;
      newOptions[index] = [];
      newErrors[index] = `You must choose the city of ${
        index === 0 ? 'origin' : 'destination'
      }`;
      setValues(newValues);
      setInputValues(newInputValues);
      setOptions(newOptions);
      setErrors(newErrors);
    } else {
      if (newInputValue !== values[index]?.name) {
        fetchOptions(newInputValue, index);
      }
    }
  };

  const fetchOptions = async (newInputValue: string, index: number) => {
    try {
      const newValues = [...values];
      const newLoadings = [...loadings];
      const newErrors = [...errors];
      newValues[index] = null;
      newLoadings[index] = true;
      newErrors[index] = '';
      setValues(newValues);
      setLoadings(newLoadings);
      setErrors(newErrors);

      const data = await getCities(newInputValue);

      const newOptions = [...options];
      newOptions[index] = data;
      setOptions(newOptions);
      setLoadings(Array.from({ length: loadings.length }, () => false));
    } catch (error) {
      const newLoadings = [...loadings];
      const newErrors = [...errors];
      newLoadings[index] = false;
      newErrors[index] = 'Oops! Failed to search with this keyword.';
      setLoadings(newLoadings);
      setErrors(newErrors);
    }
  };

  const getOptionLabel = (option: City | string) =>
    typeof option === 'string' ? option : option.name;

  const handleAddDestination = () => {
    setValues([...values, null]);
    setInputValues([...inputValues, '']);
    setOptions([...options, []]);
    setErrors([...errors, '']);
    setLoadings([...loadings, false]);
  };

  const handleRemoveDestination = (index: number) => {
    const newValues = [...values];
    const newInputValues = [...inputValues];
    const newOptions = [...options];
    const newErrors = [...errors];
    const newLoadings = [...loadings];
    newValues.splice(index, 1);
    newInputValues.splice(index, 1);
    newOptions.splice(index, 1);
    newErrors.splice(index, 1);
    newLoadings.splice(index, 1);
    setValues(newValues);
    setInputValues(newInputValues);
    setOptions(newOptions);
    setErrors(newErrors);
    setLoadings(newLoadings);
  };

  return {
    values,
    inputValues,
    options,
    errors,
    loadings,
    onChange,
    onInputChange,
    getOptionLabel,
    handleAddDestination,
    handleRemoveDestination,
  };
}
