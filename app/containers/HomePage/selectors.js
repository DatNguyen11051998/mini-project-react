/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.home || initialState;

const makeSelectUsername = () =>
  createSelector(
    selectHome,
    homeState => homeState.username,
  );

const makeSelectPassword = () =>
  createSelector(
    selectHome,
    homeState => homeState.password,
  );
const makeSelectShowNotification = () =>
  createSelector(
    selectHome,
    homeState => homeState.showNotification,
  );
const makeSelectDataCategory = () =>
  createSelector(
    selectHome,
    homeState => homeState.dataCategory,
  );

const makeSelectIdCategory = () =>
  createSelector(
    selectHome,
    homeState => homeState.idCategory,
  );

const makeSelectDataProductHome = () =>
  createSelector(
    selectHome,
    homeState => homeState.dataProductHome,
  );

const makeSelectPage = () =>
  createSelector(
    selectHome,
    homeState => homeState.page,
  );

const makeSelectMaxPage = () =>
  createSelector(
    selectHome,
    homeState => homeState.maxPage,
  );

const makeSelectToggleShowMenuHome = () =>
  createSelector(
    selectHome,
    homeState => homeState.menuPage,
  );

const makeSelectlangVN = () =>
  createSelector(
    selectHome,
    homeState => homeState.langVN,
  );
const makeSelectLoadingCategory = () =>
  createSelector(
    selectHome,
    homeState => homeState.loadingData,
  );
const makeSelectLoadingProductHome = () =>
  createSelector(
    selectHome,
    homeState => homeState.loadingData,
  );
export {
  selectHome,
  makeSelectUsername,
  makeSelectPassword,
  makeSelectShowNotification,
  makeSelectDataCategory,
  makeSelectIdCategory,
  makeSelectDataProductHome,
  makeSelectPage,
  makeSelectMaxPage,
  makeSelectToggleShowMenuHome,
  makeSelectlangVN,
  makeSelectLoadingCategory,
  makeSelectLoadingProductHome,
};
