import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import reducer from './reducer';
import saga from './saga';
import { getAllCategory } from './action';
import { makeSelectAllDataCategory } from './selectors';
import history from '../../utils/history';
import iconBack from '../../images/ic_back.svg';
import BackGround from '../../components/BackGround';
import HeaderHome from '../../components/HeaderHome';
import IconHome from '../../components/IconHome';
import NameHome from '../../components/NameHome';
import PHome from '../../components/P_Home';
import Div from '../../components/Div';

const key = 'category';

export function CategoryMain({ onGetDataCategory, dataAllCategory }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  useEffect(() => {
    onGetDataCategory();
  }, []);
  const routeChange = id => {
    const path = `/category/${id}`;
    history.push(path);
  };

  // console.log(dataAllCategory,"dataAllCategory")
  const listAllDataCategory = (dataAllCategory || []).map(item => (
    <Div
      onClick={() => {
        routeChange(item.id);
      }}
      key={item.id}
      itemCategory
    >
      {item.name}
    </Div>
  ));

  return (
    <div>
      <BackGround background="#F0F0F0">
        <HeaderHome>
          <IconHome onClick={history.goBack} src={iconBack} />
          <NameHome nameOfCategory> Category </NameHome>
          <PHome />
        </HeaderHome>
        <Div categoryHome>{listAllDataCategory}</Div>
      </BackGround>
    </div>
  );
}
CategoryMain.propTypes = {
  onGetDataCategory: PropTypes.func,
  dataAllCategory: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  dataAllCategory: makeSelectAllDataCategory(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onGetDataCategory: () => dispatch(getAllCategory()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(CategoryMain);
