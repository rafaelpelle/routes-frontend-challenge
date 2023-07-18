import {
  Box,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material';
import { IndeterminateCheckBox, AddBox } from '@mui/icons-material';
import { PassengersInputProps } from '../../types/components';

function PassengersInput({
  value,
  error,
  handleIncrease,
  handleDecrease,
}: PassengersInputProps) {
  return (
    <Box width={130}>
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
              <IconButton onClick={handleDecrease}>
                <IndeterminateCheckBox />
              </IconButton>
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleIncrease}>
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
