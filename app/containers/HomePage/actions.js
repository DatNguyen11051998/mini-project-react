import {
  CHANGE_USERNAME,
  CHANGE_PASSWORD,
  GET_DATA_CATEGORY,
  GET_DATA_CATEGORY_SUCCESS,
  SET_ID_CATEGORY,
  GET_DATA_PRODUCT_HOME,
  GET_DATA_PRODUCT_HOME_SUCCESS,
  SHOW_MENU,
  CHANGE_LANGUAGE,
  NOTIFICATION,
  LOADING_DATA_LIST_CATEGORY,
  LOADING_DATA_LIST_PRODUCT_HOME,
} from './constants';
export function loadingDataListCategory(loadingData) {
  return {
    type: LOADING_DATA_LIST_CATEGORY,
    loadingData,
  };
}
export function loadingDataProductHome(loadingData) {
  return {
    type: LOADING_DATA_LIST_PRODUCT_HOME,
    loadingData,
  };
}
export function changeUsername(username) {
  return {
    type: CHANGE_USERNAME,
    username,
  };
}

export function changePassword(password) {
  return {
    type: CHANGE_PASSWORD,
    password,
  };
}
export function notification(isNotification) {
  return {
    type: NOTIFICATION,
    isNotification,
  };
}
export function getDataCategory(dataCategory, loadingData) {
  return {
    type: GET_DATA_CATEGORY,
    dataCategory,
    loadingData,
  };
}
export function dataCategoryLoaded(dataCategory) {
  return {
    type: GET_DATA_CATEGORY_SUCCESS,
    dataCategory,
  };
}

export function setIdcategory(idCategory) {
  return {
    type: SET_ID_CATEGORY,
    idCategory,
  };
}

export function getDataHome(dataProductHome, page) {
  return {
    type: GET_DATA_PRODUCT_HOME,
    dataProductHome,
    page,
  };
}

export function dataProductHomeLoaded(dataProductHome, page, maxPage) {
  return {
    type: GET_DATA_PRODUCT_HOME_SUCCESS,
    dataProductHome,
    page,
    maxPage,
  };
}

export function changeLanguagePage(langVN) {
  localStorage.setItem('lang', langVN);
  return {
    type: CHANGE_LANGUAGE,
    langVN,
  };
}

export function showMenu(menuPage) {
  return {
    type: SHOW_MENU,
    menuPage,
  };
}
