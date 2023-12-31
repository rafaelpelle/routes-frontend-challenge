import React, { Fragment } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import {
  Autocomplete,
  Box,
  CircularProgress,
  IconButton,
  TextField,
  Typography,
} from '@mui/material';
import { CityInputProps } from '../../types/components';
import { City } from '../../types/model';
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
    <Box mb={2} display="flex" alignItems="center">
      <Autocomplete
        value={value}
        options={options || []}
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
              data-cy={`CityInput${index}`}
              value={inputValue}
              error={!!error}
              size="small"
              helperText={error || ' '}
              // helperText always exists, even if empty, to prevent layout shifting (CLS)
              // docs: https://mui.com/material-ui/react-text-field/#helper-text
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
    </Box>
  );
}

export default CityInput;
