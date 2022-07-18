import { configureStore } from "@reduxjs/toolkit";
import selectedPostReducer from "./features/posts/selectedPostSlice";
import likeDislikeReducer from "./features/posts/like-dislike/likeDislikeSlice";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./sagas";
import {authReducer} from "./features/auth";
import userReducer from "./features/user/userSlice";
import searchReducer from "./features/search";
import addPostReducer from "./features/posts/add-post";


let sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

export const store = configureStore({
  reducer: {
    selectedPost: selectedPostReducer,
    likeDislike: likeDislikeReducer,
    auth: authReducer,
    user: userReducer,
    search: searchReducer,
	 addPost: addPostReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
