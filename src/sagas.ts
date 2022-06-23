import {all} from "redux-saga/effects"
import { authSagas } from "./features/auth";
import {logSetState} from "./features/posts/like-dislike/likeDislikeSagas"
import { userSagas } from "./features/user";

export function* rootSaga(){
	yield all([logSetState(), authSagas(), userSagas()]);
}


