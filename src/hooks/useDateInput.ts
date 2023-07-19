import { useEffect, useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { useSearchParams } from 'react-router-dom';
import { DateInputProps } from '../types/components';
import { parseSearchParams } from '../utils/searchParams';

export function useDateInput(): DateInputProps {
  const [value, setValue] = useState<Dayjs | null>(dayjs());
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const { date } = parseSearchParams(searchParams);
    if (date) {
      setValue(dayjs(date));
    }
    // dependencies intentionally empty to run only once
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onChange = (newValue: Dayjs | null) => {
    if (newValue?.isValid() && !newValue.isBefore(dayjs())) {
      setValue(newValue);
      const newSearchParams = parseSearchParams(searchParams);
      newSearchParams.date = newValue.toJSON();
      setSearchParams(newSearchParams);
    }
  };

  return {
    value,
    onChange,
  };
}
