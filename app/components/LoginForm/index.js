/**
 *
 * LoginForm
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors, fonts, media } from 'theme';

import SignInTab from './SignInTab';

const Wrapper = styled.form`
  padding: 37px 0 65px;
  border-radius: 8px;
  box-shadow: 0 4px 4px 0 rgba(191, 191, 191, 0.5);
  background-color: ${colors.white};
  width: 100%;
  max-width: 345px;

  ${media.xSmall`
    border-radius: 0;
    box-shadow: unset;
  `}
`;

const TabHeader = styled.div`
  margin-left: 43px;
  &:after {
    content: '';
    clear: both;
    display: table;
  }
`;

const OnTab = styled.h1`
  ${fonts.default.light}
  color: ${colors.font};
  font-size: 32px;
  display: inline;
  line-height: 52px;
  vertical-align: middle;
`;

const SwitchToTab = styled.a`
  ${fonts.default.light}
  color: ${colors.font};
  margin-bottom: 52px;
  height: 54px;
  padding: 15px 50px;
  background-color: ${colors.highlight};
  float: right;

  ${media.xSmall`
    padding: 15px 30px;
  `}
`;

const ContentWrapper = styled.div`
  margin-left: 23px;
`;

function LoginForm({ loginWithGoogle }) {
  const loginFunctions = { loginWithGoogle };

  return (
    <Wrapper>
      <TabHeader>
        <OnTab>Sign In</OnTab>
        <SwitchToTab>Register</SwitchToTab>
      </TabHeader>
      <ContentWrapper>
        <Switch>
          <Route
            exact
            path="/user/login"
            render={() => <SignInTab loginFunctions={loginFunctions} />}
          />
        </Switch>
      </ContentWrapper>
    </Wrapper>
  );
}

LoginForm.propTypes = {
  loginWithGoogle: PropTypes.func.isRequired,
};

export default LoginForm;
