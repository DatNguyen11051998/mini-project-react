import produce from 'immer';
import {
  CHANGE_USERNAME,
  CHANGE_PASSWORD,
  NOTIFICATION,
  GET_DATA_CATEGORY,
  GET_DATA_CATEGORY_SUCCESS,
  SET_ID_CATEGORY,
  GET_DATA_PRODUCT_HOME,
  GET_DATA_PRODUCT_HOME_SUCCESS,
  SHOW_MENU,
  CHANGE_LANGUAGE,
  LOADING_DATA_LIST_CATEGORY,
  LOADING_DATA_LIST_PRODUCT_HOME,
} from './constants';

export const initialState = {
  username: '',
  password: '',
  dataCategory: [],
  idCategory: '0',
  dataProductHome: [],
  page: 0,
  maxPage: 0,
  langVN: localStorage.getItem('lang') || 'en',
  menuPage: '',
  showNotification: false,
  loadingData: false,
};

const homeReducer = (state = initialState, action) =>
  produce(state, draft => {
    let newDataProductHome = [];
    // console.log(action.idCategory,"homeReducer")
    switch (action.type) {
      case CHANGE_USERNAME:
        draft.username = action.username;
        break;
      case CHANGE_PASSWORD:
        draft.password = action.password;
        break;
      case NOTIFICATION:
        draft.showNotification = action.isNotification; // action. values của nó
        break;
      case GET_DATA_CATEGORY:
        draft.loadingData = true;
        break;
      case GET_DATA_CATEGORY_SUCCESS:
        draft.dataCategory = action.dataCategory.items;
        draft.loadingData = false;
        break;
      case SET_ID_CATEGORY:
        draft.idCategory = action.idCategory;
        break;
      case GET_DATA_PRODUCT_HOME:
        break;
      case GET_DATA_PRODUCT_HOME_SUCCESS:
        if (action.page > 1) {
          newDataProductHome = [
            ...draft.dataProductHome,
            ...action.dataProductHome.items,
          ];
          draft.dataProductHome = newDataProductHome;
        } else {
          draft.dataProductHome = action.dataProductHome.items;
        }
        draft.page = action.page;
        draft.maxPage = action.maxPage;
        break;
      case SHOW_MENU:
        draft.menuPage = action.menuPage;
        break;
      case CHANGE_LANGUAGE:
        draft.langVN = action.langVN;
        break;
      case LOADING_DATA_LIST_CATEGORY:
        draft.loadingData = action.loadingData;
        break;
      case LOADING_DATA_LIST_PRODUCT_HOME:
        draft.loadingData = action.loadingData;
        break;
      default:
        return state;
    }
    return draft;
  });

export default homeReducer;
