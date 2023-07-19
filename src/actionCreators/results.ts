import { City } from '../types/model';

export const resultsFetchRequested = (searchParams: string) => ({
  type: 'RESULTS_FETCH_REQUESTED',
  payload: searchParams,
});

export const resultsFetchSucceeded = (
  distances: string[],
  totalDistance: number,
  cities: City[],
  passengers: string,
  date: string,
) => ({
  type: 'RESULTS_FETCH_SUCCEEDED',
  payload: { distances, totalDistance, cities, passengers, date },
});

export const resultsFetchFailed = (errorMsg: string) => ({
  type: 'RESULTS_FETCH_FAILED',
  payload: errorMsg,
});
