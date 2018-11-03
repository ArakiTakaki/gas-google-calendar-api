import { call, takeEvery, put } from "redux-saga/effects";
import * as Actions from "./actions";

function asyncIncrement() {
  return new Promise(resolve => {
    const delay = 1000 * Math.random();
    setTimeout(() => {
      resolve({ data: 1 });
    }, delay);
  });
}

function* increment() {
  yield put(Actions.progressStart());
  const response = yield call(asyncIncrement);
  yield put(Actions.incrementResponse(response.data));
  yield put(Actions.progressEnd());
}

export default function* sagas() {
  yield takeEvery(Actions.INCREMENT_REQUEST, increment);
  // yield takeEvery()
}
