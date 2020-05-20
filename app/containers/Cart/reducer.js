import produce from 'immer';
import {
  GET_DATA_DETAIL,
  GET_DATA_DETAIL_SUCCESS,
  GET_DATA_DETAIL_ERROR,
  CHANGE_QUATITY,
  INCREASE_QUATITY,
  DECREASE_QUATITY,
} from './constant';

export const initialState = {
  dataDetailProduct: {},
  quatity: 0,
};

const detailReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_DATA_DETAIL:
        break;
      case GET_DATA_DETAIL_SUCCESS:
        draft.dataDetailProduct = action.dataDetailProduct;
        break;
      case GET_DATA_DETAIL_ERROR:
        draft.error = action.error;
        break;
      case CHANGE_QUATITY:
        draft.quatity = action.quatity;
        break;
      case INCREASE_QUATITY:
        draft.quatity += 1;
        break;
      case DECREASE_QUATITY:
        draft.quatity -= 1;
        break;
      default:
        return state;
    }
    return draft;
  });

export default detailReducer;
