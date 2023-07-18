import { useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { DateInputProps } from '../types/components';

export function useDateInput(): DateInputProps {
  const [value, setValue] = useState<Dayjs | null>(dayjs());

  const onChange = (newValue: Dayjs | null) => {
    if (newValue?.isValid() && !newValue.isBefore(dayjs())) {
      setValue(newValue);
    }
  };

  return {
    value,
    onChange,
  };
}
