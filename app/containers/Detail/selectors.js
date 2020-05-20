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
const makeSelectPriceProduct = () =>
  createSelector(
    selectCategory,
    detailState => detailState.priceProduct,
  );
const makeSelectLoadingCategory = () =>
  createSelector(
    selectCategory,
    homeState => homeState.loadingData,
  );
export {
  makeSelectLoadingCategory,
  makeSelectDataDetailProduct,
  makeSelectQuatity,
  makeSelectPriceProduct,
};
