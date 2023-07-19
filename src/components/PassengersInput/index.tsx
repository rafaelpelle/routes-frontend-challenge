import useMediaQuery from '@mui/material/useMediaQuery';
import {
  Box,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material';
import { IndeterminateCheckBox, AddBox } from '@mui/icons-material';
import { PassengersInputProps } from '../../types/components';

function PassengersInput({ value, error, handleChange }: PassengersInputProps) {
  const isDesktop = useMediaQuery('(min-width:900px)');

  return (
    <Box width={isDesktop ? 150 : 125}>
      <Typography variant="caption">Passengers</Typography>
      <br />
      <TextField
        size="small"
        value={value}
        error={!!error}
        helperText={error || ' '}
        // helperText always exists, even if empty, to prevent layout shifting (CLS)
        // docs: https://mui.com/material-ui/react-text-field/#helper-text
        inputProps={{
          style: { textAlign: 'center' },
        }}
        InputProps={{
          readOnly: true,
          style: { padding: '0px 4px' },
          startAdornment: (
            <InputAdornment position="start">
              <IconButton color="primary" onClick={() => handleChange(-1)}>
                <IndeterminateCheckBox />
              </IconButton>
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <IconButton color="primary" onClick={() => handleChange(1)}>
                <AddBox />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
}

export default PassengersInput;
