/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import Category from 'containers/Category/Loadable';
import Detail from 'containers/Detail/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Cart from 'containers/Cart/Loadable';
import CategoryMain from '../Category/Category';
// import Header from 'components/Header';
// import Footer from 'components/Footer';

import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
`;

export default function App() {
  return (
    <>
      <AppWrapper>
        <Helmet
          titleTemplate="%s - React.js Boilerplate"
          defaultTitle="React.js Boilerplate"
        >
          <meta
            name="description"
            content="A React.js Boilerplate application"
          />
        </Helmet>
        {/* <Header /> */}
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/features" component={FeaturePage} />
          <Route path="/category_home" component={CategoryMain} />
          <Route path="/category/:idCategory" component={Category} />
          <Route path="/detail/:idDetail" component={Detail} />
          <Route path="/cart" component={Cart} />
          <Route path="" component={NotFoundPage} />
        </Switch>
        {/* <Footer /> */}
        <GlobalStyle />
      </AppWrapper>
    </>
  );
}
