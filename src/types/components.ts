import { Dayjs } from 'dayjs';
import { City } from './model';

export interface CityInputProps {
  value: City | null;
  inputValue: string;
  options: City[];
  error: string;
  isLoading: boolean;
  label: string;
  index: number;
  onChange: (
    event: React.SyntheticEvent<Element, Event>,
    newValue: City | null,
    index: number,
  ) => void;
  onInputChange: (
    event: React.SyntheticEvent<Element, Event>,
    newInputValue: string,
    index: number,
  ) => void;
  getOptionLabel: (option: City | string) => string;
  removeDestination?: (index: number) => void;
}

export interface PassengersInputProps {
  value: number;
  error: string;
  handleChange: (amount: number) => void;
}

export interface DateInputProps {
  value: Dayjs | null;
  onChange: (value: Dayjs | null) => void;
}

export interface VerticalStepperProps {
  length: number;
  labels?: string[];
  distances?: string[];
}

export interface DistanceTooltipProps {
  distance: string;
  children: React.ReactElement<any, any>;
}
