/**
 *
 * LoginForm
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from 'theme';

const Wrapper = styled.form`
  padding: 37px 46px 65px;
  border-radius: 8px;
  background-color: ${colors.white};
  box-shadow: 0 4px 4px 0 rgba(191, 191, 191, 0.5);
  max-width: 345px;
`;

const LoginWithGoogle = styled.button``;

function LoginForm({ loginWithGoogle }) {
  return (
    <Wrapper>
      <LoginWithGoogle type="button" onClick={loginWithGoogle}>
        Sign In with Google
      </LoginWithGoogle>
    </Wrapper>
  );
}

LoginForm.propTypes = {
  loginWithGoogle: PropTypes.func.isRequired,
};

export default LoginForm;
