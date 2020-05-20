import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { repoLoadingError } from 'containers/App/actions';
import {
  FILTER_DATA_CATEGORY,
  SEARCH_DATA_CATEGORY,
  GET_ALL_CATEGORY,
} from './constant';
import {
  filterCategoryLoaded,
  filterCategoryError,
  getAllCategoryLoaded,
  getAllCategoryError,
} from './action';

export function* filterCategory({ dataFilterCategory, page, search }) {
  // eslint-disable-next-line prettier/prettier
  const requestURL = `https://api-stg.connectpos.com/v0/stores/55/products?page=${page}&limit=10&categoryIds=${dataFilterCategory}`;
  try {
    const res = yield call(request, requestURL);
    if (res && res !== '') {
      if (res.items.length > 0)
        yield put(filterCategoryLoaded(res, page, res.maxPage, search));
    }
  } catch (err) {
    yield put(repoLoadingError(err));
  }
}

export function* searchCategory(prop) {
  // console.log(prop);
  const requestURL = `https://api-stg.connectpos.com/v0/stores/55/products?page=${
    prop.page
  }&limit=10&search=${prop.textSearch}&fields=name,sku`;
  try {
    const res = yield call(request, requestURL);
    // console.log(res)
    if (res && res !== '') {
      yield put(filterCategoryLoaded(res, res.page, res.maxPage, prop.search));
    }
  } catch (err) {
    yield put(filterCategoryError(err));
  }
}

export function* getAllCategory() {
  const requestURL = `https://api-stg.connectpos.com/v0/stores/55/catalogs?page=1&limit=100`;
  try {
    const res = yield call(request, requestURL);
    if (res && res !== '') {
      yield put(getAllCategoryLoaded(res));
    }
  } catch (err) {
    yield put(getAllCategoryError(err));
  }
}

export default function* categoryData() {
  yield takeLatest(FILTER_DATA_CATEGORY, filterCategory);
  yield takeLatest(SEARCH_DATA_CATEGORY, searchCategory);
  yield takeLatest(GET_ALL_CATEGORY, getAllCategory);
}
