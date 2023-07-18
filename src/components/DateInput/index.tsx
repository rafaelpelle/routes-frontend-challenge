import useMediaQuery from '@mui/material/useMediaQuery';
import { Box, Typography } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateInputProps } from '../../types/components';

function DateInput({ value, onChange }: DateInputProps) {
  const isDesktop = useMediaQuery('(min-width:900px)');

  return (
    <Box width={isDesktop ? 150 : 125} mt={isDesktop ? 2 : 0}>
      <Typography variant="caption">Date</Typography>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          disablePast
          value={value}
          onChange={onChange}
          slotProps={{
            textField: {
              size: 'small',
              value,
              inputProps: {
                readOnly: true,
              },
            },
          }}
        />
      </LocalizationProvider>
    </Box>
  );
}

export default DateInput;
