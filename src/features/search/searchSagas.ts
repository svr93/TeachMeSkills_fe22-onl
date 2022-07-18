import { call, put, takeLatest } from "typed-redux-saga";
import { SearchApi } from "./api";
import { actions } from "./searchSlice";

export function* searchSaga() {
  yield* takeLatest(actions.search, function* (action) {
    try {
      const result = yield* call(SearchApi.search, action.payload);

      yield* put(actions.searchSuccess(result));
		console.log(result)
    } catch (e) {
      if (e instanceof Error) {
        yield* put(actions.searchFailure(e.message));
      }
    }
  });
}
