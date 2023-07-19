import { PayloadAction } from '@reduxjs/toolkit';
import { ResultsReducer } from '../types/reducers';

const INITIAL_STATE: ResultsReducer = {
  distances: null,
  totalDistance: null,
  cities: null,
  passengers: null,
  date: null,
  isLoading: false,
  error: null,
};

const resultsReducer = (
  state = INITIAL_STATE,
  action: PayloadAction<any>,
): ResultsReducer => {
  switch (action.type) {
    case 'RESULTS_FETCH_REQUESTED':
      return {
        ...state,
        isLoading: true,
      };
    case 'RESULTS_FETCH_SUCCEEDED':
      return {
        ...state,
        ...action.payload,
        isLoading: false,
        error: null,
      };
    case 'RESULTS_FETCH_FAILED':
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return { ...state };
  }
};

export default resultsReducer;
