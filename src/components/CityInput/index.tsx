import React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { useCityInput } from '../../hooks/useCityInput';

interface Props {
  inputName: string;
}

function CityInput({ inputName }: Props) {
  const {
    value,
    inputValue,
    options,
    onChange,
    onInputChange,
    getOptionLabel,
  } = useCityInput(inputName);

  return (
    <Autocomplete
      value={value}
      options={options}
      sx={{ width: 300 }}
      filterOptions={(x) => x}
      noOptionsText="Not found"
      autoComplete
      includeInputInList
      filterSelectedOptions
      getOptionLabel={getOptionLabel}
      onChange={onChange}
      onInputChange={onInputChange}
      renderInput={(params) => (
        <TextField {...params} value={inputValue} fullWidth />
      )}
    />
  );
}

export default CityInput;
