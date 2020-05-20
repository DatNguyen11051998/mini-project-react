import { call, put, select, takeLatest } from 'redux-saga/effects';
import { LOAD_REPOS } from 'containers/App/constants';
import {
  GET_DATA_CATEGORY,
  GET_DATA_PRODUCT_HOME,
} from 'containers/HomePage/constants';
import {
  dataCategoryLoaded,
  dataProductHomeLoaded,
  notification,
} from 'containers/HomePage/actions';
import { reposLoaded } from 'containers/App/actions';
import request from 'utils/request';
import {
  makeSelectUsername,
  makeSelectPassword,
} from 'containers/HomePage/selectors';
export function* getRepos() {
  // Select username from store
  const username = yield select(makeSelectUsername());
  const password = yield select(makeSelectPassword());
  const requestURL = `https://api-stg.connectpos.com/login`;
  try {
    // Call our request helper (see 'utils/request')
    const repos = yield call(request, requestURL, {
      method: 'POST',
      body: JSON.stringify({ username, password }),
    });
    if (repos && repos !== '') {
      localStorage.setItem('token', repos);
      yield put(reposLoaded(repos, username, password));
    }
  } catch (err) {
    yield put(notification(true));
  }
}

export function* getCategory() {
  const requestURL = `https://api-stg.connectpos.com/v0/stores/55/catalogs?page=1&limit=10`;
  try {
    // Call our request helper (see 'utils/request')
    const res = yield call(request, requestURL);
    if (res && res !== '') {
      yield put(dataCategoryLoaded(res));
    }
  } catch (err) {
    // yield put(loadingDataListCategory(true));
  }
}

export function* getProductHome({ page }) {
  const requestURL = `https://api-stg.connectpos.com/v0/stores/55/products?page=${page}&limit=20`;
  try {
    const res = yield call(request, requestURL);
    if (res && res !== '') {
      yield put(dataProductHomeLoaded(res, page, res.maxPage));
    }
  } catch (err) {
    // yield put(loadingDataProductHome(true));
  }
}

export default function* githubData() {
  yield takeLatest(LOAD_REPOS, getRepos);
  yield takeLatest(GET_DATA_CATEGORY, getCategory);
  yield takeLatest(GET_DATA_PRODUCT_HOME, getProductHome);
}
