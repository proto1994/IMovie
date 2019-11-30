import { take, fork, all, put, call } from 'redux-saga/effects';
import { createAction, createSlice } from '@reduxjs/toolkit';
import { takeEvery, delay } from 'redux-saga';
import { getRecommendMovieTypeListFetch } from '../services/home';
export const initState = {
  count: 3,
};
export const getRecommendMovieTypeListAction = createAction('home/getRecommendMovieTypeList');
const home = createSlice({
  name: 'home',
  initialState: {
    recommendMovieTypeList: [],
  },
  reducers: {
    updateRecommendMovieTypeList(state, payload) {
      console.log(payload, state)
      state.recommendMovieTypeList = payload.recommendMovieTypeList;
    },
  },
});

console.log(home, 'home')
export default home.reducer;

function* watchGetRecommendMovieTypeList() {
  while (true) {
    const action = yield take(getRecommendMovieTypeListAction.toString());
    console.log(action)
    yield call(getRecommendMovieTypeList);
  }
}
function* getRecommendMovieTypeList() {
  try {
    const result = yield call(getRecommendMovieTypeListFetch);
    console.log(result);
    yield put(home.actions.updateRecommendMovieTypeList({
      recommendMovieTypeList: result.data
    }));
  } catch(e) {
    console.log(e);
  }
}

export function* saga() {
  yield all([fork(watchGetRecommendMovieTypeList)]);
}
