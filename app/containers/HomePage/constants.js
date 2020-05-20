/*
 * HomeConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

// export const CHANGE_USERNAME = 'boilerplate/Home/CHANGE_USERNAME';
export const CHANGE_USERNAME = 'CHANGE_USERNAME';
export const CHANGE_PASSWORD = 'CHANGE_PASSWORD';
export const ISLOGGIN = 'ISLOGGIN';
export const GET_DATA_CATEGORY = 'GET_DATA_CATEGORY';
export const GET_DATA_CATEGORY_SUCCESS = 'GET_DATA_CATEGORY_SUCCESS';
export const SET_ID_CATEGORY = 'SET_ID_CATEGORY';
export const GET_DATA_PRODUCT_HOME = 'GET_DATA_PRODUCT_HOME';
export const GET_DATA_PRODUCT_HOME_SUCCESS = 'GET_DATA_PRODUCT_HOME_SUCCESS';
export const SHOW_MENU = 'SHOW_MENU';
export const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE';
export const NOTIFICATION = 'NOTIFICATION';
export const LOADING_DATA_LIST_CATEGORY = 'LOADING_DATA_LIST_CATEGORY';
export const LOADING_DATA_LIST_PRODUCT_HOME = 'LOADING_DATA_LIST_PRODUCT_HOME';
