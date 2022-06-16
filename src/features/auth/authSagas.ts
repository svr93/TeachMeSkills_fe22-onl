import { call, put, takeLatest } from "typed-redux-saga";
import { AuthApi } from "./api";
import {
  activate,
  activateFailure,
  activateSuccess,
  register,
  registerFailure,
  registerSuccess,
} from "./authSlice";

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

export function* activateSaga() {
  yield takeLatest(activate, function* (action) {
    try {
      const isActivated = yield* call(AuthApi.isActivated);
      if (!isActivated) {
        const result = yield* call(AuthApi.activate, action.payload);
        console.log(result);
      }
      yield* put(activateSuccess());
    } catch (e) {
      yield* put(activateFailure());
    }
  });
}
