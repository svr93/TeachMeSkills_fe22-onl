import { put, call, takeEvery } from "typed-redux-saga";
import { setState, reset } from "./likeDislikeSlice";
import { sendLikeDislike } from "./api";

export function* logSetState() {
  yield takeEvery(setState, function* (action){
    try {
      const result = yield* call(sendLikeDislike, action.payload);
      console.log(result.success);
    } catch (e) {
      console.log(e);
      yield put(reset({ id: action.payload.id }));
    }
  });
}
