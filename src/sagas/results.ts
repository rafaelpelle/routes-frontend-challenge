import { call, put, takeLatest } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { getDistanceBetweenCities } from '../api/mock';
import { City } from '../types/model';
import { parseSearchParams } from '../utils/searchParams';
import {
  resultsFetchFailed,
  resultsFetchSucceeded,
} from '../actionCreators/results';
import { GetDistanceBetweenCitiesDTO } from '../types/DTO';

function* fetchDistances({ payload }: PayloadAction<string>) {
  try {
    const parsedParams = parseSearchParams(new URLSearchParams(payload));
    const cities: City[] = [];
    Object.values(parsedParams).forEach((item) => {
      if (item && item.includes('name')) {
        cities.push(JSON.parse(item));
      }
    });

    const { passengers, date } = parsedParams;

    const { distances, totalDistance }: GetDistanceBetweenCitiesDTO =
      yield call(getDistanceBetweenCities, cities);

    if (!distances?.length) {
      throw new Error('Oops! Something went wrong!');
    }

    yield put(
      resultsFetchSucceeded(distances, totalDistance, cities, passengers, date),
    );
  } catch (error: any) {
    yield put(resultsFetchFailed(error.message));
  }
}

function* resultsSaga() {
  yield takeLatest('RESULTS_FETCH_REQUESTED', fetchDistances);
}

export default resultsSaga;
