import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectCategory = state => state.detail || initialState;

const makeSelectDataDetailProduct = () =>
  createSelector(
    selectCategory,
    detailState => detailState.dataDetailProduct,
  );

const makeSelectQuatity = () =>
  createSelector(
    selectCategory,
    detailState => detailState.quatity,
  );

export { makeSelectDataDetailProduct, makeSelectQuatity };
