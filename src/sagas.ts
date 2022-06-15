import {all} from "redux-saga/effects"
import { registerSaga } from "./features/auth/authSagas";
import {logSetState} from "./features/posts/like-dislike/likeDislikeSagas"

export function* rootSaga(){
	yield all([logSetState(), registerSaga()]);
}


