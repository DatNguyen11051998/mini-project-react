import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { GET_DATA_DETAIL } from './constant';
import { getDetailproductSuccess, getDetailproductEror } from './action';

export function* getDetail({ idDetail }) {
  //  console.log(idDetail,"props")
  const requestURL = `https://api-stg.connectpos.com/v0/stores/55/products/${idDetail}`;
  try {
    const res = yield call(request, requestURL);

    if (res && res !== '') {
      yield put(getDetailproductSuccess(res));
    }
  } catch (err) {
    yield put(getDetailproductEror(err));
  }
}

export default function* categoryData() {
  yield takeLatest(GET_DATA_DETAIL, getDetail);
}
