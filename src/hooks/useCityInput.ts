import { useState } from 'react';
import { City } from '../types/model';
import { CityInputProps } from '../types/components';
import { getCities } from '../api/mock';

export function useCityInput() {
  const onChange = (
    event: React.SyntheticEvent<Element, Event>,
    newValue: City | null,
    index: number,
  ) => {
    const newInputs = [...inputs];
    newInputs[index] = {
      ...newInputs[index],
      value: newValue,
      options: newValue
        ? [newValue, ...newInputs[index].options]
        : newInputs[index].options,
    };
    setInputs(newInputs);
  };

  const onInputChange = (
    event: React.SyntheticEvent<Element, Event>,
    newInputValue: string,
    index: number,
  ) => {
    const newInputs = [...inputs];
    if (!newInputValue) {
      newInputs[index] = {
        ...newInputs[index],
        // value: null,
        inputValue: newInputValue,
        error: `You must choose the ${newInputs[index].label}`,
        options: newInputs[index].value ? [newInputs[index].value as City] : [],
      };
      setInputs(newInputs);
    } else {
      fetchOptions(newInputValue, index);
      newInputs[index] = {
        ...newInputs[index],
        value: null,
        inputValue: newInputValue,
        error: '',
      };
    }
  };

  const fetchOptions = async (newInputValue: string, index: number) => {
    try {
      const newInputs = [...inputs];
      newInputs[index].isLoading = true;
      setInputs(newInputs);

      const data = await getCities(newInputValue);

      newInputs[index].isLoading = false;
      newInputs[index].options = data;
      setInputs(newInputs);
    } catch (error) {
      const newInputs = [...inputs];
      newInputs[index].isLoading = true;
      newInputs[index].error = 'Oops! Failed to search with this keyword.';
      setInputs(newInputs);
    }
  };

  // useEffect(() => {
  //   const debounce = setTimeout(() => {
  //     if (!inputValue) {
  //       setOptions(value ? [value] : []);
  //     } else if (!value) {
  //       fetchOptions(inputValue);
  //     }
  //   }, 400);

  //   return () => clearTimeout(debounce);
  // }, [value, inputValue, label]);

  const getOptionLabel = (option: City | string) =>
    typeof option === 'string' ? option : option.name;

  const [inputs, setInputs] = useState<CityInputProps[]>([
    {
      value: null,
      inputValue: '',
      options: [],
      error: '',
      isLoading: false,
      label: 'City of origin',
      onChange,
      onInputChange,
      getOptionLabel,
    },
    {
      value: null,
      inputValue: '',
      options: [],
      error: '',
      isLoading: false,
      label: 'City of destination',
      onChange,
      onInputChange,
      getOptionLabel,
    },
  ]);

  return {
    inputs,
  };
}
