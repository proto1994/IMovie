import { fork, all } from 'redux-saga/effects';
import { saga as homeSaga } from './home';

export default function* rootSaga() {
  yield all([fork(homeSaga)]);
}
