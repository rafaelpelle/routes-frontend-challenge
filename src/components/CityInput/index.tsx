import React, { Fragment } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import {
  Typography,
  TextField,
  Autocomplete,
  CircularProgress,
  IconButton,
} from '@mui/material';
import { CityInputProps } from '../../types/components';
import { City } from '../../types/model';
import InputRow from './InputRow';
import LoadingContainer from './LoadingContainer';
import IconPlaceholder from './IconPlaceholder';

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
  removeDestination,
}: CityInputProps) {
  return (
    <InputRow>
      <Autocomplete
        value={value}
        options={options}
        noOptionsText={inputValue ? 'Nothing found' : 'Search your city name'}
        autoComplete
        includeInputInList
        fullWidth
        filterSelectedOptions
        getOptionLabel={getOptionLabel}
        onChange={(
          event: React.SyntheticEvent<Element, Event>,
          newValue: City | null,
        ) => onChange(event, newValue, index)}
        onInputChange={(
          event: React.SyntheticEvent<Element, Event>,
          newValue: string,
        ) => onInputChange(event, newValue, index)}
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
      {isLoading ? (
        <LoadingContainer>
          <CircularProgress color="inherit" size={25} />
        </LoadingContainer>
      ) : !!removeDestination ? (
        <IconButton color="inherit" onClick={() => removeDestination(index)}>
          <DeleteIcon />
        </IconButton>
      ) : (
        <IconPlaceholder />
        // icon always exists, even if empty, to prevent layout shifting (CLS)
      )}
    </InputRow>
  );
}

export default CityInput;
