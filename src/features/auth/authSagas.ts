import { call, put, takeLatest } from "typed-redux-saga";
import { AuthApi } from "./api";
import { register, registerFailure, registerSuccess } from "./authSlice";

export function* registerSaga() {
  yield takeLatest(register, function* (action) {
    try {
      const result = yield* call(AuthApi.register, action.payload);
      console.log(result);

      yield* put(registerSuccess(result));
    } catch (e) {
      if (e instanceof Error) {
        yield* put(registerFailure(e.message));
      }
    }
    console.log(action);
  });
}
