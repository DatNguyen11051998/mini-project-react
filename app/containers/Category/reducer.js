import produce from 'immer';
import {
  FILTER_DATA_CATEGORY,
  FILTER_DATA_CATEGORY_SUCCESS,
  FILTER_DATA_CATEGORY_ERROR,
  GET_ALL_CATEGORY,
  GET_ALL_CATEGORY_SUCCESS,
  GET_ALL_CATEGORY_ERROR,
  LOADING_DATA_LIST_CATEGORY,
} from './constant';

export const initialState = {
  dataFilterCategory: [],
  page: 1,
  maxPage: 1,
  search: false,
  loadingData: false,
};

const homeReducer = (state = initialState, action) =>
  produce(state, draft => {
    let newDataFilterCategory = [];
    switch (action.type) {
      case FILTER_DATA_CATEGORY:
        break;
      case FILTER_DATA_CATEGORY_SUCCESS:
        if (action.dataFilterCategory.items === undefined) {
          draft.dataFilterCategory = [];
        }

        if (action.dataFilterCategory.items !== undefined) {
          if (action.page > 1) {
            newDataFilterCategory = [
              ...draft.dataFilterCategory,
              ...action.dataFilterCategory.items,
            ];
            draft.dataFilterCategory = newDataFilterCategory;
          } else {
            draft.dataFilterCategory = action.dataFilterCategory.items;
          }
        }

        draft.page = action.page;
        draft.maxPage = action.maxPage;
        draft.search = action.search;
        break;
      case FILTER_DATA_CATEGORY_ERROR:
        draft.error = action.error;
        break;
      case GET_ALL_CATEGORY:
        break;
      case GET_ALL_CATEGORY_SUCCESS:
        draft.dataAllCategory = action.dataAllCategory.items;
        break;
      case GET_ALL_CATEGORY_ERROR:
        draft.error = action.error;
        break;
      case LOADING_DATA_LIST_CATEGORY:
        draft.loadingData = action.loadingData;
        break;
      default:
        return state;
    }
    return draft;
  });

export default homeReducer;
