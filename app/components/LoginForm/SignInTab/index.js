/**
 *
 * SignInTab
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import AuthButton from '../AuthButton';

function SignInTab({ loginFunctions }) {
  const { loginWithGoogle } = loginFunctions;
  return (
    <>
      <AuthButton icon="google" onClick={loginWithGoogle}>
        Sign In with Google
      </AuthButton>
      <AuthButton icon="github" onClick={() => console.log('--- GITHUB LOGIN')}>
        Sign In with Github
      </AuthButton>
    </>
  );
}

SignInTab.propTypes = {
  loginFunctions: PropTypes.shape({
    loginWithGoogle: PropTypes.func.isRequired,
  }).isRequired,
};

export default SignInTab;
