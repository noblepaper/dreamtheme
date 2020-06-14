/**
 *
 * Login
 *
 */

import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { doLoginWithUserGoogle, doSetUser } from 'containers/App/actions';
import { auth } from 'utils/firebase';

import LoginForm from 'components/LoginForm';

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export function Login({ loginWithGoogle, saveUser }) {
  const useMountEffect = () =>
    // set listener on auth state
    useEffect(() => {
      auth().onAuthStateChanged(user => {
        if (user) {
          // User is signed in.
          saveUser(user);
        } else {
          // No user is signed in.
        }
      });
    }, []);
  useMountEffect();
  return (
    <Wrapper>
      <Helmet>
        <title>Login</title>
        <meta name="description" content="Description of Login" />
      </Helmet>
      <LoginForm loginWithGoogle={loginWithGoogle} />
    </Wrapper>
  );
}

Login.propTypes = {
  loginWithGoogle: PropTypes.func.isRequired,
  saveUser: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({});

function mapDispatchToProps(dispatch) {
  return {
    loginWithGoogle: () => dispatch(doLoginWithUserGoogle()),
    saveUser: user => dispatch(doSetUser(user)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Login);
