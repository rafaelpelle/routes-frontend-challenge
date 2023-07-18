import React, { Fragment } from 'react';
import {
  Typography,
  TextField,
  Autocomplete,
  CircularProgress,
} from '@mui/material';
import { CityInputProps } from '../../types/components';
import InputRow from './InputRow';
import LoadingContainer from './LoadingContainer';
import { City } from '../../types/model';

function CityInput({
  value,
  inputValue,
  options,
  error,
  isLoading,
  label,
  index,
  onChange,
  onInputChange,
  getOptionLabel,
}: CityInputProps) {
  return (
    <InputRow>
      <Autocomplete
        value={value}
        options={options}
        noOptionsText="Nothing found"
        autoComplete
        includeInputInList
        fullWidth
        filterSelectedOptions
        getOptionLabel={getOptionLabel}
        onChange={(
          event: React.SyntheticEvent<Element, Event>,
          newValue: City | null,
        ) => onChange(event, newValue, index as number)}
        onInputChange={(
          event: React.SyntheticEvent<Element, Event>,
          newValue: string,
        ) => onInputChange(event, newValue, index as number)}
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
