import {
  FILTER_DATA_CATEGORY,
  FILTER_DATA_CATEGORY_SUCCESS,
  SEARCH_DATA_CATEGORY,
  FILTER_DATA_CATEGORY_ERROR,
  GET_ALL_CATEGORY,
  GET_ALL_CATEGORY_SUCCESS,
  GET_ALL_CATEGORY_ERROR,
  LOADING_DATA_LIST_CATEGORY,
} from './constant';
export function loadingDataListCategory(loadingData) {
  return {
    type: LOADING_DATA_LIST_CATEGORY,
    loadingData,
  };
}
export function filterCategory(dataFilterCategory, page, search) {
  return {
    type: FILTER_DATA_CATEGORY,
    dataFilterCategory,
    page,
    search,
  };
}

export function searchCategory(dataFilterCategory, page, textSearch, search) {
  return {
    type: SEARCH_DATA_CATEGORY,
    dataFilterCategory,
    page,
    textSearch,
    search,
  };
}

export function filterCategoryLoaded(
  dataFilterCategory,
  page,
  maxPage,
  search,
) {
  return {
    type: FILTER_DATA_CATEGORY_SUCCESS,
    dataFilterCategory,
    page,
    maxPage,
    search,
  };
}

export function filterCategoryError(error) {
  return {
    type: FILTER_DATA_CATEGORY_ERROR,
    error,
  };
}

export function getAllCategory() {
  return {
    type: GET_ALL_CATEGORY,
  };
}

export function getAllCategoryLoaded(dataAllCategory) {
  return {
    type: GET_ALL_CATEGORY_SUCCESS,
    dataAllCategory,
  };
}

export function getAllCategoryError(error) {
  return {
    type: GET_ALL_CATEGORY_ERROR,
    error,
  };
}
