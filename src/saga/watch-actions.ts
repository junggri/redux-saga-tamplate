import {all, call, put, takeEvery} from "redux-saga/effects";
import {PayloadAction} from "@reduxjs/toolkit";

export default function* () {
  yield all([
    watchSaga()
  ]);
}

function* watchSaga() {
  yield takeEvery('*', function* (action: PayloadAction<[() => void, string, string]>) {

    try {
      const response: any = yield call(action.payload[0]);
      if (response.errors) {
        throw new Error(response.errors[0].message)
      }
      yield put({type: action.payload[1], payload: response});
    } catch (e) {
      yield put({type: action.payload[2], payload: e});
    }
  });
}
