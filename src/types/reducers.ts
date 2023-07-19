import { City } from './model';

export interface ResultsReducer {
  distances: string[] | null;
  totalDistance: number | null;
  cities: City[] | null;
  passengers: string | null;
  date: string | null;
  isLoading: boolean;
  error: string | null;
}
