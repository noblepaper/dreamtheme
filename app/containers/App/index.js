/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Login from 'containers/Login';
import ColorPicker from 'components/ColorPicker';

import GlobalStyle from '../../global-styles';
import saga from './saga';
import reducer from './reducer';

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  overflow-y: scroll;
  overscroll-behavior-y: smooth;
`;

export default function App() {
  useInjectSaga({ key: 'global', saga });
  useInjectReducer({ key: 'global', reducer });
  return (
    <Wrapper>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/color-picker" component={ColorPicker} />
        <Route exact path="/user" component={Login} />
        <Route exact path="/user/:slug" component={Login} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </Wrapper>
  );
}
