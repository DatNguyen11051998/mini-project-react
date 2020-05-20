/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import {
  LOAD_REPOS_SUCCESS,
  LOAD_REPOS,
  LOAD_REPOS_ERROR,
  ISLOGGIN,
} from './constants';

// The initial state of the App
export const initialState = {
  loading: false,
  error: false,
  currentUser: false,
  currentPassword: false,
  userData: {
    repositories: false,
  },
  passwordData: {
    repositories: false,
  },
  isLoggin: false,
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_REPOS:
        draft.loading = true;
        draft.error = false;
        draft.userData.repositories = false;
        draft.passwordData.repositories = false;
        break;

      case LOAD_REPOS_SUCCESS:
        draft.userData.repositories = action.repos;
        draft.passwordData.repositories = action.repos;
        draft.loading = false;
        draft.currentUser = action.username;
        draft.currentPassword = action.password;
        draft.isLoggin = action.isLoggin;
        break;

      case LOAD_REPOS_ERROR:
        draft.error = action.error;
        draft.loading = action.isLoggin;
        break;
      case ISLOGGIN:
        draft.isLoggin = action.isLoggin;
        break;
    }
  });

export default appReducer;
