import { take, fork, all, put, call } from 'redux-saga/effects';
import { createAction, createSlice } from '@reduxjs/toolkit';
import { takeEvery, delay } from 'redux-saga';
import { getRecommendMovieTypeListFetch } from '../services/home';

const { actions, reducer } = createSlice({
  name: 'home',
  initialState: {
    recommendMovieTypeList: [],
    loading: false,
  },
  reducers: {
    updateRecommendMovieTypeList(state, { payload }) {
      console.log(payload);
      state.recommendMovieTypeList = payload.recommendMovieTypeList;
    },
    updateLoading(state, { payload }) {
      state.loading = payload;
    },
  },
});

export const getRecommendMovieTypeListAction = createAction('home/getRecommendMovieTypeList');
function* watchGetRecommendMovieTypeList() {
  while (true) {
    const action = yield take(getRecommendMovieTypeListAction.toString());
    console.log(action);
    yield call(getRecommendMovieTypeList);
  }
}
function* getRecommendMovieTypeList() {
  try {
    yield put(actions.updateLoading(true));
    const result = yield call(getRecommendMovieTypeListFetch);
    // console.log(result);
    yield all([
      put(actions.updateLoading(false)),
      put(
        actions.updateRecommendMovieTypeList({
          recommendMovieTypeList: result,
        }),
      ),
    ]);
  } catch (e) {
    yield put(actions.updateLoading(false));
    console.log(e);
  }
}

export function* saga() {
  yield all([fork(watchGetRecommendMovieTypeList)]);
}
export default reducer;
