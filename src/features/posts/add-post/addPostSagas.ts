import { call, put, takeLatest } from "typed-redux-saga";
import { CardProps } from "../../../types/posts";
import { actions } from "./addPostSlice";
import { AddPostApi } from "./api";

export function* addPostSaga() {
  yield* takeLatest(actions.addPost, function* (action) {
    const accessToken = yield* call([localStorage, "getItem"], "access-token");
    if (accessToken) {
      try {
        const result = yield* call(AddPostApi.addPost, action.payload, accessToken);

        yield* put(actions.addPostSuccess(result));
        console.log(result);
      } catch (e) {
        if (e instanceof Error) {
          yield* put(actions.addPostSuccess({ id: 12345 } as CardProps));
        }
      }
    }
  });
}
