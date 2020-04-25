/**
 *
 * AuthButton
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors, sizes, fonts } from 'theme';
import _ from 'lodash';

import GoogleIcon from 'components/svg/GoogleIcon';
import GithubIcon from 'components/svg/GithubIcon';

const { authIconWidth } = sizes.misc;

const icons = {
  google: GoogleIcon,
  github: GithubIcon,
};

const Button = styled.button`
  background-color: ${colors.highlight};
  width: 100%;
  max-width: 232px;
  height: 49px;
  padding: 0 0 0 39px;
  position: relative;
  text-align: left;
  font-family: Quicksand-Regular;
  font-size: 18px;
  color: ${colors.fontDark};
  display: block;
  margin: 0 auto;
  ${fonts.default.regular}

  &:not(:last-of-type) {
    margin-bottom: 23px;
  }
`;

const IconWrapper = styled.div`
  width: ${authIconWidth}px;
  height: ${authIconWidth}px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: -${authIconWidth / 2}px;
  background: #fffdfd;
  border: 1px solid #b7babd;
  box-shadow: 0 2px 4px 0 rgba(182, 180, 180, 0.5);
  border-radius: ${authIconWidth}px;
`;

function AuthButton({ className, icon, children, onClick }) {
  const Icon = icons[icon];
  return (
    <Button type="button" icon={icon} className={className} onClick={onClick}>
      <IconWrapper>
        <Icon />
      </IconWrapper>
      {children}
    </Button>
  );
}

const IconsTypes = _.keysIn(icons);

AuthButton.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.oneOf(IconsTypes).isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

export default AuthButton;
