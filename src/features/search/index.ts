import { all } from "redux-saga/effects";
import { searchSaga } from "./searchSagas";

export { default } from "./searchSlice";

export function* searchSagas(){
	yield all([searchSaga()])
}