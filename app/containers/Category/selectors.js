import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectCategory = state => state.category || initialState;

const makeSelectDataFilterCategory = () =>
  createSelector(
    selectCategory,
    categoryState => categoryState.dataFilterCategory,
  );

const makeSelectPage = () =>
  createSelector(
    selectCategory,
    categoryState => categoryState.page,
  );

const makeSelectMaxPage = () =>
  createSelector(
    selectCategory,
    categoryState => categoryState.maxPage,
  );

const makeSeleteSearch = () =>
  createSelector(
    selectCategory,
    categoryState => categoryState.search,
  );

const makeSelectAllDataCategory = () =>
  createSelector(
    selectCategory,
    categoryState => categoryState.dataAllCategory,
  );
const makeSelectLoadingCategory = () =>
  createSelector(
    selectCategory,
    homeState => homeState.loadingData,
  );
export {
  makeSelectLoadingCategory,
  selectCategory,
  makeSelectDataFilterCategory,
  makeSelectPage,
  makeSelectMaxPage,
  makeSeleteSearch,
  makeSelectAllDataCategory,
};
