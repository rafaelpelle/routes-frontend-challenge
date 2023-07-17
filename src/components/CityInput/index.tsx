import React, { Fragment } from 'react';
import {
  Typography,
  TextField,
  Autocomplete,
  CircularProgress,
} from '@mui/material';
import { useCityInput } from '../../hooks/useCityInput';
import InputRow from './InputRow';
import LoadingContainer from './LoadingContainer';

interface Props {
  label: string;
}

function CityInput({ label }: Props) {
  const {
    value,
    inputValue,
    options,
    error,
    isLoading,
    onChange,
    onInputChange,
    getOptionLabel,
  } = useCityInput(label);

  return (
    <InputRow>
      <Autocomplete
        value={value}
        options={options}
        sx={{ width: 300 }}
        filterOptions={(x) => x}
        noOptionsText="Nothing found"
        autoComplete
        includeInputInList
        filterSelectedOptions
        getOptionLabel={getOptionLabel}
        onChange={onChange}
        onInputChange={onInputChange}
        renderInput={(params) => (
          <Fragment>
            <Typography variant="caption">{label}</Typography>
            <TextField
              {...params}
              value={inputValue}
              error={!!error}
              size="small"
              helperText={error || ' '}
              // helperText always exists, even if empty, to prevent layout shifting (CLS)
            />
          </Fragment>
        )}
      />
      {isLoading && (
        <LoadingContainer>
          <CircularProgress color="inherit" size={25} />
        </LoadingContainer>
      )}
    </InputRow>
  );
}

export default CityInput;
