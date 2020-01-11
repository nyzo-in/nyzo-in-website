import React from 'react';
import PropTypes from 'prop-types';
import { PlainTextStyles } from './styles';

const PlainText = ({ children }) => (
  <PlainTextStyles>{children}</PlainTextStyles>
);

PlainText.propTypes = {};

export default PlainText;
