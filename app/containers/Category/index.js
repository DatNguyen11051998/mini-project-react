import React, { useEffect, memo, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import LoadingIndicator from 'components/LoadingIndicator';
import { filterCategory, searchCategory } from './action';
import reducer from './reducer';
import saga from './saga';
import history from '../../utils/history';
import iconAccount from '../../images/ic_account.svg';
import iconCart from '../../images/ic_cart.svg';
import iconBack from '../../images/ic_back.svg';
import iconScanMedium from '../../images/ic_scan_medium.svg';
import iconSearchBig from '../../images/ic_search_big.svg';
import InputLogin from '../../components/InputLogin';
import BackGround from '../../components/BackGround';
import HeaderHome from '../../components/HeaderHome';
import IconHome from '../../components/IconHome';
import NameHome from '../../components/NameHome';
import WrapImgHome from '../../components/WrapImgHome';
import PHome from '../../components/P_Home';
import Div from '../../components/Div';
import {
  makeSelectDataFilterCategory,
  makeSelectPage,
  makeSelectMaxPage,
  makeSeleteSearch,
  makeSelectLoadingCategory,
} from './selectors';

const key = 'category';

export function Category({
  match,
  dataFilterCategory,
  onFilterCategory,
  onSearchCategory,
  page,
  maxPage,
  search,
  loadingListCategory,
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  const { idCategory } = match.params;
  useEffect(() => {
    onFilterCategory(idCategory, 1, false);
  }, []);

  const { t } = useTranslation();

  const inputEl = useRef(null);
  const routeChange = id => {
    const path = `/detail/${id}`;
    history.push(path);
  };

  // let listFilterCategory = [];
  let listFilterCategory = [];
  if (dataFilterCategory.length > 0) {
    listFilterCategory = dataFilterCategory.map(item => (
      <Div
        key={item.id}
        onClick={() => {
          routeChange(item.id);
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
  }

  function choseFunction() {
    if (maxPage >= page + 1) {
      if (search) {
        onSearchCategory(idCategory, page + 1, inputEl.current.value, true);
      } else {
        onFilterCategory(idCategory, page + 1, false);
      }
    }
  }
  function enterPressed(event) {
    const code = event.keyCode || event.which;
    if (code === 13) {
      onSearchCategory(idCategory, page, inputEl.current.value, true);
    }
  }
  return (
    <div>
      <BackGround background="#F0F0F0">
        <HeaderHome>
          <IconHome onClick={history.goBack} src={iconBack} />
          <NameHome />
          <IconHome src={iconAccount} />
          <WrapImgHome>
            <IconHome src={iconCart} />
            <PHome numberItem> 2 </PHome>
          </WrapImgHome>
        </HeaderHome>

        <Div mainCategory>
          <Div category row>
            <IconHome
              onClick={() =>
                onSearchCategory(idCategory, page, inputEl.current.value, true)
              }
              src={iconSearchBig}
            />
            <InputLogin
              onKeyPress={event => enterPressed(event)}
              id="myInput"
              ref={inputEl}
              noneBoder
              placeholder="Type your Search"
              category
            />
          </Div>
        </Div>
        <Div typeofFilter>{t('Summer 2020 collection')}</Div>
        <Div listItem>
          {loadingListCategory ? <LoadingIndicator /> : listFilterCategory}
        </Div>
        <Div align>
          <Div onClick={() => choseFunction()} showMore>
            {t('Show more')}
          </Div>
        </Div>

        <Div footer>
          <IconHome scanFooter src={iconScanMedium} />
        </Div>
      </BackGround>
    </div>
  );
}
Category.propTypes = {
  onFilterCategory: PropTypes.func,
  onSearchCategory: PropTypes.func,
  dataFilterCategory: PropTypes.array,
  page: PropTypes.number,
  maxPage: PropTypes.number,
  match: PropTypes.object,
  search: PropTypes.bool,
  loadingListCategory: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  dataFilterCategory: makeSelectDataFilterCategory(),
  page: makeSelectPage(),
  maxPage: makeSelectMaxPage(),
  search: makeSeleteSearch(),
  loadingListCategory: makeSelectLoadingCategory(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onSearchCategory: (idCategory, page, textSearch, search) =>
      dispatch(searchCategory(idCategory, page, textSearch, search)),
    onFilterCategory: (idCategory, page, search) =>
      dispatch(filterCategory(idCategory, page, search)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Category);
