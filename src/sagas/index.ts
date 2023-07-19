import { all } from 'redux-saga/effects';
import resultsSaga from './results';

export default function* rootSaga() {
  yield all([resultsSaga()]);
}
