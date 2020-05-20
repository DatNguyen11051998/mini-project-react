import {
  GET_DATA_DETAIL,
  GET_DATA_DETAIL_SUCCESS,
  GET_DATA_DETAIL_ERROR,
  CHANGE_QUATITY,
  INCREASE_QUATITY,
  DECREASE_QUATITY,
} from './constant';

export function changeQuatity(quatity) {
  return {
    type: CHANGE_QUATITY,
    quatity,
  };
}

export function increaseQuatity() {
  return {
    type: INCREASE_QUATITY,
  };
}

export function decreaseQuatity() {
  return {
    type: DECREASE_QUATITY,
  };
}

export function getDetailproduct(idDetail) {
  return {
    type: GET_DATA_DETAIL,
    idDetail,
  };
}

export function getDetailproductSuccess(dataDetailProduct) {
  // console.log(dataDetailProduct);
  return {
    type: GET_DATA_DETAIL_SUCCESS,
    dataDetailProduct,
  };
}

export function getDetailproductEror(error) {
  return {
    type: GET_DATA_DETAIL_ERROR,
    error,
  };
}
