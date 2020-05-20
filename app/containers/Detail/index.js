/* eslint-disable prettier/prettier */
import React, { useEffect, memo, useRef } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import LoadingIndicator from 'components/LoadingIndicator';
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
import imgSearch from '../../images/ic_search_big.png';
import iconAccount from '../../images/ic_account.svg';
import iconCart from '../../images/ic_cart.svg';
import iconBack from '../../images/ic_back.svg';
import iconCartAdd from '../../images/ic_cart_add.svg';
import iconHeart from '../../images/ic_wishlist.svg';
import InputLogin from '../../components/InputLogin';
import BackGround from '../../components/BackGround';
import HeaderHome from '../../components/HeaderHome';
import IconHome from '../../components/IconHome';
import NameHome from '../../components/NameHome';
import WrapImgHome from '../../components/WrapImgHome';
import PHome from '../../components/P_Home';
import Div from '../../components/Div';
import { makeSelectDataDetailProduct, makeSelectQuatity, makeSelectLoadingCategory } from './selectors';
import Imgages from '../../components/ImgagesLogin';
import StyledButton from '../../components/Button/StyledButton';

const key = 'detail';
// eslint-disable-next-line prettier/prettier
const defaultImg = 'https://magento23demo.connectpos.com/pub/media/catalog/product/m/b/mb04-black-0.jpg';
export function Detail({
  match,
  onGetDetailProduct,
  dataDetailProduct,
  onChangeQuatity,
  onDecreaseQuatity,
  onIncreaseQuatity,
  quatity,
  loadingListCategory,
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const { idDetail } = match.params;

  useEffect(() => {
    onGetDetailProduct(idDetail);
  }, []);

  const inputEl = useRef(1);
  const { t } = useTranslation();
  let AllDataDetail = <Div nofounded> {t('Connecting...')}!</Div>;
  AllDataDetail = (dataDetailProduct.gallery || []).map((value, index) => (
    <Imgages
      // eslint-disable-next-line react/no-array-index-key
      key={`option${index}`}
      optionDetailproduct
      src={value || defaultImg}
    />
  ));

  return (
    <div>
      <BackGround background="#F0F0F0">
        <HeaderHome>
          <IconHome onClick={history.goBack} src={iconBack} />
          <NameHome />
          <IconHome width="30" height="30" src={imgSearch} />
          <IconHome src={iconAccount} />
          <WrapImgHome>
            <IconHome src={iconCart} />
            <PHome numberItem> 2 </PHome>
          </WrapImgHome>
        </HeaderHome>

        <Div mainDetail>
          <Div>
            <IconHome heartDetail src={iconHeart} />
            <Imgages
              imgDetail
              src={dataDetailProduct.imageUrl || defaultImg}
              atl="Detail product"
            />
          </Div>

          <Div optionDetailproduct>{loadingListCategory ? <LoadingIndicator /> : AllDataDetail}</Div>

          <Div nameOfDetailProduct>
            <PHome subTextDetail> {dataDetailProduct.subName || ''} </PHome>
            <PHome textDetail>{dataDetailProduct.name || ''}</PHome>
          </Div>

          <Div priceDetailProduct>
            <PHome oldPrice> ${dataDetailProduct.oldPrice || ''} </PHome>
            <PHome newPrice> ${dataDetailProduct.price*quatity || ''} </PHome>
          </Div>

          <Div colorDetailProduct>
            <Div row textDetailColor>
              <PHome textDetailColor>{t('Color')}: </PHome>
              <PHome detailColor> Cyan </PHome>
            </Div>
            <Div row choseColor>
              <Div ActiveColor colorToChose>
                <PHome colorToChose bg="#44D7B6 " />
              </Div>

              <Div colorToChose>
                <PHome colorToChose bg="#2D98EA" />
              </Div>

              <Div colorToChose>
                <PHome colorToChose bg="#FB8739" />
              </Div>

              <Div colorToChose>
                <PHome colorToChose bg="#C9C9C9" />
              </Div>
              <Div colorToChose>
                <PHome colorToChose bg="red" />
              </Div>
            </Div>
          </Div>

          <Div row sizeDetailProduct>
            <Div row textDetailSize>
              <PHome textDetailSize> Size: </PHome>
              <PHome detailSize> XL </PHome>
            </Div>
            <Div row choseSize>
              <Div sizeToChose> X </Div>
              <Div sizeToChose>M</Div>
              <Div sizeToChose>L</Div>
              <Div sizeToChose ActiveSize>
                XL
              </Div>
              <Div sizeToChose>XXL</Div>
            </Div>
          </Div>

          <Div quatity>
            <PHome titleQuatity>{t('Instock')}</PHome>
            <Div wrapChangeQuatity>
              <PHome textQuatity> Quatity: </PHome>
              <Div changeQuatity>
                <StyledButton
                  onClick={() => (quatity > 1 ? onDecreaseQuatity() : '')}
                  increase
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
                <StyledButton onClick={() => onIncreaseQuatity()} decrease>
                  +
                </StyledButton>
              </Div>
            </Div>
          </Div>

          <Div buyProduct>
            <StyledButton addToCart>
              <IconHome src={iconCartAdd} />
              <PHome addToCart>{t('Add to cart')}</PHome>
            </StyledButton>
            <StyledButton buyNow>{t('Buy now')}</StyledButton>
          </Div>
        </Div>
      </BackGround>
    </div>
  );
}
Detail.propTypes = {
  onGetDetailProduct: PropTypes.func,
  onDecreaseQuatity: PropTypes.func,
  onIncreaseQuatity: PropTypes.func,
  onChangeQuatity: PropTypes.func,
  dataDetailProduct: PropTypes.object,
  quatity: PropTypes.number,
  match: PropTypes.object,
  loadingListCategory: PropTypes.bool,
  // onGetDetailProduct: PropTypes.func,
  // onIncreaseQuatity: PropTypes.func,
  // onDecreaseQuatity: PropTypes.func,
  // dataDetailProduct: PropTypes.object,
  // onChangeQuatity: PropTypes.func,
  // match: PropTypes.object,
  // quatity: PropTypes.number,
};

const mapStateToProps = createStructuredSelector({
  dataDetailProduct: makeSelectDataDetailProduct(),
  quatity: makeSelectQuatity(),
  loadingListCategory: makeSelectLoadingCategory(),
  // price: makeSelectPriceProduct(),
  // dataDetailProduct: makeSelectDataDetailProduct(),
  // quatity: makeSelectQuatity(),
});

export function mapDispatchToProps(dispatch) {
  return {
    // CHANGE STATE
    // onGetDetailProduct: idDetail => dispatch(getDetailproduct(idDetail)),
    // onChangeQuatity: evt => dispatch(changeQuatity(evt.target.value)),
    // onIncreaseQuatity: () => dispatch(increaseQuatity()),
    // onDecreaseQuatity: () => dispatch(decreaseQuatity()),
    onGetDetailProduct: idDetail => dispatch(getDetailproduct(idDetail)),
    onDecreaseQuatity: () => dispatch(decreaseQuatity()),
    onIncreaseQuatity: () => dispatch(increaseQuatity()),
    onChangeQuatity: () => dispatch(changeQuatity()),
    // onChangePrice: () => dispatch(changePrice()),





  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Detail);
