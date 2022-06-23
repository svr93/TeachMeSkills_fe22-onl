import { call, put, takeLatest } from "typed-redux-saga";
import { AuthApi } from "./api";
import {
  activate,
  activateFailure,
  activateSuccess,
  register,
  registerFailure,
  registerSuccess,
  login,
  loginSuccess,
  loginFailure,
  refresh,
  refreshSuccess,
} from "./authSlice";

export function* registerSaga() {
  yield takeLatest(register, function* (action) {
	console.log("registerSaga");

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
export function* loginSaga() {
  yield takeLatest(login, function* (action) {
    try {
      const loginResponse = yield* call(AuthApi.login, action.payload);
      console.log(loginResponse);

      yield* put(loginSuccess(loginResponse));
    } catch (e) {
      if (e instanceof Error) {
        yield* put(loginFailure(e.message));
      }
    }
    console.log(action);
  });
}
export function* loginSuccessSaga() {
  yield takeLatest(loginSuccess, function* (action) {
    yield* call(
      [localStorage, "setItem"],
      "access-token",
      action.payload.access
    );
    yield* call(
      [localStorage, "setItem"],
      "refresh-token",
      action.payload.refresh
    );
  });
}

export function* refreshSaga() {
  yield* takeLatest(refresh, function* () {
    const refreshToken = yield* call(
      [localStorage, "getItem"],
      "refresh-token" //localStorage.getItem("refresh-token")
    );
    if (refreshToken) {
      try {
        const response = yield* call(AuthApi.refresh, refreshToken);
        yield* put(refreshSuccess(response));
      } catch (e) {
        if (e instanceof Error) {
          yield* put(loginFailure(e.message));
        }
      }
    }
  });
}
export function* refreshSuccessSaga() {
  yield takeLatest(refreshSuccess, function* (action) {
    yield* call(
      [localStorage, "setItem"],
      "access-token",
      action.payload.access
    );
  });
}
