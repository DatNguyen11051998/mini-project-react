/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { changeLogin, loadRepos } from 'containers/App/actions';
import {
  getDataCategory,
  changeUsername,
  changePassword,
  setIdcategory,
  getDataHome,
  showMenu,
  changeLanguagePage,
} from 'containers/HomePage/actions';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import {
  makeSelectRepos,
  makeSelectLoading,
  makeSelectError,
  makeSelectIsLoggin,
} from 'containers/App/selectors';
import { useTranslation } from 'react-i18next';
import LoadingIndicator from 'components/LoadingIndicator';
import {
  makeSelectUsername,
  makeSelectPassword,
  makeSelectDataCategory,
  makeSelectIdCategory,
  makeSelectDataProductHome,
  makeSelectMaxPage,
  makeSelectPage,
  makeSelectToggleShowMenuHome,
  makeSelectShowNotification,
  makeSelectLoadingCategory,
  makeSelectLoadingProductHome,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import HeaderLogin from '../../components/HeaderLogin';
import BodyLogin from '../../components/BodyLogin';
import WrapperLogin from '../../components/WrapperLogin';
import logoLogin from '../../images/img_profile_thumb.png';
import menuHome from '../../images/ic_menu.svg';
import iconOpen from '../../images/ic_back_white.svg';
import iconAccount from '../../images/ic_account.svg';
import iconCart from '../../images/ic_cart.svg';
import iconScanBig from '../../images/ic_scan_big.svg';
import iconScanMedium from '../../images/ic_scan_medium.svg';
import iconSearchBig from '../../images/ic_search_big.svg';
import ImgagesLogin from '../../components/ImgagesLogin';
import MainLogin from '../../components/MainLogin';
import FormLogin from '../../components/FormLogin';
import InputLogin from '../../components/InputLogin';
import PLogin from '../../components/P_Login';
import ALogin from '../../components/A_Login';
import IconLoggin from '../../components/IconLogin';
import BackGround from '../../components/BackGround';
import HeaderHome from '../../components/HeaderHome';
import IconHome from '../../components/IconHome';
import NameHome from '../../components/NameHome';
import WrapImgHome from '../../components/WrapImgHome';
import PHome from '../../components/P_Home';
import Div from '../../components/Div';
import StyledButton from '../../components/Button/StyledButton';
import history from '../../utils/history';
import MenuHome from './MenuHome';
import i18n from '../../i18nHome';
const key = 'home';

export function HomePage({
  username,
  password,
  isLogin,
  onSubmitForm,
  onChangeUsername,
  onChangePassword,
  onChangeIsLoggin,
  onSetIdcategory,
  onGetDataCategory,
  dataCategory,
  idCategory,
  page,
  maxPage,
  dataProductHome,
  onGetDataHome,
  showMenuHome,
  onShowMenu,
  showNotification,
  loadingListCategory,
  loadingListProductHome,
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const { t } = useTranslation();

  useEffect(() => {
    // When initial state username is not null, submit the form to load repos
    if (username && username.trim().length > 0) onSubmitForm();
    if (password && password.trim().length > 0) onSubmitForm();
    changeLanguagePage(localStorage.getItem('lang'));
    i18n.changeLanguage(localStorage.getItem('lang'));
    if (isLogin === true) onGetDataCategory();
    if (isLogin === true) onGetDataHome(idCategory, 1);
    localStorage.clear();
  }, [isLogin]); // run effect sau khi clean up thay doi
  if (
    localStorage.getItem('token') &&
    localStorage.getItem('token').length > 0
  ) {
    onChangeIsLoggin(true);
  }
  const routeChange = id => {
    const path = `/category/${id}`;
    history.push(path);
  };

  const routeChangeDetail = id => {
    const path = `/detail/${id}`;
    history.push(path);
  };
  // list button key category ;
  const listCategory = dataCategory.map(item => (
    <StyledButton
      onClick={() => {
        routeChange(item.id);
        onSetIdcategory(item.id);
      }}
      key={item.id}
      buttonHome
      active
    >
      {item.name}
    </StyledButton>
  ));

  // console.log(dataProductHome,"dataProductHome")
  // list categoryHome
  const listDataProductHome = dataProductHome.map(item => (
    <Div
      key={item.id}
      onClick={() => {
        routeChangeDetail(item.id);
      }}
      item
    >
      <IconHome item src={item.imageUrl} />
      <Div detailItem>
        <PHome detailItem color="rgba(0,0,0,0.85)">
          {item.name}
        </PHome>
        <PHome detailItem color="#FA7B00">
          ${item.price}
        </PHome>
      </Div>
    </Div>
  ));
  return (
    <div>
      {!isLogin && (
        <WrapperLogin>
          <HeaderLogin>
            <IconLoggin src={iconOpen} />
          </HeaderLogin>
          <BodyLogin>
            <ImgagesLogin loggin src={logoLogin} />

            <MainLogin>
              <PLogin> Login </PLogin>
              {showNotification && (
                <PLogin warning>Tài khoản hoặc mật khẩu không đúng</PLogin>
              )}
              <FormLogin onSubmit={onSubmitForm}>
                <InputLogin
                  id="username"
                  type="text"
                  placeholder="User Name"
                  value={username}
                  onChange={onChangeUsername}
                />
                <InputLogin
                  id="password"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={onChangePassword}
                />
                <ALogin href="/">Forgot password</ALogin>
                <InputLogin type="submit" value="Login" />
              </FormLogin>
              <PLogin text> Register an account </PLogin>
            </MainLogin>
          </BodyLogin>
        </WrapperLogin>
      )}

      {isLogin && (
        <Div home>
          {(showMenuHome === 'Home' || showMenuHome === 'ManageAcc') && (
            <MenuHome />
          )}

          <BackGround background="#F0F0F0">
            <HeaderHome>
              <IconHome onClick={() => onShowMenu('Home')} src={menuHome} />
              <NameHome> calvin klein </NameHome>
              <IconHome boder src={iconAccount} />
              <WrapImgHome bg="#F3F3F3">
                <IconHome src={iconCart} />
                <PHome numberItem> 2 </PHome>
              </WrapImgHome>
            </HeaderHome>

            <Div main>
              <Div welcome>
                <PHome welcome> {t('Welcome to Calvin Klein Store')}</PHome>
                <PHome welcome_sub> 1481 Fedora Ct</PHome>
              </Div>

              <PHome experience>
                {t('Experience the smart shopping bt scan!')}
              </PHome>

              <Div scan>
                <Div childrenOfScan>
                  <IconHome childrenOfScan src={iconScanBig} />
                  {t('Scan')}
                </Div>
                <Div childrenOfScan>
                  <IconHome
                    childrenOfScan
                    childrenOfScan__modified
                    src={iconSearchBig}
                  />
                  {t('Search')}
                </Div>
              </Div>
              <Div filterItem>
                {loadingListCategory ? <LoadingIndicator /> : listCategory}
              </Div>
            </Div>

            <Div listItem>
              {loadingListProductHome ? (
                <LoadingIndicator />
              ) : (
                listDataProductHome
              )}
            </Div>

            <Div align>
              <Div
                onClick={() =>
                  maxPage >= page + 1 ? onGetDataHome(idCategory, page + 1) : ''
                }
                showMore
              >
                {t('Show more')}
              </Div>
            </Div>

            <Div footer>
              <IconHome scanFooter src={iconScanMedium} />
            </Div>
          </BackGround>
        </Div>
      )}
    </div>
  );
}

HomePage.propTypes = {
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
  password: PropTypes.string,
  onChangeUsername: PropTypes.func,
  onChangePassword: PropTypes.func,
  onChangeIsLoggin: PropTypes.func,
  onSetIdcategory: PropTypes.func,
  isLogin: PropTypes.bool,
  onGetDataCategory: PropTypes.func,
  dataCategory: PropTypes.array,
  idCategory: PropTypes.string,
  dataProductHome: PropTypes.array,
  page: PropTypes.number,
  maxPage: PropTypes.number,
  onGetDataHome: PropTypes.func,
  onShowMenu: PropTypes.func,
  showMenuHome: PropTypes.string,
  showNotification: PropTypes.bool,
  loadingListCategory: PropTypes.bool,
  loadingListProductHome: PropTypes.bool,
};

export const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  username: makeSelectUsername(),
  password: makeSelectPassword(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
  isLogin: makeSelectIsLoggin(),
  dataCategory: makeSelectDataCategory(),
  idCategory: makeSelectIdCategory(),
  dataProductHome: makeSelectDataProductHome(),
  page: makeSelectPage(),
  maxPage: makeSelectMaxPage(),
  showMenuHome: makeSelectToggleShowMenuHome(),
  showNotification: makeSelectShowNotification(),
  loadingListCategory: makeSelectLoadingCategory(),
  loadingListProductHome: makeSelectLoadingProductHome(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onShowMenu: Home => dispatch(showMenu(Home)),
    onGetDataHome: (idCategory, page) =>
      dispatch(getDataHome(idCategory, page)),
    onSetIdcategory: idCategory => dispatch(setIdcategory(idCategory)),
    onGetDataCategory: () => dispatch(getDataCategory()),
    onChangeIsLoggin: () => dispatch(changeLogin(true)),
    onChangeUsername: evt => dispatch(changeUsername(evt.target.value)),
    onChangePassword: evt => dispatch(changePassword(evt.target.value)),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadRepos());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);
