/* eslint-disable prettier/prettier */
import React, { useEffect, memo, useRef } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import history from '../../utils/history';
import {
  getDetailproduct,
  changeQuatity,
  decreaseQuatity,
  increaseQuatity,
} from './action';
import reducer from './reducer';
import saga from './saga';
import iconBack from '../../images/ic_back.svg';
import InputLogin from '../../components/InputLogin';
import BackGround from '../../components/BackGround';
import HeaderHome from '../../components/HeaderHome';
import IconHome from '../../components/IconHome';
import NameHome from '../../components/NameHome';
import Div from '../../components/Div';
import { makeSelectDataDetailProduct, makeSelectQuatity } from './selectors';
import StyledButton from '../../components/Button/StyledButton';

const key = 'detail';

export function Cart({
 
  onChangeQuatity,
  onDecreaseQuatity,
  onIncreaseQuatity,
  quatity,
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });


  useEffect(() => {
  }, []);

  const inputEl = useRef(1);
  const { t } = useTranslation();

  return (
    <div >
      <BackGround background="#F0F0F0">
        <HeaderHome>
          <IconHome onClick={history.goBack} src={iconBack} />
          <NameHome >{t('cart3')}</NameHome>

        </HeaderHome>
        <Div mainDetailCart>
          
          <Div wrapChangeQuatity>
            <Div cartQuatity >
              <StyledButton
                onClick={() => (quatity > 0 ? onDecreaseQuatity() : '')}
                increaseCart
              >
                  -
              </StyledButton>
              <InputLogin
                type="tel"
                ref={inputEl}
                value={quatity}
                onChange={onChangeQuatity}
                numberOfQuatity
              />
              <StyledButton onClick={() => onIncreaseQuatity()} decreaseCart>
                  +
              </StyledButton>
            </Div>
          </Div>
        </Div>
      </BackGround>
    </div>
  );
}
Cart.propTypes = {
  onDecreaseQuatity: PropTypes.func,
  onIncreaseQuatity: PropTypes.func,
  onChangeQuatity: PropTypes.func,
  quatity: PropTypes.number,
};

const mapStateToProps = createStructuredSelector({
  dataDetailProduct: makeSelectDataDetailProduct(),
  quatity: makeSelectQuatity(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onGetDetailProduct: idDetail => dispatch(getDetailproduct(idDetail)),
    onDecreaseQuatity: () => dispatch(decreaseQuatity()),
    onIncreaseQuatity: () => dispatch(increaseQuatity()),
    onChangeQuatity: () => dispatch(changeQuatity()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Cart);
