import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
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
  makeSelectLoading,
  makeSelectError,
  makeSelectIsLoggin,
} from 'containers/App/selectors';
import A from 'components/A';

import { useTranslation } from 'react-i18next';
import i18n from '../../i18nHome';
import {
  makeSelectDataCategory,
  makeSelectIdCategory,
  makeSelectDataProductHome,
  makeSelectMaxPage,
  makeSelectPage,
  makeSelectToggleShowMenuHome,
  makeSelectlangVN,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import logoLogin from '../../images/img_profile_thumb.png';
import expandedBlue from '../../images/ic_expand_blue.svg';
import iconClose from '../../images/ic_close.svg';
import IconHome from '../../components/IconHome';
import PHome from '../../components/P_Home';
import Div from '../../components/Div';
const key = 'home';

export function MenuHome({
  showMenuHome,
  onShowMenu,
  onChangeLanguage,
  langVN,
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  useEffect(() => {
    // let lang = localStorage.getItem('defaul') || 'en';
    // localStorage.setItem('defaul', lang);
    // console.log(lang);
    i18n.changeLanguage(localStorage.getItem('lang'));
    console.log(localStorage.getItem('lang'));
  }, [langVN]);

  const { t } = useTranslation();
  let listMenu = [];
  if (showMenuHome === 'Home') {
    listMenu = [
      { name: 'Home', path: '/' },
      { name: 'Whats New?', path: '/category_home' },
      { name: 'Category', path: '/' },
      { name: 'Sale', path: '/' },
    ];
  }
  if (showMenuHome === 'ManageAcc') {
    listMenu = [
      { name: 'Notification', path: '/' },
      { name: 'Order List?', path: '/' },
      { name: 'Address Book', path: '/' },
      { name: 'Wish List', path: '/' },
    ];
  }

  const listItem = listMenu.map(item => (
    <A key={Math.random()} menuHome color="rgba(0,0,0,0.85)" href={item.path}>
      {t(`${item.name}`)}
    </A>
  ));
  console.log('langVN', langVN);
  return (
    <Div WrappMenuAcc>
      <Div menuAcc>
        <Div height="22vh" bg="#FFFFFF">
          {/* khi ở trong tab menu */}
          <IconHome onClick={() => onShowMenu('')} iconClose src={iconClose} />
          <Div Acc row>
            <IconHome width={52} height={52} src={logoLogin} />
            <Div flexStart>
              <PHome fontSize="20px" color="rgba(0,0,0,0.85)">
                John Doe
              </PHome>
              <PHome fontSize="16px" color="rgba(0,0,0,0.37)">
                Johndoe@gmail.com
              </PHome>
            </Div>
            <IconHome
              onClick={() => onShowMenu('ManageAcc')}
              visiable={showMenuHome === 'Home' ? 'visible' : 'hidden'}
              src={expandedBlue}
            />
          </Div>
        </Div>
        <Div block2 height="68vh" bg="#FFFFFF">
          <Div menuHome>
            {listItem}
            {showMenuHome === 'ManageAcc' && (
              <A
                onClick={() => {
                  localStorage.clear();
                }}
                color="red"
                menuHome
              >
                {t(`Logout`)}
              </A>
            )}
          </Div>
          {showMenuHome === 'Home' && (
            <Div language>
              <PHome color="rgba(0,0,0,0.85)" fontSize="18px">
                {t('Language')}
              </PHome>
              <Div wrappButtonLanguage>
                <Div
                  onClick={() => {
                    onChangeLanguage('de');
                    i18n.changeLanguage('de');
                  }}
                  bg={langVN === 'de' ? '#30A59C' : '#F1F1F1'}
                >
                  VN
                </Div>
                <Div
                  onClick={() => {
                    onChangeLanguage('en');
                    i18n.changeLanguage('en');
                  }}
                  bg={langVN === 'en' ? '#30A59C' : '#F1F1F1'}
                >
                  EN
                </Div>
              </Div>
            </Div>
          )}
        </Div>
        <Div footerMenuHome bg="#F1F1F1">
          @ 2020 connect POS
        </Div>
      </Div>
    </Div>
  );
}

MenuHome.propTypes = {
  onShowMenu: PropTypes.func,
  onChangeLanguage: PropTypes.func,
  langVN: PropTypes.string,
  showMenuHome: PropTypes.string,
};

export const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  error: makeSelectError(),
  isLogin: makeSelectIsLoggin(),
  dataCategory: makeSelectDataCategory(),
  idCategory: makeSelectIdCategory(),
  dataProductHome: makeSelectDataProductHome(),
  page: makeSelectPage(),
  maxPage: makeSelectMaxPage(),
  showMenuHome: makeSelectToggleShowMenuHome(),
  langVN: makeSelectlangVN(),
});
export function mapDispatchToProps(dispatch) {
  return {
    onChangeLanguage: langVN => dispatch(changeLanguagePage(langVN)),
    onShowMenu: page => dispatch(showMenu(page)),
    onGetDataHome: (idCategory, page) =>
      dispatch(getDataHome(idCategory, page)),
    onSetIdcategory: idCategory => dispatch(setIdcategory(idCategory)),
    onGetDataCategory: () => dispatch(getDataCategory()),
    onChangeUsername: evt => dispatch(changeUsername(evt.target.value)),
    onChangePassword: evt => dispatch(changePassword(evt.target.value)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(MenuHome);
