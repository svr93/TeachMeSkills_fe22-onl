import { all } from "redux-saga/effects";
import { getUserSaga } from "./userSagas";

export function* userSagas() {
  yield all([getUserSaga()]);
}
