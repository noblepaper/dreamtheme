/**
 *
 * LoginForm
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from 'theme';

import AuthButton from './AuthButton';

const Wrapper = styled.form`
  padding: 37px 46px 65px;
  border-radius: 8px;
  background-color: ${colors.white};
  box-shadow: 0 4px 4px 0 rgba(191, 191, 191, 0.5);
  width: 100%;
  max-width: 345px;
`;

function LoginForm({ loginWithGoogle }) {
  return (
    <Wrapper>
      <AuthButton icon="google" onClick={loginWithGoogle}>
        Sign In with Google
      </AuthButton>
      <AuthButton icon="github" onClick={() => console.log('--- GITHUB LOGIN')}>
        Sign In with Github
      </AuthButton>
    </Wrapper>
  );
}

LoginForm.propTypes = {
  loginWithGoogle: PropTypes.func.isRequired,
};

export default LoginForm;
