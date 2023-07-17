import React, { Fragment } from 'react';
import {
  Typography,
  TextField,
  Autocomplete,
  CircularProgress,
} from '@mui/material';
import { City } from '../../types/model';
import InputRow from './InputRow';
import LoadingContainer from './LoadingContainer';

interface Props {
  value: City | null;
  inputValue: string;
  options: City[];
  error: string;
  isLoading: boolean;
  label: string;
  onChange: (
    event: React.SyntheticEvent<Element, Event>,
    newValue: City | null,
  ) => void;
  onInputChange: (
    event: React.SyntheticEvent<Element, Event>,
    newInputValue: string,
  ) => void;
  getOptionLabel: (option: City | string) => string;
}

function CityInput({
  value,
  inputValue,
  options,
  error,
  isLoading,
  label,
  onChange,
  onInputChange,
  getOptionLabel,
}: Props) {
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
