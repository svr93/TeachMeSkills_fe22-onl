import { all } from "redux-saga/effects";
import { addPostSaga } from "./addPostSagas";

export {Form as AddPostForm} from "./Form"


export { default } from "./addPostSlice";

export function* addPostSagas(){
	yield all([addPostSaga()])
}

